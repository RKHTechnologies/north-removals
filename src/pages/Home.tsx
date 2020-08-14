import React, { FC } from 'react';
import styled from 'styled-components';
import Hero from '../Shared/Hero';
import { Section, SharedSettings } from '../Shared/SharedStyles';
import ProductCards from '../components/ProductCards';
import JumboCard from '../components/JumboCard';
import Contact from '../components/Contact';
import Testimonials from '../components/Testimonials';
import About from '../components/About';

const Container = styled.div`
  padding-top: 196px;

  @media(max-width: ${SharedSettings.mobile}) {
    padding-top: 100px;
  }
`;

const Home: FC = () => {
  return (
    <Container>
      <Hero image="removalsVan" />

      <Section id="about">
        <div className="wrapper">
          <About />
        </div>
      </Section>

      <Section id="products">
        <div className="wrapper">
          <ProductCards />
        </div>
      </Section>

      <Section id="tesimonials" fullwidth>
          <Testimonials />
      </Section>

      <Section id="quote">
        <div className="wrapper">
          <JumboCard title="Get a free, no obligation quote today!" buttonText="Get a Quote" link="/quote" colour="secondary" image="desk" />
        </div>
      </Section>

      <Section id="Contact" fullwidth lastItem> 
          <Contact />
      </Section>
    </Container>
  );
}

export default Home;