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
app.use(routes);

const port = process.env.PORT|| 8877 


//SERVIDOR 
app.listen(port,()=> {
    console.log("server running !!");
});