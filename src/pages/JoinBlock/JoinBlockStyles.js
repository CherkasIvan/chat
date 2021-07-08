import styled from "styled-components";

export const Button = styled.button`
  background: ${({theme}) => theme.background};
  border: 2px solid ${({theme}) => theme.toggleBorder};
  color: ${({theme}) => theme.text};
  border-radius: 2rem;
  cursor: pointer;
  font-size: .8rem;
  padding: .6rem;
}`;

export const Input = styled.input`
  background: ${({theme}) => theme.inputBackground};
  border: 2px solid ${({theme}) => theme.toggleBorder};
  color: ${({theme}) => theme.inputText};
  border-radius: 2rem;
  font-size: .8rem;
  padding: .6rem;
}`;