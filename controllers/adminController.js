const express = require('express');
const router = express.Router();
const {Admin,Staff,} = require('../models');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const bcrypt = require('bcrypt');
const {withAuth} = require('../utils/tokenAuth');

router.get("/",(req,res)=>{
    Admin.findAll({
        include:[Staff]
    })
    .then(admin=>{
        res.json(admin)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"an error occured",err})
    })
})
router.get("/verifyToken",withAuth,(req,res)=>{
    res.json({adminId:req.admin})
})
router.get("/:id",(req,res)=>{
    Admin.findByPk(req.params.id,{
        include:[Shift,Dept]
    })
    .then(admin=>{
        if(!admin) {
            return res.status(404).json({msg:"no record found!"})
        }
        res.json(admin)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"an error occured",err})
    })
})
router.post("/",(req,res)=>{
    Admin.create(req.body).then(newAdmin=>{
        const token = jwt.sign({
            adminId:newAdmin.id
        },process.env.JWT_SECRET,{
            expiresIn:"24h"
        })
        res.json({
            admin:newAdmin,
            token:token
        })
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"an error occured",err})
    })
})
router.post("/login",(req,res)=>{
    Admin.findOne({
        // TODO: do we want admin to have usernames? What about a key code?
        where:{
            username:req.body.username
        }
    }).then(foundAdmin=>{
        if(!foundAdmin){
            return res.status(401).json({msg:"invalid login credentials"})
        }
        if(bcrypt.compareSync(req.body.password,foundAdmin.password)){
            const token = jwt.sign({
                adminId:foundAdmin.id
            },process.env.JWT_SECRET,{
                expiresIn:"24h"
            })
            return res.json({
                admin:foundAdmin,
                token:token
            })
        }
        return res.status(401).json({msg:"invalid login credentials"})
    })
})
// TODO: make this update route match the model
router.put('/:id', (req,res) => {
    Admin.update(
        {
            // All the fields you can update and the data attached to the request body.
            username: req.body.username,
            password: req.body.password,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            phone_number: req.body.phone_number,
            notes: req.body.notes
        },
        {
            where: {
                id: req.body.id,
            },
        }
    )
        .then((updatedAdmin) => {
            res.json(updatedAdmin);
        })
        .catch((err) => res.json(err));
})

// TODO: make sure delete route works
router.delete('/:id', (req,res) => {
    Admin.destroy({
        where: {
            id: req.body.id,
        },
    })
        .then((deletedAdmin) => {
            res.json(deletedAdmin);
        })
        .catch((err) => res.json(err));
})

module.exports = router;