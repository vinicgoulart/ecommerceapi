const userSchema = require('../models/userModel');
const bcrypt = require('bcrypt');

exports.register = async (req, res) => {
    const userData = new userSchema({
        email: req.body.email,
        password: req.body.password,
        age: req.body.age,
        address: req.body.address,
        name: req.body.name,
        cpf: req.body.cpf,
        admin: false,
        userName: req.body.username,
        createdAt: Date.now()
    });

    try{
        var createUser = await userData.save();
        res.status(201).json({ status: 'Success', message: 'User created!' });
    }catch(error){
        res.status(400).json({ status: 'Failed', message: error.message });
    }
};

exports.login = async (req, res) => {
    const query = { email: req.body.email };

    try{
        var findUser = await userSchema.findOne(query);
        var comparePass = await bcrypt.compare(req.body.password, findUser.password);

        if(!comparePass){
            res.status(401).json({ status: 'Failed', message: 'Unauthorized' });
            return;
        }

        req.session._id = findUser._id;
        req.session.name = findUser.name;
        req.session.isAdmin = findUser.isAdmin;
        req.session.save();

        res.status(200).json({ status: 'Success', message: 'Authorized!' });
    }catch(error){
        res.status(400).json({ status: 'Failed', message: error.message });
    }
};

exports.change_pass = async (req, res) => {
    const query = { email: req.body.email };

    try{
        var user = await userSchema.findOne(query);
        console.log(user);

        if(!user.password){
            res.send(404).json({ status: 'Failed', message: 'User not found!' });
            return;
        }

        var salt = await bcrypt.genSalt(10);
        var hashedPass = await bcrypt.hash(req.body.password, salt);

        var updateUser = await userSchema.updateOne(query, { password: hashedPass });
        res.status(200).json({ status: 'Success', message: 'User password changed!' });
    }catch(error){
        res.status(400).json({ status: 'Failed', message: error.message });
    }
};

exports.logout = (req, res) => {
    try{
        req.session._id = undefined;
        req.session.name = undefined;
        req.session.save(function (err){
            if(err) next(err);

            req.session.regenerate(function (err){
                if(err) next(err);
            });
        });

        res.status(200).json({ status: 'Success', message: 'Logged out!' });
    }catch(error){
        res.status(500).json({ status: 'Failed', message: error.message });
    }
};
