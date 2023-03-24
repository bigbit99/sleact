import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: calc(100vh - 38px);
  flex-flow: column;
  position: relative;
`;

export const Header = styled.header`
  height: 40px;
  display: flex;
  width: 100%;
  /* --saf-0: rgba(var(--sk_foreground_low, 29, 28, 29), 0.13); */
  /* box-shadow: 0 1px 0 var(--saf-0); */
  background-color: #2e2d2d;
  font-weight: bold;
  align-items: center;
  > div:nth-child(1) {
    width: 180px;
    height: 40px;
    padding: 15px;
    box-sizing: border-box;
    background-color: #1f1e1e;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    > span {
      display: block;
      color: #fff;
    }
  }
  & .header-right {
    display: flex;
    flex: 1;
    justify-content: flex-end;
    align-items: center;
    > span {
      color: #8d8d8d;
    }
  }
`;

// export const DragOver = styled.div`
//   position: absolute;
//   top: 64px;
//   left: 0;
//   width: 100%;
//   height: calc(100% - 64px);
//   background: white;
//   opacity: 0.7;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 40px;
// `;
