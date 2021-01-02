import React from 'react';

import { 
  Container, 
  BlocksIcon,
  DatabaseIcon,
  PaperIcon,
  ChartIcon,
  SearchIcon,
  TargetIcon,
  PeopleIcon,
  PersonIcon,
  TagIcon,
  BoxIcon,
  SettingsIcon,
  CalendarIcon,
  MoneyIcon,
  PaperChartIcon,
  DollarBoxIcon,
} from './styles';

const Sidebar: React.FC = () => {
  return (
    <Container>
      <SearchIcon />
      <PersonIcon />
      <CalendarIcon />
      <TagIcon />
      <MoneyIcon />
      <BoxIcon />
      <PaperIcon />
      <ChartIcon />
      <DollarBoxIcon />
      <TargetIcon />
      <BlocksIcon />
      <PaperChartIcon />
      <DatabaseIcon />
      <SettingsIcon />
      <PeopleIcon />
    </Container>
  );
}

export default Sidebar;