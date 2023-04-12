import React, { FC } from "react";
import styled from "styled-components";
import { colours, SharedSettings } from "../Shared/SharedStyles";
import logo from "../img/logo_noText.png";
import { useHistory } from "react-router-dom";
import HeaderBar from "../Shared/HeaderBar";

const HeaderStrip = styled.div`
  position: absolute;
  width: 100%;
  height: 150px;
  background: ${colours.primary};

  @media (max-width: ${SharedSettings.mobile}) {
    height: 100px;
  }
`;

const HeaderContainer = styled.div`
  max-width: ${SharedSettings.maxWidth};
  margin: auto;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: "phone logo email";

  @media (max-width: ${SharedSettings.mobile}) {
    grid-template-areas: "logo . .";
  }
`;

const Phone = styled.div`
  grid-area: phone;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2em;
  color: #f5f2eb;

  span {
    display: contents;
    font-size: 0.8em;
  }

  @media (max-width: ${SharedSettings.mobile}) {
    display: none;
  }
`;

const Slogan = styled(Phone)`
  grid-area: email;
  font-size: 1.6em;
  font-style: italic;
`;

const LogoContainer = styled.div`
  grid-area: logo;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Logo = styled.div`
  background: url(${logo});
  background-size: contain;
  width: 130px;
  min-width: 130px;
  height: 119px;
  margin-right: 10px;

  @media (max-width: ${SharedSettings.mobile}) {
    width: 94px;
    min-width: 94px;
    height: 86px;
    margin-left: 40px;
  }

  @media (max-width: 420px) {
    width: 72px;
    min-width: 72px;
    height: 66px;
    margin-left: 5px;
  }
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

  @media (max-width: ${SharedSettings.mobile}) {
    font-size: 1.8em;
  }

  @media (max-width: 420px) {
    font-size: 1.3em;
  }
`;

const Header: FC = () => {
  const history = useHistory();

  return (
    <HeaderStrip>
      <HeaderContainer>
        <Phone>
          07943 810850
          <br />
          <span>enquiries@northremovals.co.uk</span>
        </Phone>
        <LogoContainer
          onClick={() => history.push(`${process.env.PUBLIC_URL}`)}
        >
          <Logo />
          <LogoText>NORTH REMOVALS</LogoText>
        </LogoContainer>
        <Slogan>"Let us do the heavy lifting for you"</Slogan>
      </HeaderContainer>
      <HeaderBar stickyHeader />
    </HeaderStrip>
  );
};

export default Header;
