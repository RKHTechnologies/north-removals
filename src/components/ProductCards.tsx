import React, { FC } from 'react';
import styled from 'styled-components';
import Card from './Card';

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 40px;

  @media(max-width: 1100px) {
    grid-gap: 10px;
    grid-template-columns: 1fr 1fr;
  }
`;

const ProductCards: FC = () => {
  return (
    <Container>
      <Card image='homeMoves' primary='Home Moves' />
      <Card image='desk' primary='Office Removals' />
      <Card image='wrappedSofa' primary='Packing Service' />
      <Card image='box' primary='Packaging Materials' />
    </Container>
  );
}

export default ProductCards;