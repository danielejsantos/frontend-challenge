import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const CustomerInfo = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr) 2fr;
  grid-template-rows: repeat(3, 1fr);
  gap: 5px 5px;
  grid-template-areas:
    "info local activities"
    "opportunities credit activities"
    "sales assets activities";
`;