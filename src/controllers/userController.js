const userSchema = require('../models/userModel');

exports.index = async (req, res) => {
    try{
        var listUser = await userSchema.find({}, { password: 0, __v: 0, cpf: 0 });
        res.status(200).json({ status: 'Success', list: listUser });
    }catch(error){
        res.status(500).json({ status: 'Failed', message: error.message });
    }
};

exports.updateNickname = async (req, res) => {
    const query = { _id: req.params.id };
    const userData = {
        userName: req.body.userName
    };

    try{
        var verifyUser = await userSchema.findOne(query, { _id: 1, userName: 1 });

        if(verifyUser._id != req.session._id){
            res.status(403).json({ status: 'Failed', message: 'You can only update your nickname!' });
            return;
        }

        var updateUser = await userSchema.findByIdAndUpdate(query, userData);
        res.status(200).json({ status: 'Success', message: 'Username changed!' });
    }catch(error){
        res.status(400).json({ status: 'Failed', message: error.message });
    }
};

exports.destroy = async (req, res) => {
    const query = { _id: req.params.id };
    
    try{  
        var verifyUser = await userSchema.findOne(query, { _id: 1 });

        if(verifyUser._id !== req.session._id){
            res.status(403).json({ status: 'You must only delete your own account!' });
            return;
        }
        
        var deletedUser = await userSchema.findByIdAndDelete(query);
        res.status(200).json({ status: 'Success', message: 'User deleted!' });
    }catch(error){
        res.status(400).json({ status: 'Failed', message: error.message });
    }
};

exports.updateAdmin = async (req, res) => {
    const query = { _id: req.params.id };
    const update = { isAdmin: true };

    try{
        var updateUser = await userSchema.findByIdAndUpdate(query, update);
        res.status(200).json({ status: 'Success', message: 'User is now an admin!' });
    }catch(error){
        res.status(400).json({ status: 'Failed', message: error.message });
    }
};

exports.listOne = async (req, res) => {
    const query = { _id: req.params.id };

    try{
        var user = await userSchema.findOne(query, { password: 0, __v: 0, address: 0, cpf: 0 });
        res.status(200).json({ status: 'Success', user: user });
    }catch(error){
        res.status(500).json({ status: 'Failed', message: error.message });
    }
};
