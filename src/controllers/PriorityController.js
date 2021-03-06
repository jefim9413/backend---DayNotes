const Annotations  = require('../models/annotationsData');

module.exports = {

    async rend(req,res){
        const priority1 = req.query;
        
        const priorityNotes = await Annotations.find(priority1);
        
        if(priorityNotes === false){
            return res.json(priorityNotes);
        }
        else{
            return res.json(priorityNotes);
        }
        
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