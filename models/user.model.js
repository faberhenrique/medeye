const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    name: {type: String, required: true, max: 100},
    user: {type: String, required: true, max: 30},
    password: {type: String, required: true, max: 100},
    cpf: {type: String, required: true, max: 14},
    tel: {type: Number, max: 100},
    date: { type: Date, default: Date.now },
    email: {type: String, required: true, max: 100},
});


// Export the model
module.exports = mongoose.model('User', UserSchema);
