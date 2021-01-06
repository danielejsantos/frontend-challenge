import React from "react";
import {
  XYPlot,
  HorizontalGridLines,
  VerticalGridLines,
  XAxis,
  YAxis,
  LineSeries,
} from "react-vis";

import "react-vis/dist/style.css";

import Section from "../../../components/Section";
import SectionTitle from "../../../components/SectionTitle";

import { Container } from "./styles";

const Sales: React.FC = () => {
  const data = [
    { x: 0, y: 1 },
    { x: 1, y: 3 },
    { x: 2, y: 2 },
    { x: 3, y: 4 },
  ];

  return (
    <Container>
      <Section>
        <SectionTitle title="Vendas" />
        <XYPlot height={200} width={250}>
          <HorizontalGridLines />
          <VerticalGridLines />
          <XAxis />
          <YAxis />
          <LineSeries data={data} />
        </XYPlot>
      </Section>
    </Container>
  );
};

export default Sales;
