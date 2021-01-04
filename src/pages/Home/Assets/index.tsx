import React from "react";

import Section from "../../../components/Section";
import SectionTitle from "../../../components/SectionTitle";
import SquareNumber from "../../../components/SquareNumber";

import {
  Container,
  AssetsContainer,
  AssetsStatusContainer,
  AssetsValue,
  AssetsStatus,
} from "./styles";

const mocky = [
  {
    status: "Vencidos",
    number: 1,
    value: "R$3.105,00",
    color: "red",
  },
  {
    status: "A Vencer",
    number: 2,
    value: "R$3.105,00",
    color: "orange",
  },
  {
    status: "Pagos",
    number: 2,
    value: "R$3.105,00",
    color: "green",
  },
];

const Activities: React.FC = () => {
  return (
    <Container>
      <Section>
        <SectionTitle title="Títulos financeiros" />
        {mocky.map((item) => (
          <AssetsContainer>
            <SquareNumber number={item.number} color={item.color} />
            <AssetsStatusContainer>
              <AssetsValue>{item.value}</AssetsValue>
              <AssetsStatus>{item.status}</AssetsStatus>
            </AssetsStatusContainer>
          </AssetsContainer>
        ))}
      </Section>
    </Container>
  );
};

export default Activities;
