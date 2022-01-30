//BACKEND DO DAYNOTES.

//Carregando Módulos 
const express = require('express');
const routes = require('./routes');
const cors = require('cors');
//CONFIGURAÇÕES 
    
const app = express();
require('./config/dbConfig');
app.use(cors());
app.use(express.json());

//ROTAS 
const port = process.env.PORT || 8877 
app.use(routes);
app.get('/', (req,res) => { 
    res.json({
        msg: 'jjjjs'
    })
})




//SERVIDOR 
app.listen(port,()=> {
    console.log("server running !!" + port );
});