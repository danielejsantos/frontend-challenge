import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 34px;
  width: 34px;
  background-color: ${({color}) => color};
  border-radius: 6px;
`;

export const Number = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: white;
`;