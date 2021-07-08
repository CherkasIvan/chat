import React, {useState} from 'react';
import axios from 'axios';
import styled from "styled-components";

const Button = styled.button`
  background: ${({theme}) => theme.background};
  border: 2px solid ${({theme}) => theme.toggleBorder};
  color: ${({theme}) => theme.text};
  border-radius: 30px;
  cursor: pointer;
  font-size: .8rem;
  padding: .6rem;
}`;

const Input = styled.input`
  background: ${({theme}) => theme.inputBackground};
  border: 2px solid ${({theme}) => theme.toggleBorder};
  color: ${({theme}) => theme.inputText};
  border-radius: 30px;
  font-size: .8rem;
  padding: .6rem;
}`;

function JoinBlock({ onLogin }) {
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
      <Input
        type="text"
        placeholder="Room ID"
        value={roomId}
        onChange={(element) => setRoomId(element.target.value)}
      />
      <Input
        type="text"
        placeholder="Ваше имя"
        value={userName}
        onChange={(element) => setUserName(element.target.value)}
      />
      <Button disabled={isLoading} onClick={onEnter} className="btn btn-success">
        {isLoading ? 'ВХОД...' : 'ВОЙТИ'}
      </Button>
    </div>
  );
}

export default JoinBlock;
