exports.verifyRegister = (req, res, next) => {
    if(!req.body.email || !req.body.password || !req.body.age || !req.body.address || !req.body.name || !req.body.cpf || !req.body.username){
        res.status(400).json({ status: 'Failed', message: 'All fields must be filled!' });
        return;
    }

    if(typeof req.body.age !== 'number'){
        res.status(400).json({ status: 'Failed', message: 'Age must be a number!' });
        return;
    }

    var username = req.body.username;
    var pattern = /[a-zA-Z0-9]{3,}/;
    var isAlphanumeric = pattern.test(username);

    if(!isAlphanumeric){
        res.status(400).json({ status: 'Failed', message: 'username must be longer than 3 characters and be alphanumeric only!' });
        return;
    }
    
    var password = req.body.password;
    var passPattern = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/;
    var isStrongPass = passPattern.test(password);

    if(!isStrongPass){
        res.status(400).json({ status: 'Failed', message: 'Password: 8 characters, 2 Upper case, 1 special charac. 2 numbers and 3 in lower case' });
        return;
    }

    next();
};

exports.verifyLogin = (req, res, next) => {
    if(!req.body.email || !req.body.password){
        res.status(400).json({ status: 'Failed', message: 'Both email and password must be filled!' });
        return;
    }

    next();
};

exports.changePassword = (req, res, next) => {
    if(!req.body.password || !req.body.email){
        res.status(400).json({ status: 'Failed', message: 'Password and email must be filled!' });
        return;
    }

    var password = req.body.password;
    var passPattern = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/;
    var isStrongPass = passPattern.test(password);

    if(!isStrongPass){
        res.status(400).json({ status: 'Failed', message: 'Password: 8 characters, 2 Upper case, 1 special charac. 2 numbers and 3 in lower case' });
        return;
    }

    next();
};
