import styled from '@emotion/styled';

export const CollapseButton = styled.button<{ collapse: boolean }>`
  background: transparent;
  border: none;
  width: 26px;
  height: 10px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin-left: 10px;
  overflow: hidden;
  cursor: pointer;
  > svg {
    transition: all 0.2s;
  }
  ${({ collapse }) =>
    collapse &&
    `
    & svg {
      transform: rotate(-90deg);
    }
    & i {
      transform: none;
    }
  `};
`;
