import styled from 'styled-components';

export const Container = styled.div`
  grid-area: assets;
  height: 100%;
`;

export const AssetsContainer = styled.div`
  display: flex;
  margin: 20px 0;
`

export const AssetsStatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
`;

export const AssetsValue = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: #5a5a5a;
  margin-bottom: 6px;
`;

export const AssetsStatus = styled.p`
  font-size: 12px;
  color: #5a5a5a;
`;