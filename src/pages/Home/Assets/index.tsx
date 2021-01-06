import React from "react";

import Section from "../../../components/Section";
import SectionTitle from "../../../components/SectionTitle";
import SquareNumber from "../../../components/SquareNumber";
import useAssets from "./hooks";

import {
  Container,
  AssetsContainer,
  AssetsStatusContainer,
  AssetsValue,
  AssetsStatus,
} from "./styles";

const Assets: React.FC = () => {
  const { assets, mapColorByStatus } = useAssets();

  return (
    <Container>
      <Section>
        <SectionTitle title="Títulos financeiros" />
        {assets.map((item) => (
          <AssetsContainer key={item.status}>
            <SquareNumber
              number={item.amount}
              color={mapColorByStatus(item.status).color}
            />
            <AssetsStatusContainer>
              <AssetsValue>{item.value}</AssetsValue>
              <AssetsStatus>{mapColorByStatus(item.status).name}</AssetsStatus>
            </AssetsStatusContainer>
          </AssetsContainer>
        ))}
      </Section>
    </Container>
  );
};

export default Assets;
