const express = require('express');
const numCPUS = require('os').cpus().length;

const server = express(); 

const port = 8080;

server.get('/', (req, res) => {
    res.json({mensaje: 'Funcionamiento correcto'});
});

const app = server.listen(port, ()=>{
    console.log(`Cantidad de procesadores ${numCPUS}`);
    console.log(`PID MASTER ${process.pid}`);
    console.log(`Funcionando en puerto ${port}`);
});

app.on('error', (error)=>{
    console.log(`Error: ${error}`);
});