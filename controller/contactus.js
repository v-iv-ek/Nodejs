const path=require('path')
const url=path.join(__dirname,'../views')
exports.contactUs=(req,res,next)=>{
    res.sendFile(path.join(url,'/contactus.html'))
}
exports.postContactUs=(req,res,next)=>{
    res.redirect('/')
}