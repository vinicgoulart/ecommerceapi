const Mongoose = require('mongoose');

const itemSchema = Mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    value: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        default: 0
    },
    imgLink: {
        type: String,
        required: false,
    }
});

module.exports = Mongoose.model('item', itemSchema);
