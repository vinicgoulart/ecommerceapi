exports.validateAuth = (req, res, next) => {
    if(req.session._id === undefined || req.session.name === undefined){
        res.status(403).json({ status: 'Failed', message: 'Unauthorized!' });
        return;
    }

    next();
};
