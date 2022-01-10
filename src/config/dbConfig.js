const mongoose = require('mongoose');
const dbconfig = 'mongodb+srv://jefim9413:jefim1235@cluster0.5lxq6.gcp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const connection = mongoose.connect(dbconfig,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});


module.exports = connection;