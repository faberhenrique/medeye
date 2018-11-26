const express = require('express');
const routes = express.Router();

const TestController = require('./controllers/TestController')
const ImageController = require('./controllers/ImageController')
const UploadController = require('./controllers/UploadController')

const multer = require('multer')
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads/')
    },
    filename: (req, file, cb) => {
        let type = file.mimetype;
        let typeArray = type.split("/")
        let data = new Date(),
        dia  = data.getDate().toString(),
        diaF = (dia.length == 1) ? '0'+dia : dia,
        mes  = (data.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
        mesF = (mes.length == 1) ? '0'+mes : mes,
        anoF = data.getFullYear();

        cb(null, diaF+"-"+mesF+"-"+anoF + 'fromMedEye' + '.' + typeArray[1]);        
    }
});
const upload = multer({ 
    storage,
    limits: {
        fileSize : 1 * 1024 * 1024 // 1MB
    },
});


// TESTS
routes.get('/tests', TestController.index);
routes.get('/tests/:id', TestController.show);
routes.post('/tests', TestController.store);
routes.put('/tests/:id', TestController.update);
routes.delete('/tests/:id', TestController.destroy);

// IMAGES
routes.get('/images/:id', ImageController.show);
routes.post('/images', ImageController.store);
routes.put('/images/:id', ImageController.update);
routes.delete('/images/:id', ImageController.destroy);
routes.post('/upload', upload.single('img'), UploadController.store);

module.exports = routes;