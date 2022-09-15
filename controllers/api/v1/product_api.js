const Product = require('../../../models/product');
const mongoose = require('mongoose');

module.exports.create = async function(req, res){
    try{
        if(!(req.body.name && req.body.quantity)){
            return res.status(401).json({
                message: 'Please enter name as well as quantity to add the product'
            });
        }

        if(req.body.quantity < 0){
            return res.status(200).json({
                message: 'Product quantity cannot be negative'
            });
        }

        const productAlreadyExists = await Product.findOne({name: req.body.name});

        if(productAlreadyExists){
            return res.status(409).json({
                message: 'Product with the same name already exists'
            });
        }
        
        const newProduct = await Product.create(req.body);

        return res.status(200).json({
            message: 'Product added successfully !',
            data: {  
                product: {
                    name: newProduct.name,
                    quantity: newProduct.quantity
                }
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


module.exports.displayProducts = async function(req, res){
    try{
        let products = await Product.find();
        let message = 'Here is a list of all the products';

        products = products.map((product)=>({
            id: product.id,
            name: product.name,
            quantity: product.quantity
        }));

        if(products.length == 0){
            message = 'There are no products to display !'
        }

        return res.status(200).json({
            message,
            data: {
                products
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


module.exports.delete = async function(req, res){
    try{
        if(req.params.id.length != 24){ 
            req.params.id = parseInt(req.params.id); 
        }
        let _id = mongoose.Types.ObjectId(req.params.id);
        let product = await Product.findById(_id);

        if(!product){
            return res.status(200).json({
                message: 'Invalid id !'
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