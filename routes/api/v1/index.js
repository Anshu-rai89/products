const express=require('express');

// using express route
const router=express.Router();
const productController=require('../../../controller/api/v1/productController');
router.use('/products',require('./product'));


module.exports=router;