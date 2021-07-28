const mongoose = require('mongoose');

const SalesSchema = new mongoose.Schema({

    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    }],

});


module.exports = mongoose.model('Sales',SalesSchema);