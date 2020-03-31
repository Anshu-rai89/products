const express=require('express');

// using express route
const router=express.Router();

const productController=require('../../../controller/api/v1/productController');


// route to show all products 
router.get('/',productController.getProduct);

// route to craete new product
router.post('/create',productController.create);

// route to delete product
router.delete('/:id',productController.deleteProduct);

// route to update product 
router.put('/:id/update_quantity',productController.updateQnty);


module.exports=router;