import React from "react";

import { Title } from "./styles";
import { TitleProps } from "./types";

const SectionTitle: React.FC<TitleProps> = ({ title }) => (
  <Title>{title}</Title>
);

export default SectionTitle;
