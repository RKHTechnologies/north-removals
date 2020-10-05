import React, { FC } from "react";
import styled from "styled-components";
import { colours, SharedSettings } from "../Shared/SharedStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxes, faTasks, faHourglassHalf, faTag, faPassport, faGift } from "@fortawesome/free-solid-svg-icons";

export const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  color: ${colours.dark};

  @media(max-width: ${SharedSettings.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const GridItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-areas: 
    'icon title'
    'icon description';
  position: relative;
`;

export const Icon = styled(FontAwesomeIcon)`
  grid-area: icon;
  height: 50px;
  border-radius: 50%;
  margin: 7px 15px 0px;
  color: ${colours.secondary};
  position: absolute;
  right: 0;
`;

export const Title = styled.h2`
  grid-area: title;
  width: 85%;
  margin-top: 18px;
  margin-bottom: 0;
  color: ${colours.primary};
`;

export const Description = styled.p`
  grid-area: description;
  width: 85%;
  margin-top: 5px;
  line-height: 24px;
`;

const PackingTips: FC = () => {
  return (
    <>
      <Grid>
        <GridItem>
          <Icon icon={faHourglassHalf} size="2x" />
          <Title>Preperation</Title>
          <Description>Begin Packing well in advance</Description>
        </GridItem>
        
        <GridItem>
          <Icon icon={faGift} size="2x" />
          <Title>Bubble Wrap Delicates</Title>
          <Description>Bubble wrap all your delicate itms e.g. pictures, canvases and anything glass</Description>
        </GridItem>

        <GridItem>
          <Icon icon={faBoxes} size="2x" />
          <Title>Box small items</Title>
          <Description>Anything smaller than a microwave put in a box</Description>
        </GridItem>
        
        <GridItem>
          <Icon icon={faPassport} size="2x" />
          <Title>Documents</Title>
          <Description>Keep your important documents with you</Description>
        </GridItem>

        <GridItem>
          <Icon icon={faTag} size="2x" />
          <Title>Labels</Title>
          <Description>Make sure you label your boxes accordingly</Description>
        </GridItem> 

        <GridItem>
          <Icon icon={faTasks} size="2x" />
          <Title>Final Checks</Title>
          <Description>Make sure all areas are checked. Such as lofts, garages and sheds.</Description>
        </GridItem>
      </Grid>
    </>
  );
}

export default PackingTips;