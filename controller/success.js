const path=require('path')
const url=path.join(__dirname,'../views')
exports.successGet=(req,res,next)=>{
    res.sendFile(path.join(url,'/success.html'))
}
exports.postSuccess=(req,res,next)=>{
    res.redirect('/')
}