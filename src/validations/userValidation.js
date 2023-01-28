exports.validateNickname = (req, res, next) => {
    if(!req.body.userName){
        res.status(400).json({ status: 'Success', message: 'Username must be filled!' });
        return;
    }

    var userName = req.body.userName;
    var pattern = /[a-zA-Z0-9]{4,}$/;
    var isValid = pattern.test(userName);

    if(!isValid){
        res.status(400).json({ status: 'Failed', message: 'Username must contain only alphanumeric characters! And be 4 characters long' });
        return;
    }

    next();
};
