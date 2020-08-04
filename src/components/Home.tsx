import React, { FC } from 'react';
import Hero from '../Shared/Hero';
import { PageContainer } from '../Shared/SharedStyles';

const Home: FC = () => {
  return (
    <>
      <PageContainer>
        <Hero image="removals1" small />
      </PageContainer>
      
    </>
  );
}

export default Home;