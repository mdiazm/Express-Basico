var socket = io();

socket.on('connect', function(){
    console.log('Conectado al servidor');
});

socket.on('disconnect', function(){
    console.log('Desconectado del servidor');
})


socket.emit('enviarMensaje', {
    usuario: 'Miguel',
    mensaje: 'Hola mundo'
});

socket.on('enviarMensaje', function(message){
    console.log(message);
});