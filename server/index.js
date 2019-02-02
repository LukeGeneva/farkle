const io = require('socket.io')();

let sockets = [];

io.on('connection', socket => {
  socket.on('disconnect', () => {
    const { username } = socket;
    console.log(`${username} left`);
    io.emit('lobby', sockets.map(sock => sock.username));
    sockets = sockets.filter(sock => sock !== socket);
  });

  socket.on('join', username => {
    console.log(`${username} joined!`);
    socket.username = username;
    sockets.push(socket);
    io.emit('lobby', sockets.map(sock => sock.username));
  });
});

io.listen(3001);
console.log('Listening on port 3001');
