const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./db.js');

const PORT = process.env.PORT || 3000;

const router = require('./router');
//Middleware
let corsOptions = {//CONFIGURO OPCIONES DE CORS PARA PERMITIR QUE ACCIONES DE API NO SEAN DETECTADAS COMO MALWARE
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204
};

app.use(express.json()); //PUEDO OBTENER JSON DEL BODY
app.use(cors(corsOptions));  //USO CORS
//Middleware

app.use(router);

db.then(()=>{
    app.listen(PORT, ()=> console.log(`Server on port ${PORT}`)); //Conectado a la base de datos
})
.catch((err)=> console.log(err.message));   
