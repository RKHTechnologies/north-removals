import React, { FC } from 'react';
import Hero from '../Shared/Hero';
import { PageBodyContainer, Section } from '../Shared/SharedStyles';
import ProductCards from '../components/ProductCards';
import JumboCard from '../components/JumboCard';

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
            <JumboCard title="Get a free, no obligation quote today!" buttonText="Get a Quote" link="/quote" colour="primary" />
          </div>
        </Section>
      </PageBodyContainer>
      
    </>
  );
}

export default Home;