const Mongoose = require('mongoose');

const commentSchema = Mongoose.Schema({
    comment: {
        type: String,
        required: true
    },
    idItem: {
        type: String,
        required: true
    },
    idUser: {
        type: String,
        required: true
    },
    createdAt: {
        type: String,
        default: Date.now(),
    }
});

module.exports = Mongoose.model('comment', commentSchema);
