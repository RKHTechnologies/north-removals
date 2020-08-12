import React, { FC } from 'react';
import styled from 'styled-components';
import { colours, SharedSettings } from '../Shared/SharedStyles';
import Images, { imageLib } from '../Shared/ImageLib';

const Container = styled.div`
  padding-top: 206px;
`;

const TitleSection = styled.div`
  font-weight: 400;
  font-size: 1.5em;
  margin: 40px auto;
  color: ${colours.dark};
  text-align: center;
`;

const GridContainer = styled.div`
  width: 100%;
  padding: 0 50px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 10px;

  @media(max-width: ${SharedSettings.mobile}) {
    padding: 0 5px;
  }
`;


const GridItem = styled.div`
  max-width: 390px;
  min-width: 190px;
  background: #e6e6e6;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface ImageProps {
  image: imageLib;
}

const Image = styled.div`
  width: 100%;
  height: 225px;
  background: url(${(p: ImageProps) => Images[p.image]});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const Name = styled.span``;

const Description = styled.span``;

const Price = styled.div`

`;

const PackagingMaterials: FC = () => {
  return (
    <Container>
      <TitleSection>Packaging Materials</TitleSection>    
      <GridContainer>

        <GridItem>
          <Image image="box" />
          <Name>Cardboard Box</Name>
          <Description>Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos</Description>
          <Price>12.25</Price>
        </GridItem>

        <GridItem>

        </GridItem>

        <GridItem>
        </GridItem>

        <GridItem>
        </GridItem>

        <GridItem>
        </GridItem>

      </GridContainer>
    </Container>
  );
}

export default PackagingMaterials;