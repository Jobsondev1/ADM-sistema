const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    productName:{
        type: String,
        required: true,
    },
    productSize:{
        type: String,
        required: true,
    },
    productDescription: {
        type: String,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now
}

})

module.exports = mongoose.model('Product',ProductSchema);
