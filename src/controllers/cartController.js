const cartSchema = require('../models/cartModel');
const itemSchema = require('../models/itemModel');

exports.addItemtoCart = async (req, res) => {
    const query = { _id: req.params.idItem };

    try{
        var findItem = await itemSchema.findOne(query);
        var twoDays = 1000*60*60*48;
        var itemData = new cartSchema({
            item: {
                name: findItem.name,
                value: findItem.value,
                imgLink: findItem.imgLink
            },
            idUser: req.session._id,
            shippingDate: Date.now() + twoDays
        });

        var createCart = await itemData.save();
        res.status(200).json({ status: 'Success', message: 'Item added to cart!' });
    }catch(error){
        res.status(400).json({ status: 'Failed', message: error.message });
    }
};

exports.removeItemfromCart = async (req, res) => {
    const query = { _id: req.params.idCart };
    const update = { item: {} };

    try{
        var cart = await cartSchema.findByIdAndUpdate(query, update);
        res.status(200).json({ status: 'Success', message: 'Item removed!' });
    }catch(error){
        res.status(400).json({ status: 'Failed', message: error.message });
    }
};

exports.destroy = async (req, res) => {
    const query = { _id: req.params.idCart };
    
    try{
        var deleteCart = await cartSchema.findByIdAndDelete(query);
        res.status(200).json({ status: 'Success', message: 'Cart deleted!' });
    }catch(error){
        res.status(400).json({ status: 'Failed', message: error.message });
    }
};

exports.retrieveOneCart = async (req, res) => {
    const query = { idUser: req.session._id };

    try{
        var cart = await cartSchema.findOne(query, { __v: 0 });
        res.status(200).json({ status: 'Success', cart: cart });
    }catch(error){
        res.status(500).json({ status: 'Failed', message: error.message });
    }
};
