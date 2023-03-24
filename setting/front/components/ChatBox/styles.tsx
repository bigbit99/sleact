import styled from '@emotion/styled';
import { MentionsInput } from 'react-mentions';

export const ChatArea = styled.div`
  width: 100%;
  padding: 0 20px;
  padding-top: 0;
  border-top: 1px solid #363636;
  > div:nth-child(1) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 15px;
    > p {
      color: #979797;
    }
    > p:nth-child(4) {
      color: #fff;
      border-bottom: 1px solid #fff;
    }
  }
`;

export const Form = styled.form`
  color: rgb(29, 28, 29);
  font-size: 15px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid rgb(29, 28, 29);
  display: flex;
  justify-content: center;
`;

export const MentionsTextarea = styled(MentionsInput)`
  font-family: Slack-Lato, appleLogo, sans-serif;
  font-size: 15px;
  padding: 20px 9px;
  width: 80%;
  border-right: 1px solid #363636;
  & strong {
    background: skyblue;
  }
  & textarea {
    height: 44px;
    padding: 9px 10px !important;
    outline: none !important;
    border-radius: 4px !important;
    resize: none !important;
    line-height: 22px;
    border: none;
    color: #fff;
  }
  & ul {
    border: 1px solid lightgray;
    max-height: 200px;
    overflow-y: auto;
    padding: 9px 10px;
    background: white;
    border-radius: 4px;
    width: 150px;
  }
`;

export const Toolbox = styled.div`
  width: 20%;
  height: 20px;
  padding-left: 5px;
  background: transparent;
  display: flex;
  justify-content: flex-start;
  gap: 5px;
  /* height: 41px; */
  /* border: 1px solid #363636; */
  /* align-items: center;
  display: flex;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px; */
  > span {
    color: #fff;
  }
`;

export const SendButton = styled.button`
  border: 0;
  outline: 0;
  background-color: transparent;
  cursor: pointer;
  /* position: absolute;
  right: 5px;
  top: 5px; */
`;

export const EachMention = styled.button<{ focus: boolean }>`
  padding: 4px 20px;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  color: rgb(28, 29, 28);
  width: 100%;
  & img {
    margin-right: 5px;
  }
  ${({ focus }) =>
    focus &&
    `
    background: #1264a3;
    color: white;
  `};
`;
