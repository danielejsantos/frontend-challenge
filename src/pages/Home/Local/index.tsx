import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";

import Section from "../../../components/Section";
import SectionTitle from "../../../components/SectionTitle";

import { Container, AddressContainer, Text, MarkerIcon } from "./styles";

const Local: React.FC = () => {
  return (
    <Container>
      <Section>
        <SectionTitle title="Local" />

        <MapContainer
          center={[-23.564769, -46.678009]}
          zoom={15}
          style={{ width: "100%", height: "80%" }}
        >
          <TileLayer
            url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAP_TOKEN}`}
          />
        </MapContainer>
        <AddressContainer>
          <MarkerIcon />
          <Text>Avenida Brasil, 4019 (Trabalho)</Text>
        </AddressContainer>
      </Section>
    </Container>
  );
};

export default Local;
