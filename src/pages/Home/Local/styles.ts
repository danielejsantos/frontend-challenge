import styled from 'styled-components';
import { FaMapMarkerAlt } from 'react-icons/fa';

export const Container = styled.div`
  grid-area: local;
`;

export const AddressContainer = styled.div`
  display: flex;

  @media (min-height: 680px) {
    margin-top: 2px;
  }
`;

export const Text = styled.p`
  color: #5a5a5a;
  font-size: 13px;
`;

export const MarkerIcon = styled(FaMapMarkerAlt)`
  color: #5a5a5a;
  width: 13px;
  height: 13px;
  margin-right: 5px;
`;