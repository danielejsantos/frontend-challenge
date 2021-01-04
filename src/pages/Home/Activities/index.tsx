import React from "react";

import useAcitivity from "./hooks";

import Section from "../../../components/Section";
import SectionTitle from "../../../components/SectionTitle";
import SquareNumber from "../../../components/SquareNumber";
import Timeline from "../../../components/Timeline";

import {
  Container,
  Search,
  SearchButton,
  SearchInput,
  SearchIcon,
  TitleButtonContainer,
  TitleButton,
  TitleDescription,
} from "./styles";

const Activities: React.FC = () => {
  const { titles, selected, setSelected, filterActivities } = useAcitivity();

  console.log(filterActivities());

  return (
    <Container>
      <Section>
        <SectionTitle title="Atividades" />
        <Search>
          <SearchButton>
            <SearchIcon />
          </SearchButton>
          <SearchInput placeholder="Pesquisar..." />
        </Search>
        <TitleButtonContainer>
          {titles.map((item) => (
            <TitleButton
              key={item.title}
              selected={selected === item.title}
              onClick={() => setSelected(item.title)}
            >
              <SquareNumber number={5} color={item.color} />
              <TitleDescription>{item.title}</TitleDescription>
            </TitleButton>
          ))}
        </TitleButtonContainer>
        {filterActivities().map((item) => {
          return (
            <Timeline
              key={item.id}
              circleColor={item.color}
              title={item.title}
              activities={item.activities}
            />
          );
        })}
      </Section>
    </Container>
  );
};

export default Activities;
