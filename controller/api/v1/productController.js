const Product=require('../../../model/product');



module.exports.create=async function (req,res)
{
    try
    {

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



module.exports.getProduct=async function (req,res)
{
    try
    {
      let product=await Product.find({});


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


module.exports.deleteProduct=async function(req,res)
{
    try{
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
module.exports.updateQnty=async function(req,res)
{  try
    {
        let product=await Product.findById(req.params.id);

        let q=Number(product.quantity);
        let n=Number(req.query.number);
        let qty=q+n;
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