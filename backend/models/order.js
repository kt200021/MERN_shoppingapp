const mongoose = require('mongoose');

let Order = new mongoose.Schema({
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
    vendorname:{
          type: String
    },
    status:{
        type:String
    },
    quantityleftfororder:{
        type:Number
    }


});

module.exports = mongoose.model('Orders',Order);