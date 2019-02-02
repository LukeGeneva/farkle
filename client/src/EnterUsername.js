import React, { useState } from 'react';

function EnterUsername({ onSubmit }) {
  const [username, setUsername] = useState('');

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handleSubmit() {
    onSubmit(username);
  }

  return (
    <React.Fragment>
      <input type="text" onChange={handleUsernameChange} value={username} />
      <button onClick={handleSubmit}>Submit</button>
    </React.Fragment>
  );
}

export default EnterUsername;
