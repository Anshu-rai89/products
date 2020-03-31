const Product=require('../../../model/product');


// function to create product in db
module.exports.create=async function (req,res)
{
    try
    {
        // craeting product in db
        let product=await Product.create(req.body);

        return res.json(200,
            {
                message:'product created succfully',
                data:
                {
                    product:product
                }
            }
            );

    }
    catch(err)
    {
        return res.json(500,
            {
                message:'error',
                data:err
            });
    }
}


// function to get product
module.exports.getProduct=async function (req,res)
{
    try
    {

        // fetchingg all products
      let product=await Product.find({});


      // returning it 
      return res.json(200,
        {
            message:'products get reuest success',
            data:
            {
                product:product
            }
        }
        );
    }catch(err)
    {
        return res.json(500,
            {
                message:'error',
                data:err
            });
    }



}

// function to delete product

module.exports.deleteProduct=async function(req,res)
{
    try{
        // deleting product 
          let product=Product.findByIdAndDelete(req.params.id);

          return res.json(200,
            {
                message:'product deleted',
                
            }
            );

       }
       catch(err)
       {
        return res.json(500,
            {
                message:'error',
                data:err
            });
       }

}

//  function to increment quantity
module.exports.updateQnty=async function(req,res)
{  try
    {
        // fetching the product by id 
        let product=await Product.findById(req.params.id);
        
        // adding quantity 
        let q=Number(product.quantity);
        let n=Number(req.query.number);
        let qty=q+n;

        // updating product quantity
        product=await Product.findByIdAndUpdate({_id:product.id},{quantity:qty});


      return res.json(200,
        {
            message:'products updated success',
            data:
            {
                product:product
            }
        }
        );
    }

    catch(err)
    {
        return res.json(500,
            {
                message:'error',
                data:err
            });
       }
    }