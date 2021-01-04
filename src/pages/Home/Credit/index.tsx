import React from "react";

import Section from "../../../components/Section";
import SectionTitle from "../../../components/SectionTitle";

import {
  Container,
  CreditWrapper,
  Value,
  Text,
  AvailableValue,
} from "./styles";

const Credit: React.FC = () => {
  return (
    <Container>
      <Section>
        <SectionTitle title="Limite de crédito" />
        <CreditWrapper>
          <Value>R$ 12.000,20</Value>
          <Text>Concedido</Text>
        </CreditWrapper>
        <CreditWrapper>
          <AvailableValue>R$ 3.105,00</AvailableValue>
          <Text>Disponível</Text>
        </CreditWrapper>
      </Section>
    </Container>
  );
};

export default Credit;
