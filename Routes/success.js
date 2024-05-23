const express=require('express');
const router=express.Router();
const path=require('path')
const url=path.join(__dirname,'../views')

router.post("/success",(req,res,next)=>{
    console.log(req.body)
    res.sendFile(path.join(url,'/success.html'))
})

module.exports=router;