import styled from 'styled-components';

import { BsInfoCircleFill } from 'react-icons/bs';

export const Container = styled.div`
  grid-area: opportunities;
`;

export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const InfoIcon = styled(BsInfoCircleFill)`
  color: #5a5a5a;
  width: 16px;
  height: 16px;
`;

export const OpportunitiesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 30px 20px;
`;

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ValueWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const Text = styled.p`
  color: #5a5a5a;
  font-size: 14px;
  font-weight: 600;
`;

export const ValueText = styled(Text)`
  font-size: 11px;
  font-weight: 400;
`;

export const SeeAll = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  margin-top: 20px;
  cursor: pointer;

  p {
    color: #4691db;
    text-transform: uppercase;
    font-size: 11px;
    font-weight: 600;
  }
`;