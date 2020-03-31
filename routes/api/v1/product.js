const express=require('express');

// using express route
const router=express.Router();

const productController=require('../../../controller/api/v1/productController');
router.get('/',productController.getProduct);
router.post('/create',productController.create);
router.delete('/:id',productController.deleteProduct);
router.put('/:id/update_quantity',productController.updateQnty);


module.exports=router;