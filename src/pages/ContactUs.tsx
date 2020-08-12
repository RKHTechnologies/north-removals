import React, { FC} from 'react';
import styled from 'styled-components';
import Contact from '../components/Contact';

const Container = styled.div`
  padding-top: 196px;
`;

const Quote: FC = () => {
  
  return (
    <Container> 
      <Contact />
    </Container>
  );
}

export default Quote;