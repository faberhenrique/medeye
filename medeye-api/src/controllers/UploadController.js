const mongoose = require('mongoose');
const Uploads = mongoose.model('Uploads');

module.exports = {
    async store(req, res){
        
        let pathImg = req.file.path;
        let test = req.body.test;
        console.log();
        const upload = await Uploads.create(
            [{
                "test" : test,
                "urlImg" : pathImg,
                // "urlPdf" : "https://www.cleo.com/content/uploads/logo_s3-compressor.png"
            }]
        );

        return res.json(upload);
        
    }
}