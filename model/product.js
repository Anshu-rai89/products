const mongoose=require('mongoose');

// craeting product schema
const productSchema=new mongoose.Schema(
    {   name:
        {
            type:String,
            require:true
       },
       quantity:
       {
           type:Number,
           require:true
       }
    },{timestamps:true}
);

// regidtring scema  in db
const Product=mongoose.model('Product1',productSchema);

module.exports=Product;