const Annotations  = require('../models/annotationsData');

module.exports = {

    async rend(req,res){
        const priority1 = req.query;
        
        const priorityNotes = await Annotations.find(priority1);
        return priority1;
    },
    async update(req,res){
        const { id } = req.params;
        const annotation = await Annotations.findOne({ _id : id });

        if(annotation.priority){
            annotation.priority = false;    
        }else{
            annotation.priority = true;
        }
        await annotation.save();

        return res.json(annotation);
    }
}