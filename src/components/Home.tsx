import React, { FC } from 'react';
import Hero from '../Shared/Hero';
import { PageBodyContainer, Section } from '../Shared/SharedStyles';
import ProductCards from './ProductCards';

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
      </PageBodyContainer>
      
    </>
  );
}

export default Home;