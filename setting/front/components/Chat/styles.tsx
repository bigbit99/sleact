import styled from '@emotion/styled';

export const ChatWrapper = styled.div`
  display: flex;
  padding: 8px 20px;
  /* &:hover {
    background: #eee;
  } */
  & .chat-text {
    > div {
      display: flex;
      align-items: center;
      gap: 5px;
      color: #808080;
      > p {
        color: #dcdcaf;
      }
    }
  }
  & .chat-user {
    color: #808080;
    > b {
      color: #6597cd;
    }
    > span {
      color: #c5947c;
    }
  }
  & .chat-img {
    display: flex;
    width: 36px;
    margin-right: 8px;
    & img {
      width: 36px;
      height: 36px;
    }
  }
`;
