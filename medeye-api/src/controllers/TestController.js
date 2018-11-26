const mongoose = require('mongoose');

const Tests = mongoose.model('Tests');

module.exports = {
    async index(req,res){
        const { page = 1 } = req.query;
        const tests = await Tests.paginate({}, { page , limite: 10 });
        return res.json(tests);
    },
    async show(req, res){
        const test = await Tests.findById(req.params.id);

        return res.json(test);
    },
    async store(req, res){
        const test = await Tests.create(req.body);

        return res.json(test);
    },
    async update(req, res){
        const test = await Tests.findOneAndUpdate(req.params.id, req.body, { 
            new: true
        });

        return res.json(test);
    },
    async destroy(req, res){
        const test = await Tests.findOneAndDelete(req.params.id);

        return res.send();
    }
}


