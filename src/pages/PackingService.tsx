import React, { FC} from 'react';
import styled from 'styled-components';
import { SharedSettings, Section, colours } from '../Shared/SharedStyles';
import Hero from '../Shared/Hero';
import Contact from '../components/Contact';

const Container = styled.div`
  padding-top: 206px;

  @media(max-width: ${SharedSettings.mobile}) {
    padding-top: 100px;
  }
`;

const Description = styled.div`
  font-weight: 400;
  font-size: 1.5em;
  margin: 40px auto;
  color: ${colours.dark};
  text-align: center;
`;

const PackingService: FC = () => {
  
  return (
    <Container> 
      <Hero image="removals" />

      <Section id="summary">
        <div className="wrapper">
          <Description>
            We provide a packing service and this is the placeholder for it's description.
          </Description>
        </div>
      </Section>

      <Section id="Contact" fullwidth lastItem> 
          <Contact />
      </Section>

    </Container>
  );
}

export default PackingService;