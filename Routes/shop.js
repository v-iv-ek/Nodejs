const express=require('express');
const router=express.Router();
const path=require('path')
const url=path.join(__dirname,'../views')

router.get("/shop",(req,res,next)=>{
    console.log(req.body)
    res.sendFile(path.join(url,'/shop.html'))
})

module.exports=router;