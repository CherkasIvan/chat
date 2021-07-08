import styled from 'styled-components'

export const Button = styled.button`
  background: ${({theme}) => theme.background};
  border: 2px solid ${({theme}) => theme.toggleBorder};
  color: ${({theme}) => theme.text};
  border-radius: 2rem;
  cursor: pointer;
  font-size: .8rem;
  padding: .6rem;
  margin: 2rem;
  text-transform: uppercase;
  font-weight: bold;
}`;