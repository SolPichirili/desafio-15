require('dotenv').config();
const express = require('express');
const productsRouter = require('./routers/products/products');
const cartRouter = require('./routers/cart/cart');
const infoRouter = require('./routers/info/info');
const randomRouter = require('./routers/random/randomRouter');
const cluster = require('cluster');
const numCPUS = require('os').cpus().length;
const compression = require('compression');

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use(compression());

server.use('/api/productos', productsRouter);
server.use('/api/carrito', cartRouter);
server.use('/info', infoRouter);
server.use('/api/randoms', randomRouter);

server.use(express.static('public'));

const isCluster = process.argv[2] === 'CLUSTER';

if (cluster.isMaster && isCluster) {
    console.log(`Cantidad de procesadores ${numCPUS}`);
    console.log(`PID MASTER ${process.pid}`);

    for (let i = 0; i < numCPUS; i++) {
        cluster.fork();
    }

    cluster.on('exit', worker => {
        console.log(`Worker ${worker.process.pid} died ${new Date().toLocaleString()}`);
        cluster.fork();
    })
} else {
    let port = parseInt(process.env.PORT) || 8081;

    server.get('/ok', (req, res) => {
        res.json({ mensaje: 'Funcionamiento correcto' });
    });

    const app = server.listen(port, () => {
        console.log(`Cantidad de procesadores ${numCPUS}`);
        console.log(`PID MASTER ${process.pid}`);
        console.log(`Funcionando en puerto ${port}`);
    });

    app.on('error', (error) => {
        console.log(`Error: ${error}`);
    });
}

