import styled from 'styled-components';

export const Container = styled.div`
  grid-area: credit;
`;

export const CreditWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Value = styled.p`
  font-size: 16px;
  color: #4691db;
  font-weight: 600;
  margin-bottom: 5px;
`;

export const Text = styled.p`
  color: #5a5a5a;
  font-size: 11px;
`;

export const AvailableValue = styled(Value)`
  color: green;
`;