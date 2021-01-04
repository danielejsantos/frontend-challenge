import React from "react";

import Section from "../../../components/Section";
import SectionTitle from "../../../components/SectionTitle";

import { Container } from "./styles";

const Sales: React.FC = () => {
  return (
    <Container>
      <Section>
        <SectionTitle title="Vendas" />
      </Section>
    </Container>
  );
};

export default Sales;
