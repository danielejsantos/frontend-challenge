import styled, { css } from 'styled-components';

import { BsPersonFill } from 'react-icons/bs';
import { 
  FaPhoneAlt, 
  FaWhatsapp,
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 15px;
`;

export const AvatarWrapper = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #cccccc;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Avatar = styled(BsPersonFill)`
  width: 40px;
  height: 40px;
  fill: #fff;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const CustomerName = styled.p`
  color: #5a5a5a;
  font-size: 15px;
`;

export const Text = styled(CustomerName)`
  font-size: 13px;
`;

export const ActiveStatus = styled.div`
  width: 45px;
  background-color: #c1d7c2;
  border-radius: 5px;
  padding: 3px;
  display: flex;
  justify-content: center;

  p {
    color: #4f694f;
    font-size: 12px;
    font-weight: 600;
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const iconCSS = css`
  color: #5a5a5a;
  width: 18px;
  height: 18px;
`;

export const PhoneIcon = styled(FaPhoneAlt)`
  ${iconCSS}
`;

export const EmailIcon = styled(MdEmail)`
  ${iconCSS}
`;

export const WhatsappIcon = styled(FaWhatsapp)`
  ${iconCSS};
  margin-right: 10px;
`;
export const FacebookIcon = styled(FaFacebookSquare)`
  ${iconCSS};
  margin-right: 10px;
`;
export const InstagramIcon = styled(FaInstagram)`
  ${iconCSS};
  margin-right: 10px;
`;
export const TwitterIcon = styled(FaTwitter)`
  ${iconCSS};
  margin-right: 10px;
`;
export const LinkedinIcon = styled(FaLinkedin)`
  ${iconCSS}
`;

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const SmallText = styled(Text)`
  font-size: 11px;
`;

export const SocialWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;