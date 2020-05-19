const mongoose = require('mongoose');

let Product = new mongoose.Schema({
    username: {
        type: String
    },
    productname: {
        type: String
    },
    price: {
        type: Number
    },
    quantity: {
 type: Number
    },
    status: {
        type: String
    },
    quantityleftfororder: {
        type: Number
    },
    productrating:{
        type: Number
    },
    vendorrating:{
        type: Number
    },
    nv:{
        type: Number
    },
    np:{
        type: Number
    },

    review:{
        type: String
    }



});

module.exports = mongoose.model('Products',Product);