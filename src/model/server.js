const express = require('express');
const cors = require('cors');
const { dbConection } = require('../database/config.db');
class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.visitaRouter = '/api/visita/';

        //Base De Datos
        this.conectarDB();

        //midelwares
        this.midelwares();
        //Rutas
        this.routes();
    }

    async conectarDB() {
        await dbConection();
    }

    midelwares() {
        // cors
        this.app.use(cors());

        //Lectura y parcedo del body
        this.app.use(express.json());

        // Dirección publica
        this.app.use(express.static('public'))
    }
    routes() {
        this.app.use(this.visitaRouter, require('../routes/Visita.routes'));
    }
    listen() {
        this.app.listen(this.port, (req, res) => {
            console.log(`listening on port ${this.port}`);
        });
    }

}

module.exports = Server;