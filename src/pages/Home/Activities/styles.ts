import styled from 'styled-components';

import {AiOutlineSearch} from 'react-icons/ai';
import {FaPhoneAlt} from 'react-icons/fa';

import { TitleButtonProps } from './types';

export const Container = styled.div`
  grid-area: activities;
  height: 100%;
`;

export const Search = styled.div`
  display: flex;
  border-radius: 4px;
  width: 100%;
  margin: 10px 0;
  border: 1px solid grey;
`;

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 6px;
  cursor: pointer;
`;

export const SearchInput = styled.input`
  width: 100%;
`;

export const SearchIcon = styled(AiOutlineSearch)`
  color: #4f4f4f;
  width: 18px;
  height: 18px;
`;

export const PhoneIcon = styled(FaPhoneAlt)`
  color: red;
  width: 18px;
  height: 18px;
`;

export const TitleButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 16px;
  padding-right: 10px;
`;

export const TitleButton = styled.button<TitleButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({selected}) => selected ? 'lightgrey' : 'white'};
  cursor: pointer;
`;

export const TitleDescription = styled.p`
  font-size: 14px;
  color: #5a5a5a;
  font-weight: 600;
  text-align: center;
  padding: 6px;
`
