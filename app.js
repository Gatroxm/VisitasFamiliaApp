require('dotenv').config();
const Server = require('./src/model/server');


const server = new Server();

server.listen();