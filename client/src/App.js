import React, { useEffect, useState } from 'react';
import EnterUsername from './EnterUsername';
import Lobby from './Lobby';
import LobbyContext from './LobbyContext';
import socket from './socket';
import './App.css';

function App() {
  const initialUser = localStorage.getItem('user');
  const [user, setUser] = useState(initialUser);
  const [lobby, setLobby] = useState([]);

  useEffect(() => {
    if (user) localStorage.setItem('user', user);
  });

  useEffect(() => {
    if (user) socket.emit('join', user);

    socket.on('lobby', newLobby => {
      setLobby(newLobby);
    });
  }, []);

  function handleUserSubmit(username) {
    socket.emit('join', username);
    setUser(username);
  }

  return (
    <LobbyContext.Provider value={lobby}>
      {!user && <EnterUsername onSubmit={handleUserSubmit} />}
      {user && <Lobby />}
    </LobbyContext.Provider>
  );
}

export default App;
