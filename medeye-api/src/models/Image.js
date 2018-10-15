const mongoose = require('mongoose');

const ImageTestSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,        
    },
    test:{
        type: String,
        required: true,        
    },
    urlImage:{
        type: String,
        required: true,        
    },
    urlPdf:{
        type: String,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    }
});

mongoose.model('Image', ImageTestSchema);