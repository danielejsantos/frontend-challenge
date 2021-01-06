import React from "react";

import useAcitivity from "./hooks";

import Section from "../../../components/Section";
import SectionTitle from "../../../components/SectionTitle";
import SquareNumber from "../../../components/SquareNumber";
import Timeline from "../../../components/Timeline";

import {
  Container,
  Search,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  TitleButtonContainer,
  TitleButton,
  TitleDescription,
} from "./styles";

const Activities: React.FC = () => {
  const {
    titles,
    selected,
    setSelected,
    filteredActivities,
    mapActivityByTitle,
    setSearch,
  } = useAcitivity();

  return (
    <Container>
      <Section>
        <SectionTitle title="Atividades" />
        <Search>
          <SearchWrapper>
            <SearchIcon />
          </SearchWrapper>
          <SearchInput
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Pesquisar..."
          />
        </Search>
        <TitleButtonContainer>
          {titles.map((item) => (
            <TitleButton
              key={item.title}
              selected={selected === item.name}
              onClick={() => setSelected(item.name)}
            >
              <SquareNumber number={5} color={item.color} />
              <TitleDescription>{item.title}</TitleDescription>
            </TitleButton>
          ))}
        </TitleButtonContainer>
        {filteredActivities?.map((item: any) => {
          if (item.activity.length === 0) return <div key={item.title} />;

          return (
            <Timeline
              key={item.title}
              color={mapActivityByTitle(item.title).color}
              title={mapActivityByTitle(item.title).name}
              activities={item.activity}
            />
          );
        })}
      </Section>
    </Container>
  );
};

export default Activities;
