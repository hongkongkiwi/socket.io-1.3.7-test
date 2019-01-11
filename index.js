var io = require('socket.io')(3000);
io.on('connection', function(socket){
  socket.on('hello', (message) => {
    if (message) {
      socket.emit('hello', message);
      console.log(`Got hello ${message}`);
    } else {
      socket.emit('hello');
      console.log('Got hello');
    }
  });
  console.log('Client Connected')
});
console.log('Socket Server Ready!')
