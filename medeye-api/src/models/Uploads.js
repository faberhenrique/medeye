const mongoose = require('mongoose');

const UploadSchema = new mongoose.Schema({
    title:{
        type: String,
        // required: true,
    },
    description:{
        type: String,
        // required: true,        
    },
    urlImg:{
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
mongoose.model('Uploads', UploadSchema);
