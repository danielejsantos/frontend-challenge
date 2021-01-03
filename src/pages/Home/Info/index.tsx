import React from "react";

import Section from "../../../components/Section";
import SectionTitle from "../../../components/SectionTitle";

import {
  Wrapper,
  ProfileContainer,
  AvatarWrapper,
  Avatar,
  ProfileInfo,
  CustomerName,
  Text,
  ActiveStatus,
  ContactContainer,
  PhoneIcon,
  ContactWrapper,
  SmallText,
  EmailIcon,
  SocialWrapper,
  WhatsappIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  LinkedinIcon,
} from "./styles";

const Info: React.FC = () => {
  return (
    <Section>
      <Wrapper>
        <SectionTitle title={"Informações gerais"} />
        <ProfileContainer>
          <AvatarWrapper>
            <Avatar />
          </AvatarWrapper>
          <ProfileInfo>
            <CustomerName>Justine Robinson</CustomerName>
            <Text>Acme inc</Text>
            <ActiveStatus>
              <p>Ativo</p>
            </ActiveStatus>
          </ProfileInfo>
        </ProfileContainer>

        <ContactContainer>
          <PhoneIcon />
          <ContactWrapper>
            <Text>45 9 9555 5555</Text>
            <SmallText>Celular</SmallText>
          </ContactWrapper>
        </ContactContainer>

        <ContactContainer>
          <EmailIcon />
          <ContactWrapper>
            <Text>justine@email.com</Text>
            <SmallText>Trabalho</SmallText>
          </ContactWrapper>
        </ContactContainer>

        <SocialWrapper>
          <WhatsappIcon />
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
          <LinkedinIcon />
        </SocialWrapper>
      </Wrapper>
    </Section>
  );
};

export default Info;
