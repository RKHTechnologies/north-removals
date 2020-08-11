import React, { FC } from 'react';
import styled from 'styled-components';
import { colours } from '../Shared/SharedStyles';
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
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
`;


const GridItem = styled.div`
  width: 100%;
  height: 300px;
  background: #e6e6e6;
  border-radius: 10px;
  display: flex;
  justify-content: center;
`;

interface ImageProps {
  image: imageLib;
}

const Image = styled.div`
  width: 180px;
  height: 140px;
  background: url(${(p: ImageProps) => Images[p.image]});
  background-size: contain;
  background-repeat: no-repeat;
`;

const PackagingMaterials: FC = () => {
  return (
    <Container>
      <TitleSection>Packaging Materials</TitleSection>    
      <GridContainer>

        <GridItem>
          <Image image="box" />
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