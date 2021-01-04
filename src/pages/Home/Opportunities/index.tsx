import React from "react";

import Section from "../../../components/Section";
import SectionTitle from "../../../components/SectionTitle";
import SquareNumber from "../../../components/SquareNumber";

import useOpportunities from "./hooks";

import {
  Container,
  TitleWrapper,
  InfoIcon,
  OpportunitiesWrapper,
  ItemWrapper,
  ValueWrapper,
  Text,
  ValueText,
  SeeAll,
} from "./styles";

const Opportunities: React.FC = () => {
  const { titles } = useOpportunities();

  return (
    <Container>
      <Section>
        <TitleWrapper>
          <SectionTitle title="Oportunidades (7)" />
          <InfoIcon />
        </TitleWrapper>

        <OpportunitiesWrapper>
          {titles.map((title) => (
            <ItemWrapper>
              <SquareNumber number={4} color="green" />
              <ValueWrapper>
                <Text>{title}</Text>
                <ValueText>R$ 20.000,00</ValueText>
              </ValueWrapper>
            </ItemWrapper>
          ))}

          <ItemWrapper>
            <SquareNumber number={1} color="#c62828" />
            <ValueWrapper>
              <Text>Perdida</Text>
              <ValueText>R$ 4.300,00</ValueText>
            </ValueWrapper>
          </ItemWrapper>

          <ItemWrapper>
            <SquareNumber number={2} color="#1976d2" />
            <ValueWrapper>
              <Text>Abertas</Text>
              <ValueText>Diversas moedas</ValueText>
            </ValueWrapper>
          </ItemWrapper>

          <ItemWrapper>
            <SquareNumber number={0} color="#5a5a5a" />
            <ValueWrapper>
              <Text>Descartadas</Text>
              <ValueText>-</ValueText>
            </ValueWrapper>
          </ItemWrapper>
        </OpportunitiesWrapper>

        <SeeAll>
          <p>ver todas as oportunidades</p>
        </SeeAll>
      </Section>
    </Container>
  );
};

export default Opportunities;
