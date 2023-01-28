const Mongoose = require('mongoose');

const cartSchema = Mongoose.Schema({
    item: {
        type: {
            name: { type: String, required: true },
            value: { type: Number, required: true }
        },
        required: true
    },
    idUser: {
        type: String,
        required: true
    },
    shippingDate: {
        type: Date,
        required: true
    },
    alreadyPaid: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = Mongoose.model('cart', cartSchema);
