const mongoose = require('mongoose');

// define adminSchema
const adminSchema = new mongoose.Schema({
    email: {
        type : String,
        required : true,
        unique: true
    },
    password: {
        type : String,
        required : true
    }
},{
    timestamps : true
});

// create admin model to store admin's info in database
const Admin = mongoose.model('Admin', adminSchema);

// export admin model
module.exports = Admin;