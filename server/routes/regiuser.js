const express=require('express');
const registeruser=require('../models/register')

const routeruser=express.Router();

routeruser.post('/api/evregister',async(req,res)=>{
    res.json({msg:"work correctly registered"})
})

module.exports=routeruser;