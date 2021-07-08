import styled from "styled-components";

export const Input = styled.input`
  background: ${({theme}) => theme.inputBackground};
  border: 2px solid ${({theme}) => theme.toggleBorder};
  color: ${({theme}) => theme.inputText};
  border-radius: 2rem;
  font-size: .8rem;
  padding: .6rem;
}`;