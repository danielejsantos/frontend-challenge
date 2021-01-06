import React from "react";

import Section from "../../../components/Section";
import SectionTitle from "../../../components/SectionTitle";
import useCredit from "./hooks";

import {
  Container,
  CreditWrapper,
  Value,
  Text,
  AvailableValue,
} from "./styles";

const Credit: React.FC = () => {
  const { credit } = useCredit();

  return (
    <Container>
      <Section>
        <SectionTitle title="Limite de crédito" />
        <CreditWrapper>
          <Value>{credit.granted}</Value>
          <Text>Concedido</Text>
        </CreditWrapper>
        <CreditWrapper>
          <AvailableValue>{credit.available}</AvailableValue>
          <Text>Disponível</Text>
        </CreditWrapper>
      </Section>
    </Container>
  );
};

export default Credit;
