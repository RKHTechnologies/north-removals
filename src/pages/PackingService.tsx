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
            Our professional packing tips:
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