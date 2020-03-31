const mongoose=require('mongoose');


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


const Product=mongoose.model('Product1',productSchema);

module.exports=Product;