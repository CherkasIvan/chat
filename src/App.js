import React, {useEffect, useReducer} from 'react';
import axios from 'axios';
import {ThemeProvider} from "styled-components";

import socket from './socket';
import reducer from './reducer';
import {darkTheme, lightTheme} from './components/Theme';
import {useDarkMode} from './components/useDarkMode';
import JoinBlock from './components/JoinBlock';
import Chat from './components/Chat';
import {GlobalStyles} from "./components/GlobalStyles";
import Toggle from "./components/Toggler";

function App() {
  const [state, dispatch] = useReducer(reducer, {
    joined: false,
    roomId: null,
    userName: null,
    users: [],
    messages: [],
  });
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme

  const onLogin = async (obj) => {
    dispatch({
      type: 'JOINED',
      payload: obj,
    });
    socket.emit('ROOM:JOIN', obj);
    const {data} = await axios.get(`/rooms/${obj.roomId}`);
    dispatch({
      type: 'SET_DATA',
      payload: data,
    });
  };

  const setUsers = (users) => {
    dispatch({
      type: 'SET_USERS',
      payload: users,
    });
  };

  const addMessage = (message) => {
    dispatch({
      type: 'NEW_MESSAGE',
      payload: message,
    });
  };

  useEffect(() => {
    socket.on('ROOM:SET_USERS', setUsers);
    socket.on('ROOM:NEW_MESSAGE', addMessage);
  }, []);

  window.socket = socket;

  if(!mountedComponent) return <div/>
  return (
    <ThemeProvider  theme={themeMode}>
        <GlobalStyles/>
        <div className="wrapper">
          <Toggle theme={theme} toggleTheme={themeToggler}/>
          {!state.joined ? (
            <JoinBlock onLogin={onLogin}/>
          ) : (
            <Chat {...state} onAddMessage={addMessage}/>
          )}
        </div>
    </ThemeProvider>
  );
}

export default App;
