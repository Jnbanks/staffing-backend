const express = require('express');
const router = express.Router();
const {Staff, Shift, Department} = require('../models');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const bcrypt = require('bcrypt');
const {withAuth} = require('../utils/tokenAuth');
require("dotenv").config();

// localhost:3001/api/staff

router.get("/",(req,res)=>{
    Staff.findAll({
        include:[Shift, Department]
    })
    .then(staff=>{
        res.json(staff)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"an error occured",err})
    })
})
router.get("/verifyToken",withAuth,(req,res)=>{
    res.json({StaffId:req.staff})
})
router.get("/:id",(req,res)=>{
    Staff.findByPk(req.params.id,{
        include:[Shift, Department]
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
    Staff.create(req.body)
    .then(newStaff=>{
        const token = jwt.sign({
            StaffId: newStaff.id
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
        if(bcrypt.compareSync(req.body.keycode,foundStaff.keycode)){
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
router.put('/:id', withAuth, (req,res) => {
    Staff.update(req.body,{
            where: {
                id: req.params.id,
            },
        }
    )
    .then(updatedStaff=>{
        if(!updatedStaff[0]){
            return res.status(404).json({msg:"no such Staff"})
        }
        res.json(updatedStaff)
     }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"an error occured",err})
    })
})

router.delete('/:id', withAuth, (req,res) => {
    Staff.destroy({
        where: {
            id: req.params.id,
        },
    })
    .then((delStaff) => {
        if (!delStaff) {
          return res.status(404).json({ msg: "no such Staff" });
        }
        res.json(delStaff);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err });
      });
})

module.exports = router;