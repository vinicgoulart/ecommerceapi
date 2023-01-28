const Mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = Mongoose.Schema({
    email: {
        type: String,
        required: true,
        index: {
            unique: true
        }
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    address: {
        type: Object,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true,
        index: {
            unique: true
        }
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    },
    createdAt: {
        type: Date,
        required: true
    }
});

userSchema.pre('save', function(next){
    var user = this;

    if(!user.isModified('password')) return next();

    bcrypt.genSalt(10, function(err, salt){
        if(err) return next(err);

        bcrypt.hash(user.password, salt, function(err, hash){
            if(err) return next(err);

            user.password = hash;
            next();
        });
    });
});

module.exports = Mongoose.model('user', userSchema);
