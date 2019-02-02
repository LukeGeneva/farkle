import React, { useContext } from 'react';
import LobbyContext from './LobbyContext';

function Lobby() {
  const lobby = useContext(LobbyContext);
  return (
    <React.Fragment>
      <h2>Lobby</h2>
      {lobby.map(user => (
        <div key={user}>{user}</div>
      ))}
    </React.Fragment>
  );
}

export default Lobby;
