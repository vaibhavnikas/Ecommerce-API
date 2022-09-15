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

        if(!req.query.number){
            return res.status(200).json({
                message: 'Please enter number in query params to update quantity'
            })
        }

        if(parseInt(req.query.number) < 0){
            return res.status(200).json({
                message: 'Product quantity cannot be negative'
            });
        }

        product.quantity = parseInt(req.query.number);
        product.save();

        return res.status(200).json({
            message: 'quantity updated successfully',
            data: {
                id: product.id,
                name: product.name,
                quantity: product.quantity
            }
        });
    }catch(err){
        console.log('Error :');
        console.log('*:', err);
        return res.status(500).json({
            message: 'Internal Server Error'
        });
    }
}