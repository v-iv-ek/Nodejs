const path=require('path')
const bodyParser=require('body-parser')
const url=path.join(__dirname,'../views')
const Product=require('../models/product')
const express=require('express');
const app=express()
app.use(bodyParser.urlencoded({extended:false}))
 exports.addProduct=(req,res,next)=>{
      const products=Product.fetchAll((product)=>{
         
      })
      console.log(products)
        res.sendFile(path.join(url,'/product.html'))
     }
 exports.postProduct=(req,res,next)=>{
    const product=new Product(req.body.title);
    product.save()
    res.redirect('/product');
 }
   