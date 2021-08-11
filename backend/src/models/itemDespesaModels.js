const mongoose = require('mongoose')

const itemDespesaSchema = new mongoose.Schema({
    itetemName:{
        type: String,
        required: true,
    },
    itemType:{
        type: Number, 
        default:1
    },
    itemDescription: {
        type: String,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now
}

})

module.exports = mongoose.model('Product',ProductSchema);
