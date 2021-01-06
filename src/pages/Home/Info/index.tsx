import React from "react";

import Section from "../../../components/Section";
import SectionTitle from "../../../components/SectionTitle";
import useInfo from "./hooks";

import {
  Container,
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
  const { userInfo } = useInfo();

  return (
    <Container>
      <Section>
        <Wrapper>
          <SectionTitle title="Informações gerais" />
          <ProfileContainer>
            <AvatarWrapper>
              <Avatar />
            </AvatarWrapper>
            <ProfileInfo>
              <CustomerName>{userInfo.name}</CustomerName>
              <Text>{userInfo.company}</Text>
              <ActiveStatus>
                <p>{userInfo.status}</p>
              </ActiveStatus>
            </ProfileInfo>
          </ProfileContainer>

          <ContactContainer>
            <PhoneIcon />
            <ContactWrapper>
              <Text>{userInfo.phone}</Text>
              <SmallText>Celular</SmallText>
            </ContactWrapper>
          </ContactContainer>

          <ContactContainer>
            <EmailIcon />
            <ContactWrapper>
              <Text>{userInfo.email}</Text>
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
    </Container>
  );
};

export default Info;
