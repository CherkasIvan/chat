import React, {useEffect, useReducer} from 'react';
import axios from 'axios';
import {ThemeProvider} from "styled-components";

import socket from './sockets/socket';
import reducer from './reducers/reducer';
import {darkTheme, lightTheme} from './constants/Theme';
import {useDarkMode} from './hooks/useDarkMode';
import {Chat} from './modules';
import {JoinBlock} from './pages';
import {GlobalStyles} from "./styles/GlobalStyles";
import {Toggle} from './components';
import AppRouter from "./routes/AppRouter";


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

  if (!mountedComponent) return <div/>
  return (
    // <AppRouter/>
    <ThemeProvider theme={themeMode}>
      <GlobalStyles/>
      <div className="wrapper">
        <Toggle
          theme={theme}
          toggleTheme={themeToggler}/>
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

// <Chat {...state} onAddMessage={addMessage}/>
