import React from "react";

import { Container, Number } from "./styles";
import { SquareNumberProps } from "./types";

const SquareNumber: React.FC<SquareNumberProps> = ({ number, color }) => (
  <Container color={color}>
    <Number>{number}</Number>
  </Container>
);

export default SquareNumber;
