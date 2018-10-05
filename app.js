// app.js
const express = require('express');
const bodyParser = require('body-parser');
let path = require('path');
let Promise = require("bluebird");


// initialize our express app
const app = express();
app.set('view engine', 'ejs');

const jwt = require('jsonwebtoken');
const exjwt = require('express-jwt');


// Set up mongoose connection
const mongoose = require('mongoose');
Promise.promisifyAll(mongoose);
let dev_db_url = 'mongodb://system:6ReSWMFH8QJj2He@ds239692.mlab.com:39692/medeye';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'));

// Imports routes for the products
const user = require('./routes/user.route');
app.use('/user', user);

app.get('/', (req, res) => {
  res.render(__dirname + '/views/index.ejs',{title: 'Lista de Usuários - Cadastro'})
})
let port = 5000;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
