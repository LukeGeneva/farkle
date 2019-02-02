const io = require('socket.io')();
const lobby = require('./lobby');

io.on('connection', socket => {
  socket.on('disconnect', () => {
    const { username } = socket;
    console.log(`${username} left`);
    lobby.removeUser(username);
    io.emit('lobby', lobby.getUsers());
  });

  socket.on('join', username => {
    console.log(`${username} joined!`);
    socket.username = username;
    lobby.addUser(username);
    io.emit('lobby', lobby.getUsers());
  });
});

io.listen(3001);
console.log('Listening on port 3001');
