const path=require('path')
const url=path.join(__dirname,'../views')


exports.shopGet=(req,res,next)=>{
    res.sendFile(path.join(url,'/shop.html'))
}
exports.postShop=(req,res,next)=>{
    res.redirect('/')
}