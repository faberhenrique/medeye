// app.js
const express = require('express');
const bodyParser = require('body-parser');

// Imports routes for the products
const user = require('./routes/user.route');
// initialize our express app
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://system:6ReSWMFH8QJj2He@ds239692.mlab.com:39692/medeye';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/user', user);

let port = 3001;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
