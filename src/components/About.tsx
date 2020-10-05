import React, { FC } from "react";
import styled from "styled-components";
import { colours, SharedSettings } from "../Shared/SharedStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile, faUmbrellaBeach, faBoxes, faCalendarAlt, faHandshake, faHourglassHalf } from "@fortawesome/free-solid-svg-icons";

const TitleSection = styled.div`
  font-weight: 400;
  font-size: 1.5em;
  margin: 40px auto;
  color: ${colours.dark};
  text-align: center;
`;

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

const About: FC = () => {
  return (
    <>
      <TitleSection>
        We are a family run removals company with over 10 years experince. We take pride in offering a professional and reliable services with competitive rates. Let us take the stress out of your moving day and do the heavy lifting for you.
      </TitleSection>
      <Grid>
        <GridItem>
          <Icon icon={faSmile} size="2x" />
          <Title>Friendly Service</Title>
          <Description>Above all we are happy to help make your move as seamless as possible</Description>
        </GridItem>
        
        <GridItem>
          <Icon icon={faUmbrellaBeach} size="2x" />
          <Title>Stress Free</Title>
          <Description>We'll sort everything out for you, taking away the stress and hassle of your move</Description>
        </GridItem>

        <GridItem>
          <Icon icon={faBoxes} size="2x" />
          <Title>Expert advice on packing</Title>
          <Description>Our experienced colleagues can provide help with fitting and adjusting packaged items</Description>
        </GridItem>
        
        <GridItem>
          <Icon icon={faCalendarAlt} size="2x" />
          <Title>Over 10 Years Experience</Title>
          <Description>Our team is experience in all types of removals; houses, flats, offices - no job is too big or small</Description>
        </GridItem>

        <GridItem>
          <Icon icon={faHourglassHalf} size="2x" />
          <Title>Half Hourly Rates</Title>
          <Description>This cost effective solution allows you to simply pay for the time used</Description>
        </GridItem>

        <GridItem>
          <Icon icon={faHandshake} size="2x" />
          <Title>If you're not happy we're not happy</Title>
          <Description>As a customer driven organisation, your happiness is our priority</Description>
        </GridItem>
      </Grid>
    </>
  );
}

export default About;