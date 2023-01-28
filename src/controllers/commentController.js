const commentSchema = require('../models/commentModel');

exports.store = async (req, res) => {
    const userData = new commentSchema({
        comment: req.body.comment,
        idItem: req.params.idItem,
        idUser: req.session._id,
        createdAt: Date.now()
    });

    try{
        var createComment = await userData.save();
        res.status(200).json({ status: 'Success', message: 'Comment created!' });
    }catch(error){
        res.status(400).json({ status: 'Failed', message: error.message });
    }
};

exports.findByItem = async (req, res) => {
    const query = { idItem: req.params.itemId };

    try{
        var listItemComment = await commentSchema.find(query, { createdAt: 0, __v: 0 });
        res.status(200).json({ status: 'Success', list: listItemComment });
    }catch(error){
        res.status(400).json({ status: 'Failed', message: error.message });
    }
};

exports.destroy = async (req, res) => {
    const query = { _id: req.params.id };

    try{
        var findComment = await commentSchema.findOne(query);

        if(findComment.idUser !== req.session._id){
            res.status(403).json({ status: 'Failed', message: 'You do not have permission to do this!' });
            return;
        }

        var deleteComment = await commentSchema.deleteOne(query);
        res.status(200).json({ status: 'Success', message: 'Comment deleted!' });
    }catch(error){
        res.status(400).json({ status: 'Failed', message: error.message });
    }
};
