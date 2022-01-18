const express = require('express');
const { fork } = require('child_process');
const logger = require('../../utils/winston/winston');

const DEFAULT_CANT = 100000000;

const randomRouter = express.Router();

randomRouter.get('/', (req, res) => {
    logger.info(`PATH: ${req.path}, METHOD: ${req.method}, MESSAGE: Proceso exitoso`);
    const { cant = DEFAULT_CANT } = req.query;

    const computo = fork('./src/utils/random/countRandom.js');

    computo.on('message', msg => {
        if (msg == 'listo') {
            computo.send(cant)
        } else {
            res.send(msg)
        }
    });
});

module.exports = randomRouter;