import {createGlobalStyle} from "styled-components"

export const GlobalStyles = createGlobalStyle`

  body {
    background: ${({theme}) => theme.body};
    color: ${({theme}) => theme.text};
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    margin: 0;
    padding: 0;
    transition: all .25s linear;
  }`