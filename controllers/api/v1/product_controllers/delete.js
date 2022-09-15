const Product = require('../../../../models/product');
const mongoose = require('mongoose');

module.exports = async function(req, res){
    try{
        if(req.params.id.length != 24){ 
            req.params.id = parseInt(req.params.id); 
        }
        let _id = mongoose.Types.ObjectId(req.params.id);
        let product = await Product.findById(_id);

        if(!product){
            return res.status(200).json({
                message: 'Invalid product-id !'
            });
        }

        product.remove();

        return res.status(200).json({
            message: 'product deleted'
        });
    }catch(err){
        console.log('Error :');
        console.log('*:', err);
        return res.status(500).json({
            message: 'Internal Server Error'
        });
    }
}