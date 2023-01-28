exports.validateStore = (req, res, next) => {
    if(!req.body.name || !req.body.value || !req.body.description || !req.body.quantity || !req.body.category || !req.body.imgLink){
        res.status(400).json({ status: 'Failed', message: 'All fields must be filled!' });
        return;
    }

    if(typeof req.body.value !== 'number'){
        res.status(400).json({ status: 'Failed', message: 'Value must be a number' });
        return;
    }

    if(typeof req.body.quantity !== 'number'){
        res.status(400).json({ status: 'Failed', message: 'Quantity must be a number' });
        return;
    }

    var pattern = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;
    var isURI = pattern.test(req.body.imgLink);

    if(!isURI){
        res.status(400).json({ status: 'Failed', message: 'Uri must be valid!' });
        return;
    }

    next();
};

exports.validateUpdate = (req, res, next) => {
    if(!req.body.name && !req.body.value && !req.body.description){
        res.status(400).json({ status: 'Failed', message: 'At least one field must be filled!' });
        return;
    }

    if(typeof req.body.value !== 'number'){
        res.status(400).json({ status: 'Failed', message: 'Value must be a number!' });
        return;
    }

    next();
};
