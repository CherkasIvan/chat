import styled from "styled-components";

export const SendButton = styled.button`
  background: ${({theme}) => theme.sendButtonBackground};
  cursor: pointer;
}`;

export const Textarea = styled.textarea`
  background: ${({theme}) => theme.textAreaBackground};
  color: ${({theme}) => theme.inputText};
  font-size: .8rem;
  padding: .6rem;

  &:focus {
    background: ${({theme}) => theme.textAreaBackground};
  }`;

export const NavBar = styled.div`
  &.chat-users {
    background: ${({theme}) => theme.textAreaBackground};
  }
}`;

export const Message = styled.p`
  &.message-item {
    background: ${({theme}) => theme.sendMessageBackground};
  }
}`;

export const MessageBoard = styled.div`
  &.messages {
    background: ${({theme}) => theme.sendMessageBoardBackground};
  }
}`;