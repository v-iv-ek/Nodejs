const express=require('express');
const bodyParser=require('body-parser')
const app=express();
const adminRoute=require('./Routes/admin')
const shopRoute=require('./Routes/shop')
const contactRoute=require('./Routes/contactus')
const successRoute=require('./Routes/success')
const path=require('path')

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')))
app.use(adminRoute)
app.use(shopRoute)
app.use(contactRoute)
app.use(successRoute)


app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'/views/pagenotfound.html'))
})
app.listen(3000);