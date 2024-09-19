import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import http from 'http';

import Aprendiz from '../../src/routes/Aprendices.js';
import Usuario from '../../src/routes/Usuarios.js';
import Bitacora from '../../src/routes/Bitacoras.js';
import Ficha from '../../src/routes/Fichas.js';

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 4012; // Usa el puerto 4000 si process.env.PORT no está definido
        this.Server = http.createServer(this.app);

        // Middleware
        this.middlewares();

        // Rutas de la aplicación
        this.routes();

        // Conectar a la base de datos
        // this.conectarbd();
    }

    // async conectarbd() {
    //     await dbconnect();
    // }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use('/api/Usuario', Usuario);
        this.app.use('/api/Aprendiz', Aprendiz);
        this.app.use('/api/Bitacora', Bitacora);
        this.app.use('/api/Ficha', Ficha);
    }

    listen() {
        this.Server.listen(this.port, () => {
            console.log(`Servidor escuchando en el puerto ${this.port}`); // Corrige el uso de template literals
            mongoose.connect('mongodb://localhost:27017')
                .then(() => console.log('Conectado a la base de datos!'))
                .catch(err => console.error('Error al conectar a la base de datos:', err));
        });
    }
}

export { Server };
