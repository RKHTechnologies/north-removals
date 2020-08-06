import React, { FC } from 'react';
import styled from 'styled-components';
import { colours, SharedSettings } from '../Shared/SharedStyles';
import Images from '../Shared/ImageLib';

const FooterContainer = styled.footer`
  width: 100%;
  height: 80px;
  background: ${colours.light};
  color: #707070;
  border-top: 3px solid #707070;
  display: flex;
  align-items: center;
  justify-content: space-around;

  div:before {
    content: '';
    position: absolute;
    margin-left: -48px;
    margin-top: -10px;
    width: 40px;
    height: 40px;
    background: url(${Images['rkh']});
    background-size: cover;
  }

  @media(max-width: ${SharedSettings.mobile}) {
    flex-direction: column;
    padding-bottom: 15px;

    div { margin-left: 36px; }
  }
`;

const Footer: FC = () => {
  return (
    <FooterContainer>
      <p>Copyright © 2020 North Removals. All rights reserved.</p>
      <div>Site built by RKH Technologies</div>
    </FooterContainer>
  );
}

export default Footer;