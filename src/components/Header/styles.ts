import styled from 'styled-components';

import { FiMenu } from "react-icons/fi";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #1976d2;
  padding: 12px;
`;

export const MenuIcon = styled(FiMenu)`
  color: #fff;
  width: 22px;
  height: 22px;
`;
