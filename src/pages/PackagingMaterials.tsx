import React, { FC } from 'react';
import styled from 'styled-components';
import { colours, SharedSettings } from '../Shared/SharedStyles';
import Images, { imageLib } from '../Shared/ImageLib';

const Container = styled.div`
  padding-top: 206px;
`;

const TitleSection = styled.div`
  font-size: 3em;
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
  grid-gap: 20px;

  @media(max-width: ${SharedSettings.mobile}) {
    padding: 0 5px;
  }
`;


const GridItem = styled.div`
  max-width: 390px;
  min-width: 190px;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;

interface ImageProps {
  image: imageLib;
}

const Image = styled.div`
  width: 100%;
  padding-top: 100%;
  background: url(${(p: ImageProps) => Images[p.image]});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin-bottom: 10px;
  border-radius: 5px;
`;

const Name = styled.span`
  color: ${colours.dark};
  font-size: 2em;
  margin-bottom: 5px;
`;

const Description = styled.span`
  color: ${colours.dark};
  font-size: 1em;
  font-weight: normal;
`;

const Price = styled.div`
  font-size: 1.5em;
  color: ${colours.primary};
  margin-top: 5px;

  &:before{
    content: '£';
    font-size: 1.1em;
  }
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
          <Image image="bubbleWrap" />
          <Name>Bubble Wrap</Name>
          <Description>Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos</Description>
          <Price>1.40 per square meter</Price>
        </GridItem>

        <GridItem>
          <Image image="box" />
          <Name>Cardboard Box</Name>
          <Description>Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos</Description>
          <Price>12.25</Price>
        </GridItem>

        <GridItem>
          <Image image="box" />
          <Name>Cardboard Box</Name>
          <Description>Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos</Description>
          <Price>12.25</Price>
        </GridItem>

        <GridItem>
          <Image image="box" />
          <Name>Cardboard Box</Name>
          <Description>Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos</Description>
          <Price>12.25</Price>
        </GridItem>

        <GridItem>
          <Image image="box" />
          <Name>Cardboard Box</Name>
          <Description>Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos</Description>
          <Price>12.25</Price>
        </GridItem>

      </GridContainer>
    </Container>
  );
}

export default PackagingMaterials;