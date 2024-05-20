const express=require('express');
const router=express.Router();

router.get("/add-product",(req,res,next)=>{
    res.send(`<form action="/admin/product" method="POST"><input type="text" name="userName"><br><input type="tel" name="age"><button type="submit">Add Name</button></form>`)
 
 })
 router.post("/product",(req,res,next)=>{
     console.log(req.body)
     res.redirect("/add-product")
 })

 module.exports=router;