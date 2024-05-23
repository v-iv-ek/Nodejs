const path=require('path')
const url=path.join(__dirname,'../views')
   
   
   exports.addProduct=(req,res,next)=>{
        res.sendFile(path.join(url,'/product.html'))
     }
   exports.postProduct=(req,res,next)=>{
    res.redirect('/');
 }
   