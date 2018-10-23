const mongoose = require('mongoose');
const Uploads = mongoose.model('Uploads');

module.exports = {
    async store(req, res){
        console.log(req.body, req.file.path)

        return res.send('ok');
    }
}