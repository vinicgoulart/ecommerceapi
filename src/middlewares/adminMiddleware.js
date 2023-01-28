exports.verifyAdmin = (req, res, next) => {
    if(!req.session.isAdmin){
        res.status(403).json({ status: 'Failed', message: 'You must be an admin to do this action!' });
        return;
    }

    next();
};
