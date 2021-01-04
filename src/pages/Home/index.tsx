import React from "react";

import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

import Activities from "./Activities";
import Info from "./Info";
import Local from "./Local";
import Opportunities from "./Opportunities";
import Credit from "./Credit";
import Sales from "./Sales";
import Assets from "./Assets";

import { Container, Body, CustomerInfo } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <Body>
        <Sidebar />
        <CustomerInfo>
          <Info />
          <Local />
          <Opportunities />
          <Credit />
          <Sales />
          <Assets />
          <Activities />
        </CustomerInfo>
      </Body>
    </Container>
  );
};

export default Home;
