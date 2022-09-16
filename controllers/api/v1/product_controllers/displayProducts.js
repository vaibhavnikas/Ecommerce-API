const Product = require('../../../../models/product');
// function to display all the products
module.exports = async function(req, res){
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