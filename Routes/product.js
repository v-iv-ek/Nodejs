const express=require('express');
const router=express.Router();

const addProductController=require('../controller/product')

router.get("/product",addProductController.addProduct)
router.post("/product",addProductController.postProduct)


 module.exports=router;