import React, { FC } from 'react';
import { PageBodyContainer, colours, SharedSettings } from '../Shared/SharedStyles';
import styled from 'styled-components';

const Container = styled(PageBodyContainer)`
  background: ${colours.primary};
`;

const MainHeader = styled.h1`
  text-transform: uppercase;
  font-weight: 600;
  -webkit-text-stroke: 3px ${colours.dark};
  color: ${colours.secondary};
  text-align: center;
  font-size: 3.6em;
  padding-top: 30px;
  margin: 0;

  @media(max-width: ${SharedSettings.mobile}) {
    font-size: 2.4em;
    -webkit-text-stroke: 2px ${colours.dark};
  }
`;

export const SubHeader = styled.div`
  color: ${colours.dark};
  text-align: center;
  padding-top: 10px;

  @media(max-width: ${SharedSettings.mobile}) {
    font-size: 0.8em;
  }
`;


const FormContainer = styled.form`
  width: 100%;
  max-width: ${SharedSettings.maxWidth};
  margin: auto;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 50px;

  @media(max-width: ${SharedSettings.mobile}) {
    padding: 5px;
  }
`;

const FormItem = styled.input`
  box-sizing: border-box;
  width: calc(50% - 20px);
  margin: 10px;
  border: 0;
  min-height: 40px;
  background: ${colours.light};
  border-radius: 5px;
  padding-left: 10px;
`;


const Quote: FC = () => {
  return (
    <Container> 
      <MainHeader>Get a Quote</MainHeader>
      <SubHeader>Please fill in the below, and we will get back to you as soon as possible</SubHeader>
      <FormContainer>
        <FormItem placeholder="Name" name="name" />
        <FormItem placeholder="Phone" name="phone" />
        <FormItem placeholder="Email" name="email" />
        <FormItem placeholder="Moving Date" name="movingdate" />
        <FormItem placeholder="Moving From" name="movingfrom" />
        <FormItem placeholder="Moving To" name="movingto" />
      </FormContainer>
    </Container>
  );
}

export default Quote;