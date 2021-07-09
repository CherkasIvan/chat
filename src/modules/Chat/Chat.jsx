import React, {useEffect, useRef, useState} from 'react';

import {SendButton, Textarea, NavBar, Message, MessageBoard} from "./ChatStyles";
import socket from '../../sockets/socket';

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
        Room: <b>{roomId}</b>
        <hr/>
        <b>Online {users.length}:</b>
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
            Send message
          </SendButton>
        </form>
      </div>
    </div>
  );
}

export default Chat;
