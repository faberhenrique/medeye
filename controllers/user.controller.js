const User = require('../models/user.model');

exports.user_create = function (req, res, next) {
    let user = new User(
        {
            name: req.body.name,
            user: req.body.user,
            password: req.body.password,
            cpf: req.body.cpf,
            tel: req.body.tel,
            date: req.body.date,
            email: req.body.email
        }
    );

    user.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('User Created successfully')
    })
};
exports.user_details = function (req, res, next) {
    User.findById(req.params.id, function (err, user) {
        if (err) return next(err);
        res.send(user);
    })
};
