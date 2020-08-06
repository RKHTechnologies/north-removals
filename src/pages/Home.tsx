import React, { FC } from 'react';
import Hero from '../Shared/Hero';
import { PageBodyContainer, Section } from '../Shared/SharedStyles';
import ProductCards from '../components/ProductCards';
import JumboCard from '../components/JumboCard';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home: FC = () => {
  return (
    <>
      <PageBodyContainer>
        <Hero image="removals" />

        <Section id="about">
          <div className="wrapper">

            About section
          </div>
        </Section>

        <Section id="products">
          <div className="wrapper">
            <ProductCards />
          </div>
        </Section>

        <Section id="quote">
          <div className="wrapper">
            <JumboCard title="Get a free, no obligation quote today!" buttonText="Get a Quote" link="/quote" colour="secondary" image="desk" />
          </div>
        </Section>

        <Section id="tesimonials">
          <div className="wrapper">
            Testimonials
          </div>
        </Section>

        <Section id="Contact" fullwidth lastItem> 
            <Contact />
        </Section>

        <Footer />
      </PageBodyContainer>
      
    </>
  );
}

export default Home;