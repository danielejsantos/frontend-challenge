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
import { Opportunity } from "./types";

const Opportunities: React.FC = () => {
  const { opportunities, mapOppotunities } = useOpportunities();

  return (
    <Container>
      <Section>
        <TitleWrapper>
          <SectionTitle title="Oportunidades (7)" />
          <InfoIcon />
        </TitleWrapper>
        <OpportunitiesWrapper>
          {opportunities.map((opportunity: Opportunity) => (
            <ItemWrapper key={opportunity.name}>
              <SquareNumber
                number={Number(opportunity.amount)}
                color={mapOppotunities(opportunity.name).color}
              />
              <ValueWrapper>
                <Text>{mapOppotunities(opportunity.name).name}</Text>
                <ValueText>{opportunity.value}</ValueText>
              </ValueWrapper>
            </ItemWrapper>
          ))}
        </OpportunitiesWrapper>

        <SeeAll>
          <p>ver todas as oportunidades</p>
        </SeeAll>
      </Section>
    </Container>
  );
};

export default Opportunities;
