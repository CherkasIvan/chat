import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";

import socket from '../socket';

const SendButton = styled.button`
  background: ${({theme}) => theme.sendButtonBackground};
  cursor: pointer;
}`;

const Textarea = styled.textarea`
  background: ${({theme}) => theme.textAreaBackground};
  color: ${({theme}) => theme.inputText};
  font-size: .8rem;
  padding: .6rem;

  &:focus {
    background: ${({theme}) => theme.textAreaBackground};
  }`;

const NavBar = styled.div`
  &.chat-users {
    background: ${({theme}) => theme.textAreaBackground};
  }
}`;

const Message = styled.p`
  &.message-item {
    background: ${({theme}) => theme.sendMessageBackground};
  }
}`;

const MessageBoard = styled.div`
  &.messages {
    background: ${({theme}) => theme.sendMessageBoardBackground};
  }
}`;

function Chat({users, messages, userName, roomId, onAddMessage}) {
  const [messageValue, setMessageValue] = useState('');
  const messagesRef = useRef(null);

  const onSendMessage = () => {
    socket.emit('ROOM:NEW_MESSAGE', {
      userName,
      roomId,
      text: messageValue,
    });
    onAddMessage({userName, text: messageValue});
    setMessageValue('');
  };

  useEffect(() => {
    messagesRef.current.scrollTo(0, 99999);
  }, [messages]);

  return (
    <div className="chat">
      <NavBar className="chat-users">
        Комната: <b>{roomId}</b>
        <hr/>
        <b>Онлайн ({users.length}):</b>
        <ul>
          {users.map((name, index) => (
            <li key={name + index}>{name}</li>
          ))}
        </ul>
      </NavBar>
      <div className="chat-messages">
        <MessageBoard ref={messagesRef} className="messages">
          {messages.map((message) => (
            <div className="message">
              <Message className="message-item">{message.text}</Message>
              <div>
                <span>{message.userName}</span>
              </div>
            </div>
          ))}
        </MessageBoard>
        <form>
          <Textarea
            value={messageValue}
            onChange={(e) => setMessageValue(e.target.value)}
            className="form-control"
            rows="3"></Textarea>
          <SendButton onClick={onSendMessage} type="button" className="btn btn-primary">
            Отправить
          </SendButton>
        </form>
      </div>
    </div>
  );
}

export default Chat;
