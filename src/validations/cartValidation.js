exports.validateCreate = (req, res, next) => {
    if(!req.params.idItem){
        res.status(400).json({ status: 'Failed', message: 'The id of the item is required!' });
        return;
    }

    next();
};
