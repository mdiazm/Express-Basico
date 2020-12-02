const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const path = require('path');

// Express nace de HTTP en node.js, puesto que puede realizarse lo siguiente:
const app = express();
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// Inicializar socket.io
module.exports.io = socketIO(server);
require('./sockets/socket');

// Reemplazar app.listen por server.listen
server.listen(port, (err) => {
    if (err) throw new Error(err);
    console.log(`Servidor corriendo en puerto ${ port }`);
});