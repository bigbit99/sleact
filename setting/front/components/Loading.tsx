import React from 'react';
import styled from '@emotion/styled';

const Loading = () => {
  return (
    <Wrap>
      <div></div>
    </Wrap>
  );
};

export default Loading;

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #441949;
  display: flex;
  justify-content: center;
  align-items: center;
  > div:nth-child(1) {
    height: 70px;
    width: 70px;
    border-radius: 50%;
    border: dashed 5px white;
    -webkit-animation-name: spin;
    -webkit-animation-duration: 2.5s;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
  }
  @-webkit-keyframes spin {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;
