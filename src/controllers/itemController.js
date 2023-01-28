const itemSchema = require('../models/itemModel');

exports.index = async (req, res) => {
    try{
        var listItem = await itemSchema.find({}, { _id: 1, name: 1, value: 1, imgLink: 1, category: 1 });
        res.status(200).json({ status: 'Success', list: listItem });
    }catch(error){
        res.status(500).json({ status: 'Failed', message: error.message });
    }
};

exports.store = async (req, res) => {
    const userData = new itemSchema({
        name: req.body.name,
        value: req.body.value,
        description: req.body.description,
        quantity: req.body.quantity,
        category: req.body.category,
        imgLink: req.body.imgLink
    });

    try{
        var storeItem = await userData.save();
        res.status(201).json({ status: 'Success', message: 'Item created!' });
    }catch(error){
        res.status(400).json({ status: 'Failed', message: error.message });
    }
};

exports.findOne = async (req, res) => {
    const query = { _id: req.params.id };

    try{
        var findItem = await itemSchema.findOne(query, { __v: 0 });
        res.status(200).json({ status: 'Success', item: findItem });
    }catch(error){
        res.status(500).json({ status: 'Failed', message: error.message });
    }
};

exports.destroy = async (req, res) => {
    const query = { _id: req.params.id };

    try{
        var deleteItem = await itemSchema.deleteOne(query);
        res.status(200).json({ status: 'Success', message: 'Item deleted!' });
    }catch(error){
        res.status(400).json({ status: 'Failed', message: error.message });
    }
};

exports.update = async (req, res) => {
    const query = { _id: req.params.id };
    const userData = {
        name: req.body.name,
        value: req.body.value,
        description: req.body.description
    };

    try{
        var updateItem = await itemSchema.findByIdAndUpdate(query, userData);
        res.status(200).json({ status: 'Success', message: 'Item updated!' });
    }catch(error){
        res.status(400).json({ status: 'Failed', message: error.message });
    }
};

exports.likeItem = async (req, res) => {
    const query = { _id: req.params.id };

    try{
        var likedItem = await itemSchema.findOne(query);
        var newLikesNumber = likedItem.likes + 1;

        var updateItem = await itemSchema.updateOne(query, { likes: newLikesNumber });
        res.status(200).json({ status: 'Success', message: 'Liked!' });
    }catch(error){
        res.status(400).json({ status: 'Failed', message: error.message });
    }
};
