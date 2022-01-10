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


//SERVIDOR 
app.listen("backend-day-notes-aztuxon40-jefim9413.vercel.app",function() {
    console.log("server running !!");
});