const mongoose = require('mongoose')

const ClientSchema = new mongoose.Schema({
    clientName:{
        type: String,
        required:true
    },
    clientAddress: {
        type: String,
        required:true
    },
    clientTelephone: {
        type: String,
        required: true
    },
    clientDescription: {
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
}
})

module.exports = mongoose.model('Client',ClientSchema);
