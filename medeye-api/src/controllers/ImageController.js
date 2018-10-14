const mongoose = require('mongoose');

const Images = mongoose.model('Image');

module.exports = {
    async show(req, res){
        const image = await Images.findById(req.params.id);

        return res.json(image);
    },
    async store(req, res){
        const image = await Images.create(req.body);

        return res.json(image);
    },
    async update(req, res){
        const image = await Images.findOneAndUpdate(req.params.id, req.body, { 
            new: true
        });

        return res.json(image);
    },
    async destroy(req, res){
        const image = await Images.findOneAndDelete(req.params.id);

        return res.send();
    }
}