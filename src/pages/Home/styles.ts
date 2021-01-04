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
  display: grid;
  width: 100%;
  padding: 10px;
  margin-left: 50px;
  grid-template-columns: repeat(2, 1fr) 2fr;
  grid-template-rows: 1fr 0.75fr 1fr;
  gap: 10px;
  grid-template-areas:
    'info local activities'
    'opportunities credit activities'
    'sales assets activities';
`;