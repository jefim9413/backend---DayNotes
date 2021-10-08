const mongoose = require('mongoose');
const dbconfig = 'mongodb://localhost:27017/DayNotes';
const connection = mongoose.connect(dbconfig,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});


module.exports = connection;