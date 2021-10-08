const annotationsData = require('../models/annotationsData');
const Annotations = require('../models/annotationsData');

module.exports = {
    async read(req,res){    
        const annotationsList = await Annotations.find();
        return res.json(annotationsList);
    },
    async create(req,res) {
        
        const { title , notes , priority} = req.body;
        
        if(!notes || !title){
            return res.status(400).json({ error: "Necessario Um titulo/anotação"});
        };
        const annotationCreate = await Annotations.create({
            title,
            notes,
            priority    
        })
        return res.json(annotationCreate);
    },
    async delete(req,res){
        const { id } = req.params;
        const annotationDeleted = await Annotations.findOneAndDelete({ _id : id})

        if(annotationDeleted) {
            return res.json(annotationDeleted);
        }
    
        return res.status(401).json({ error: "Não foi encontrado o registro para deletar!" });
    }
}