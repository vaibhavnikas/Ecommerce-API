const mongoose = require('mongoose');

// define productSchema
const productSchema = new mongoose.Schema({
    name: {
        type : String,
        required : true,
        unique : true
    },
    quantity: {
        type : Number,
        required : true
    }
},{
    timestamps : true
});

// create product model to store product info in database
const Product = mongoose.model('Product', productSchema);

// export product model
module.exports = Product;