import styled from '@emotion/styled';

export const ChatZone = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
`;

export const Section = styled.section`
  margin-top: 20px;
  border-top: 1px solid #808080;
`;

export const StickyHeader = styled.div`
  display: flex;
  /* justify-content: center; */
  justify-content: start;
  flex: 1;
  width: 100%;
  /* position: sticky; */
  top: 14px;
  & span {
    color: #bc89bd;
  }
  & button {
    font-weight: bold;
    font-size: 13px;
    height: 28px;
    line-height: 27px;
    padding: 0 16px;
    z-index: 2;
    color: #70bff9;
    /* --saf-0: rgba(var(--sk_foreground_low, 29, 28, 29), 0.13); */
    /* box-shadow: 0 0 0 1px var(--saf-0), 0 1px 3px 0 rgba(0, 0, 0, 0.08); */
    border-radius: 24px;
    position: relative;
    top: -13px;
    background: #1e1e1e;
    border: none;
    outline: none;
  }
`;
