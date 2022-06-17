const express = require('express');
const router = express.Router();
const {Staff,Dept,Shift} = require('../models');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const bcrypt = require('bcrypt');
const {withAuth} = require('../utils/tokenAuth');

router.get("/",(req,res)=>{
    Staff.findAll({
        include:[Shift,Dept]
    })
    .then(staff=>{
        res.json(staff)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"an error occured",err})
    })
})
router.get("/verifyToken",withAuth,(req,res)=>{
    res.json({staffId:req.staff})
})
router.get("/:id",(req,res)=>{
    Staff.findByPk(req.params.id,{
        include:[Shift,Dept]
    })
    .then(staff=>{
        if(!staff) {
            return res.status(404).json({msg:"no record found!"})
        }
        res.json(staff)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"an error occured",err})
    })
})
router.post("/",(req,res)=>{
    Staff.create(req.body).then(newStaff=>{
        const token = jwt.sign({
            staffId:newStaff.id
        },process.env.JWT_SECRET,{
            expiresIn:"24h"
        })
        res.json({
            staff:newStaff,
            token:token
        })
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"an error occured",err})
    })
})
router.post("/login",(req,res)=>{
    Staff.findOne({
        // TODO: do we want staff to have usernames? What about a key code?
        where:{
            username:req.body.username
        }
    }).then(foundStaff=>{
        if(!foundStaff){
            return res.status(401).json({msg:"invalid login credentials"})
        }
        if(bcrypt.compareSync(req.body.password,foundStaff.password)){
            const token = jwt.sign({
                staffId:foundStaff.id
            },process.env.JWT_SECRET,{
                expiresIn:"24h"
            })
            return res.json({
                staff:foundStaff,
                token:token
            })
        }
        return res.status(401).json({msg:"invalid login credentials"})
    })
})
// TODO: make this update route match the model
router.put('/:id', (req,res) => {
    Staff.update(
        {
            // All the fields you can update and the data attached to the request body.
            name: req.body.name,
            position: req.body.position,
            phone_number: req.body.phone_number,
            on_call: req.body.on_call,
            special_training: req.body.special_training,
            privilege: req.body.privilege,
        },
        {
            where: {
                id: req.body.id,
            },
        }
    )
        .then((updatedStaff) => {
            res.json(updatedStaff);
        })
        .catch((err) => res.json(err));
})

// TODO: make sure delete route works
router.delete('/:id', (req,res) => {
    Staff.destroy({
        where: {
            id: req.body.id,
        },
    })
        .then((deletedStaff) => {
            res.json(deletedStaff);
        })
        .catch((err) => res.json(err));
})

module.exports = router;