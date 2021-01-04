import React from "react";

import Section from "../../../components/Section";
import SectionTitle from "../../../components/SectionTitle";

import { Container } from "./styles";

const Local: React.FC = () => {
  return (
    <Container>
      <Section>
        <SectionTitle title="Local" />
      </Section>
    </Container>
  );
};

export default Local;
