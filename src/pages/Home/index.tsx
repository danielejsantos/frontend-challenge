import React from "react";

import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Info from "./Info";

import { Container, Body, CustomerInfo } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <Body>
        <Sidebar />
        <CustomerInfo>
          <Info />
        </CustomerInfo>
      </Body>
    </Container>
  );
};

export default Home;
