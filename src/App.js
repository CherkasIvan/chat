import React, {useEffect, useReducer } from 'react';
import axios from 'axios';
import {ThemeProvider} from "styled-components";

import socket from './sockets/socket';
import reducer from './reducers/reducer';
import {darkTheme, lightTheme} from './constants/Theme';
import {Chat} from './modules';
import {JoinBlock, MainPage} from './pages';
import {GlobalStyles} from "./styles/GlobalStyles";
import {useDarkMode} from './hooks/useDarkMode';
import {Toggle} from './components';

function App() {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const [state, dispatch] = useReducer(reducer, {
    joined: false,
    roomId: null,
    userName: null,
    users: [],
    messages: [],
  });

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

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

  if (!componentMounted) {
    return <div />
  };
  return (
    // <AppRouter/>
    <ThemeProvider theme={themeMode}>
      <GlobalStyles/>
      <div className="wrapper">

        {!state.joined ? (
          <JoinBlock onLogin={onLogin}>
            <Toggle theme={theme} toggleTheme={toggleTheme} />
          </JoinBlock>
        ) : (
          <MainPage>
            <Toggle theme={theme} toggleTheme={toggleTheme} />
            {/*<Chat {...state} onAddMessage={addMessage}/>*/}
          </MainPage>

        )}
      </div>
    </ThemeProvider>
  );
}

export default App;

// <Chat {...state} onAddMessage={addMessage}/>
