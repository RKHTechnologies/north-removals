import React, { FC} from 'react';
import styled from 'styled-components';
import { SharedSettings, Section, colours } from '../Shared/SharedStyles';
import Hero from '../Shared/Hero';
import Contact from '../components/Contact';
import PackingTips from '../components/packingTips';

const Container = styled.div`
  padding-top: 206px;

  @media(max-width: ${SharedSettings.mobile}) {
    padding-top: 100px;
  }
`;

const Description = styled.div`
  font-weight: 400;
  font-size: 1.5em;
  margin: 40px auto 0;
  color: ${colours.dark};
  text-align: center;
`;

const PackingService: FC = () => {
  
  return (
    <Container> 
      <Hero image="packingService" />

      <Section id="summary" lastItem>
        <div className="wrapper">
          <Description>
            Not enough time to pack your possessions? We can offer a full packing service to take the stress away, and get all your items packed and ready for your moving day.
            <br /><br />
            Our packing service rates are competitive and flexible. We can work around your work life and home life to suit your needs. 
            <br />
            Please get in contact below to find out more
            <br /><br />
            <b>Our professional packing tips:</b>
            <br /><br />
          </Description>
        </div>
      </Section>
      
      <PackingTips />

      <Section id="Contact" fullwidth lastItem> 
          <Contact />
      </Section>

    </Container>
  );
}

export default PackingService;