const User = require('../models/user.model');

let path = require('path');
let filePath = "./views/pages/user"
let resolvedPath = path.resolve(filePath);

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
        // res.send('User Created successfully')
        res.render(resolvedPath + '/create.ejs',{title: 'Lista de Usuários - Cadastro', user: user});
    })
};
exports.user_all = function (req, res, next) {
    User.find(function (err, user) {
        if (err) return next(err);
        res.render(resolvedPath + '/list.ejs',
        {title: 'Lista de Usuários', users: user, action: '/:id/'});
    })
};
exports.user_details = function (req, res, next) {
    let name = req.body.name;
    User.find( {name: {$regex: name } }, function(err, user) {
        if (user.length) {
            res.render(resolvedPath + '/find.ejs',{title: 'Lista de Usuários - Busca', user: user})
        }
        else res.render(resolvedPath + '/error.ejs',{title: 'Usuário não encontrado - ERROR'})
    });
};

exports.user_update = function (req, res, next) {
    User.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, user) {
        if (err) return next(err);
        res.send('User udpated.');
    });
};

exports.user_delete = function (req, res, next) {
    User.findByIdAndDelete(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};
