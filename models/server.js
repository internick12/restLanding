const express = require('express');
const cors = require('cors');

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //Middlewares
        this.middlewares();
        
        //Rutas de la aplicacion
        this.routes();
    }

    routes(){
        this.app.use(this.usuariosPath, require('../routes/usuarios'));
    }

    middlewares(){
        this.app.use( cors() );
        this.app.use( express.static('public') );
        this.app.use( express.json() );
    }

    listen(){
        this.app.listen( this.port, ()=> {
            console.log('Escuchando el puerto:' + this.port )
        });
    }

}

module.exports = Server;