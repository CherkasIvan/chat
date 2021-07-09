import React, {useState} from 'react';
import axios from 'axios';

import {Button, Input} from "./JoinBlockStyles";

function JoinBlock({ onLogin, children }) {
  const [roomId, setRoomId] = useState('');
  const [userName, setUserName] = useState('');
  const [isLoading, setLoading] = useState(false);

  const onEnter = async () => {
    if (!roomId || !userName) {
      return alert('Неверные данные');
    }
    const obj = {
      roomId,
      userName,
    };
    setLoading(true);
    await axios.post('/rooms', obj);
    onLogin(obj);
  };

  return (
    <div className="join-block">
      {children}
      <Input
        type="text"
        placeholder="Room ID"
        value={roomId}
        onChange={(element) => setRoomId(element.target.value)}
      />
      <Input
        type="text"
        placeholder="Enter your name"
        value={userName}
        onChange={(element) => setUserName(element.target.value)}
      />
      <Button disabled={isLoading} onClick={onEnter} className="btn btn-primary">
        {isLoading ? 'PENDING...' : 'ENTER'}
      </Button>
    </div>
  );
}

export default JoinBlock;
