const mongoose = require('mongoose')

const ProductEntranceSchema = new mongoose.Schema({

    entrance:{
        products:[
            {     
            product: {     
             type: mongoose.Schema.Types.ObjectId,
             ref: "Product",
             required: true,
            },
             quantity: Number,
             price: Number,
            },
        ],
    },   

     createdAt: {
            type: Date,
            default: Date.now,
    },
});

module.exports = mongoose.model('entradaProduto',ProductEntranceSchema);
