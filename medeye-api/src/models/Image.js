const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,        
    },
    url:{
        type: String,
        required: true,        
    },
    createdAt:{
        type: Date,
        default: Date.now,
    }
});

mongoose.model('Product', ImageSchema);