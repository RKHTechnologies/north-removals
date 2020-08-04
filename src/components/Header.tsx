import React, { FC } from 'react';
import styled from 'styled-components';
import { colours, SharedSettings } from '../Shared/SharedStyles';
import logo from '../img/logo_noText.png';

const HeaderStrip = styled.div`
  position: absolute;
  width: 100%;
  height: 150px;
  background: ${colours.primary};
`;

const HeaderContainer = styled.div`
  max-width: ${SharedSettings.maxWidth};
  margin: auto;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: 'phone logo email';
`;

const Phone = styled.div`
  grid-area: phone;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2em;
  color: #f5f2eb;
`;

const Email = styled(Phone)`
  grid-area: email;
  font-size: 1.6em;
`;

const LogoContainer = styled.div`
  grid-area: logo;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.div`
  /* grid-area: logo; */
  background: url(${logo});
  background-size: contain;
  width: 130px;
  min-width: 130px;
  height: 119px;
  margin-right: 10px;
`;

const LogoText = styled.p`
  grid-area: text;
  font-size: 2.5em;
  width: 210px;
  color: ${colours.dark};
  text-align: left;
  margin: 0;
  display: flex;
  align-items: center;
  letter-spacing: 4px;
`;

const Header: FC = () => {
  return (
    <HeaderStrip>
      <HeaderContainer>
        <Phone>07885 575 400</Phone>
        <LogoContainer>
          <Logo />
          <LogoText>NORTH REMOVALS</LogoText>
        </LogoContainer>
        <Email>enquiries@northremovals.co.uk</Email>
      </HeaderContainer>
    </HeaderStrip>
  )
}

export default Header;