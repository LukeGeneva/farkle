import { useEffect, useState } from 'react';
import socket from './socket';

function useLobby() {
  const [lobby, setLobby] = useState([]);

  useEffect(() => {
    socket.on('join', user => {
      setLobby([...lobby, user]);
    });

    socket.on('leave', userLeft => {
      setLobby(lobby.filter(user => user !== userLeft));
    });
  }, []);

  return lobby;
}

export default useLobby;
