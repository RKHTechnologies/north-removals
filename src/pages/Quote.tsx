import React, { FC, useState } from 'react';
import { PageBodyContainer, colours, SharedSettings } from '../Shared/SharedStyles';
import styled from 'styled-components';
import { SubmitButton } from '../components/Contact';
import { initialState } from '../initialItemState';

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
  justify-content: flex-start;
  padding: 0 50px;

  @media(max-width: ${SharedSettings.mobile}) {
    padding: 0 5px;  
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

const ItemsContainer = styled.div`
  width: 100%;
  max-width: ${SharedSettings.maxWidth};
  margin: auto;
  padding: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  
  @media(max-width: ${SharedSettings.mobile}) {
    padding: 5px;
    grid-template-columns: 1fr 1fr;
  }
`;

const Item = styled.div`
  width: 100%;
  padding-left: 10px;
  box-sizing: border-box;
  display: flex;
`;
const ItemTitle = styled.p`
  
`;
const ItemCount = styled.p`
`;
const ItemButton = styled.button`
  
`;

const Submit = styled(SubmitButton)`
  margin: 30px calc(50% - 150px) 0;
`;


const handleSubmit = (event: any) => {
  event.preventDefault();
  const data = new FormData(event.target);

  let newObject: any = {};
  data.forEach((value, key) => {newObject[key] = value});

  //Not currently used - for future API integration
  let json = JSON.stringify(newObject);
  console.dir(json);

  window.open(
    `mailto:enquiries@northremovals.co.uk
      ?subject=${"Quote Enquiry"}
      &body=%0D%0A
      Name: ${newObject.name}%0D%0A
      Phone: ${newObject.phone}%0D%0A
      Email: ${newObject.email}%0D%0A%0D%0A`,
      '_blank'
  );
}

const Quote: FC = () => {

  const [volumeCount, setVolumeCount] = useState(0);
  const [itemCount, setItemCount] = useState(initialState);

  const updateItemCount = (itemId: number, increment: boolean) => {
    let nextState: any, cubicFeet: any;

    if (increment) {
      nextState = itemCount.map(x => x.id === itemId ? { ...x, count: x.count + 1 } : x);
      cubicFeet = nextState[itemId].cubicFeet;
      setVolumeCount(volumeCount + cubicFeet);
    }
    else {
      nextState = itemCount.map(x => x.id === itemId ? { ...x, count: x.count - 1 } : x);
      cubicFeet = nextState[itemId].cubicFeet;
      setVolumeCount(volumeCount - cubicFeet);
    }

    setItemCount(nextState);
  };

  return (
    <Container> 
      <MainHeader>Get a Quote</MainHeader>
      <SubHeader>Please fill in the below, and we will get back to you as soon as possible</SubHeader>
      <FormContainer onSubmit={handleSubmit}>
        <FormItem placeholder="Name" name="name" />
        <FormItem placeholder="Phone" name="phone" />
        <FormItem placeholder="Email" name="email" />
        <FormItem placeholder="Moving Date" name="movingdate" />
        <FormItem placeholder="Moving From" name="movingfrom" />
        <FormItem placeholder="Moving To" name="movingto" />
        <Submit type="submit" value="SUBMIT" />
      </FormContainer>

      <ItemsContainer>
        {itemCount.map(item => (
          <Item>
            <ItemTitle>{item.name}</ItemTitle>
            <ItemButton onClick={() => updateItemCount(item.id, false)}>-</ItemButton>
            <ItemCount>{itemCount[item.id].count}</ItemCount>
            <ItemButton onClick={() => updateItemCount(item.id, true)}>+</ItemButton>
          </Item>
        ))}
        <div>SumCount: {volumeCount}</div>
      </ItemsContainer>
      

    </Container>
  );
}

export default Quote;