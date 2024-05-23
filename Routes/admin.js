const express=require('express');
const router=express.Router();
const path=require('path')
const url=path.join(__dirname,'../views')

router.get("/product",(req,res,next)=>{
    res.sendFile(path.join(url,'/product.html'))
 
 })


 module.exports=router;