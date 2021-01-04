import styled, { css } from 'styled-components';

import { 
  AiOutlineBlock, 
  AiOutlineDatabase, 
  AiOutlineFileText, 
  AiOutlineLineChart, 
  AiOutlineSearch, 
} from 'react-icons/ai';
import { BiTargetLock } from 'react-icons/bi';
import { BsPeople, BsPerson, BsTag } from 'react-icons/bs';
import { FiBox, FiSettings } from 'react-icons/fi';
import { IoMdCalendar  } from 'react-icons/io';
import { MdAttachMoney } from 'react-icons/md';
import { RiFileChartLine, RiMoneyDollarBoxLine } from 'react-icons/ri';

export const Container = styled.div`
  height: 100%;
  width: 46px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: #fafafa;
  box-shadow: 5px 0 5px -5px #cccccc;
  position: fixed;
`;

const iconCSS = css`
  color: #4f4f4f;
  width: 18px;
  height: 18px;
`;

export const PersonIcon = styled(BsPerson)`
  width: 18px;
  height: 18px;
  color: #1976d2;
`;

export const BlocksIcon = styled(AiOutlineBlock)`
  ${iconCSS}
`;
export const DatabaseIcon = styled(AiOutlineDatabase)`
  ${iconCSS}
`;
export const PaperIcon = styled(AiOutlineFileText)`
  ${iconCSS}
`;
export const ChartIcon = styled(AiOutlineLineChart)`
  ${iconCSS}
`;
export const SearchIcon = styled(AiOutlineSearch)`
  ${iconCSS}
`;
export const TargetIcon = styled(BiTargetLock)`
  ${iconCSS}
`;
export const PeopleIcon = styled(BsPeople)`
  ${iconCSS}
`;
export const TagIcon = styled(BsTag)`
  ${iconCSS}
`;
export const BoxIcon = styled(FiBox)`
  ${iconCSS}
`;
export const SettingsIcon = styled(FiSettings)`
  ${iconCSS}
`;
export const CalendarIcon = styled(IoMdCalendar)`
  ${iconCSS}
`;
export const MoneyIcon = styled(MdAttachMoney)`
  ${iconCSS}
`;
export const PaperChartIcon = styled(RiFileChartLine)`
  ${iconCSS}
`;
export const DollarBoxIcon = styled(RiMoneyDollarBoxLine)`
  ${iconCSS}
`;