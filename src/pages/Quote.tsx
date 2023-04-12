import React, { FC, useState } from 'react';
import { colours, SharedSettings } from '../Shared/SharedStyles';
import styled from 'styled-components';
import { SubmitButton } from '../components/Contact';
import { initialState, IItemState } from '../initialItemState';
import emailjs from 'emailjs-com';
import InfoOverlay from '../components/InfoOverlay';

const Container = styled.div`
  background: ${colours.primary};
  padding-top: 196px;

  @media(max-width: ${SharedSettings.mobile}) {
    padding-top: 100px;
  }
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
  padding: 10px 0;
  font-size: 1.2em;

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

  @media(max-width: 700px) {
    width: calc(100% - 20px);
  }
`;

const FormDropdown = styled.select`
  box-sizing: border-box;
  width: calc(50% - 20px);
  margin: 10px;
  border: 0;
  min-height: 40px;
  background: ${colours.light};
  border-radius: 5px;
  padding: 0 10px;
  color: ${colours.dark};

  &:invalid { 
    color: gray !important;
  }

  @media(max-width: 700px) {
    width: calc(100% - 20px);
  }
`;

const ItemsContainer = styled.div`
  width: 100%;
  max-width: ${SharedSettings.maxWidth};
  margin: auto;
  padding: 50px;
  padding-top: 10px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  
  @media(max-width: 1300px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media(max-width: ${SharedSettings.mobile}) {
    padding: 5px;
    grid-template-columns: 1fr 1fr;
  }

  @media(max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const ItemHeader = styled.p`
  margin-bottom: 0;
  margin-top: 50px;
  text-align: center;
  color: ${colours.dark};
  font-size: 2em;
`;

const Item = styled.div`
  /* width: 80%; */
  width: 300px;
  margin-left: calc(50% - 190px);
  padding-left: 10px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const ItemTitle = styled.p`
  color: ${colours.dark};
  font-weight: bold;
  font-size: 1.05em;
  text-align: right;
`;
const ItemCount = styled.p`
  font-size: 2em;
  margin: 0 20px;
  color: ${colours.light};
`;
const ItemButton = styled.button`
  width: 40px;
  height: 40px;
  border: 2px solid ${colours.dark};
  color: ${colours.dark};
  background: ${colours.secondary};
  font-size: 2em;
  position: relative;

  &:after {
    content:'+';
    position: absolute;
    font-family: initial;
    margin-top: -18px;
    margin-left: -8px;
  }

  &:first-of-type {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border-right: none;
    margin-right: 2px;

    &:after {
      content: '-';
      margin-left: -6px;
      margin-top: -20px;
    }
  }

  &:last-child {
    margin-left: -2px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

const Submit = styled(SubmitButton)`
  margin: 50px calc(50% - 150px);
`;

const Quote: FC = () => {

  const [volumeCount, setVolumeCount] = useState(0);
  const [itemCount, setItemCount] = useState(initialState);
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [overlayText, setOverlayText] = useState("");

  const updateItemCount = (itemId: number, increment: boolean) => {
    let nextState: any, cubicFeet: any;

    if (increment) {
      nextState = itemCount.map(x => x.id === itemId ? { ...x, count: x.count + 1 } : x);
      cubicFeet = nextState[itemId].cubicFeet;
      setVolumeCount(volumeCount + cubicFeet);
    }
    else {
      nextState = itemCount.map(x => x.id === itemId ? { ...x, count: x.count > 0 ? (x.count - 1) : (x.count) } : x);
      cubicFeet = nextState[itemId].cubicFeet;
      setVolumeCount(volumeCount - cubicFeet);
    }

    setItemCount(nextState);
  };


  const getItemsList = () => {
    let itemsList: Array<IItemState> = [];
    itemCount.map(x => x.count > 0 && itemsList.push(x));
    return itemsList;
  }
  
  const getTotalCubicFeet = (itemsList: Array<IItemState>) => {
    let totalCubicFeet: number = 0;
    itemsList.map(i => totalCubicFeet += (i.count * i.cubicFeet));      
    return totalCubicFeet;
  }

  const stringBuilder = (itemsList: Array<IItemState>) => {
    var lines: Array<string> = [];
    itemsList.map(i => lines.push(`(${i.count}x) ${i.name} - ${i.cubicFeet * i.count}Ft`));
    return lines.join("<br />");
  }

  
  const handleSubmit = (event: any) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    let data: any = {};
    formData.forEach((value, key) => {data[key] = value});

    const itemsList = getItemsList();
    const totalCubicFeet = getTotalCubicFeet(itemsList);
    const itemsString = stringBuilder(itemsList);

    console.log("ItemsList: ", itemsList);
    console.log("ItemsListString: ", stringBuilder(itemsList));

    const returnData = {
      name: data.name,
      phone: data.phone,
      email: data.email,
      movingDate: data.movingDate,
      movingFrom: data.movingFrom,
      movingTo: data.movingTo,
      fromPropertyType: data.fromPropertyType,
      toPropertyType: data.toPropertyType,
      fromAccess: data.fromAccess,
      toAccess: data.toAccess,
      cubicFeet: totalCubicFeet,
      items: itemsString,
    }

    emailjs.send('gmail', 'defaultTemplate', returnData, 'user_qVvmKovzsj8m5O2fySEw6')
      .then((result) => {
          console.log(result.text);
          setOverlayOpen(true);
          setOverlayText("Form Successfully submitted, we will be in touch as soon as possible")
      }, (error) => {
          console.log(error.text);
          setOverlayOpen(true);
          setOverlayText("Oops, an error occured. Please try again later, or contact us if the issue persists.")
      });

    event.target.reset();
  }

  const sectionList = [...Array.from(new Set(itemCount.map(item => item.section)))];
  
  return (
    <Container> 
      <MainHeader>Get a Quote</MainHeader>
      <SubHeader>Please fill in the below, and we will get back to you as soon as possible</SubHeader>
      <SubHeader>Or if you'd prefer - we can do it for you, with our home survey service. Contact today to book!</SubHeader>
      <FormContainer onSubmit={handleSubmit} id="quoteForm">
        <FormItem placeholder="Name" name="name" />
        <FormItem placeholder="Phone" name="phone" />
        <FormItem placeholder="Email" name="email" />
        <FormItem placeholder="Moving Date" name="movingDate" />
        <FormItem placeholder="Moving From" name="movingFrom" />
        <FormItem placeholder="Moving To" name="movingTo" />
        <FormDropdown name="fromPropertyType" required>
          <option value="" selected disabled hidden>Property Type (From)</option>
          <option value="Flat">Flat</option>
          <option value="House">House</option>
          <option value="ThreeStory">3 Story +</option>
          <option value="Bungalow">Bungalow</option>
          <option value="Office">Office</option>
        </FormDropdown>
        <FormDropdown name="toPropertyType" required>
          <option value="" selected disabled hidden>Property Type (To)</option>
          <option value="Flat">Flat</option>
          <option value="House">House</option>
          <option value="ThreeStory">3 Story +</option>
          <option value="Bungalow">Bungalow</option>
          <option value="Office">Office</option>
        </FormDropdown>
        <FormDropdown name="fromAccess" required>
          <option value="" selected disabled hidden>Vehicle Access (From)</option>
          <option value="Within 10m">Within 10m</option>
          <option value="Over 10m">Over 10m</option>
        </FormDropdown>
        <FormDropdown name="toAccess" required>
          <option value="" selected disabled hidden>Vehicle Access (To)</option>
          <option value="Within 10m">Within 10m</option>
          <option value="Over 10m">Over 10m</option>
        </FormDropdown>
      </FormContainer>

      {sectionList.map(section => (
        <>
          <ItemHeader>{section}</ItemHeader>
          <ItemsContainer>
            {itemCount.map(item => item.section === section ? (
              <Item>
                <ItemTitle>{item.name}</ItemTitle>
                <ItemCount>{itemCount[item.id].count}</ItemCount>
                <ItemButton onClick={() => updateItemCount(item.id, false)} />
                <ItemButton onClick={() => updateItemCount(item.id, true)} />
              </Item>
            ) : null)}
          </ItemsContainer>
        </>
      ))}
      <Submit type="submit" value="SUBMIT" form="quoteForm" />
      <InfoOverlay open={overlayOpen} close={() => setOverlayOpen(false)} text={overlayText} />
    </Container>
  );
}

export default Quote;