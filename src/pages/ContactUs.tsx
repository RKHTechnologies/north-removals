import React, { FC} from 'react';
import styled from 'styled-components';
import Contact from '../components/Contact';
import { SharedSettings } from '../Shared/SharedStyles';

const Container = styled.div`
  padding-top: 196px;

  @media(max-width: ${SharedSettings.mobile}) {
    padding-top: 100px;
  }
`;

const Quote: FC = () => {
  
  return (
    <Container> 
      <Contact />
    </Container>
  );
}

export default Quote;