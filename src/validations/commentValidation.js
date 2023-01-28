exports.validateStore = (req, res, next) => {
    if(!req.body.comment){
        res.status(400).json({ status: 'Failed', message: 'Comment is necessary!' });
        return;
    }

    var comment = req.body.comment;

    if(comment.length > 360){
        res.status(400).json({ status: 'Failed', message: 'Comment must not be longer than 360 characters!' });
        return;
    }

    next();
};
