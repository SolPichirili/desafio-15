const express = require('express');
const NumCPUs = require('os');
const logger = require('../../utils/winston/winston');

const infoRouter = express.Router();

infoRouter.get('/', (req, res) => {
    logger.info(`PATH: ${req.path}, METHOD: ${req.method}, MESSAGE: Proceso exitoso`);
    console.log('Código sincrónico');
    res.json({
        ArgumentosDeEntrada: process.argv,
        NombreDeLaPlataforma: process.platform,
        VersionDeNode: process.version,
        MemoriaTotalReservada: process.memoryUsage(),
        PathDeEjecucion: process.execPath,
        ProcessId: process.pid,
        CarpetaDelProyecto: process.cwd(),
        Procesadores: NumCPUs.cpus().length
    })
});

module.exports = infoRouter;