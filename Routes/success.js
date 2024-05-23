const express=require('express');
const router=express.Router();
const successController=require('../controller/success')


router.get("/success",successController.successGet)
router.post("/success",successController.postSuccess)

module.exports=router;