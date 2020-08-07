import React, { FC } from 'react';
import { PageBodyContainer, Section } from '../Shared/SharedStyles';
import Hero from '../Shared/Hero';

const Quote: FC = () => {
  return (
    <PageBodyContainer> 

      <Section id="about">
        <div className="wrapper">
          Get a quote
        </div>
      </Section>
    </PageBodyContainer>
  );
}

export default Quote;