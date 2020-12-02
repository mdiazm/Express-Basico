const {io} =  require('../server');

io.on('connection', (client) => {
    console.log('Usuario conectado');
    
    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        message: 'Bienvenido al canal'
    }) 
    
    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    })

    // Escuchar al cliente
    client.on('enviarMensaje', (message, callback) => {
        console.log(message);

        client.broadcast.emit('enviarMensaje', message);

        // callback({
        //     message: 'Todo salió bien'
        // });
    })
});