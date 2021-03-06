import React, { useState } from "react";
import styled from "styled-components";
import { colours, SharedSettings } from "../Shared/SharedStyles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import emailjs from 'emailjs-com';
import InfoOverlay from "./InfoOverlay";


interface sectionProps {
  dark?: boolean;
  background?: string;
}

const Section = styled.div`
    background: ${(p: sectionProps) => p.dark ? "#000" : "inherit"};
    background: ${(p: sectionProps) => p.background};
    color: ${(p: sectionProps) => p.dark ? colours.light : "inherit"};
    padding: 50px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    overflow: hidden;

    &#about {
        padding-top: 130px;
    }

    @media(max-width: 1100px) {
        padding: 20px;
    }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: 100;
  font-size: 1.6em;
`;

const MainHeader = styled.h1`
  text-transform: uppercase;
  font-weight: 600;
  -webkit-text-stroke: 3px ${colours.dark};
  color: ${colours.secondary};
  font-size: 3em;
  margin: 0 0 30px;

  @media(max-width: ${SharedSettings.mobile}) {
    font-size: 2.4em;
    -webkit-text-stroke: 2px ${colours.dark};
  }
`;

const SubHeader = styled.div`
  max-width: 1000px;
  color: ${colours.dark};

  @media(max-width: ${SharedSettings.mobile}) {
    font-size: 0.8em;
  }
`;

const LinksContainer = styled.div`
  padding: 20px;
  max-width: 1000px;

  display: grid;
  grid-template-columns: 1fr 1fr;

  @media(max-width: 1100px) {
    grid-template-columns: 1fr;
    font-size: 0.7em;
    margin: 0;
  }
`;

interface LinkProps {
  active?: boolean;
}

const Link = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 18px 14px 0;
  border: 3px solid transparent;
  border-radius: 22px;
  /* cursor: pointer; */
  margin: 10px;
  background: ${(p: LinkProps): string => p.active ? "#fff" : "transparent"};
  color: ${(p: LinkProps): string => p.active ? colours.primary : colours.dark};
  font-weight: 400;

  & > div {
    background: ${(p: LinkProps): string => p.active ? colours.primary : colours.dark};
  }

  /* &:hover {
    border-color: ${colours.light};
  } */

  &:nth-child(even) {
    flex-direction: row-reverse;
    padding-left: 20px;
    padding-right: 5px;
  }

  @media(max-width: 1100px) {
    flex-direction: row !important;
    padding: 0 18px 0 0 !important;
    margin: 0;
  }
`;

const FormContainer = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 70%;

  @media(max-width: 1100px) {
    width: 95%;
  }
`;

const Column = styled.div`
  width: 50%;
  padding: 0 20px;
  box-sizing: border-box;

  @media(max-width: 1100px) {
    width: 100%;
    padding: 0;
  }
`;

const FormItem = styled.input`
    width: 100%;
    height: 50px;
    background: ${colours.light};
    border: 0;
    border-radius: 5px;
    margin-bottom: 20px;
    box-sizing: border-box;
    padding: 0 20px;
    font-size: 0.8em;
`;

const MultiLineForm = styled.textarea`
  width: 100%;
  height: 120px;
  background: ${colours.light};
  border: 0;
  border-radius: 5px;
  margin-bottom: 20px;
  box-sizing: border-box;
  padding: 14px 20px 0;
  font-size: 0.8em;
`;

export const SubmitButton = styled.input`
  width: 300px;
  height: 50px;
  border-radius: 3px;
  background: ${colours.secondary};
  color: ${colours.dark};
  border: 3px solid ${colours.dark};

  font-size: 20px;
  line-height: 44px;
  font-size: 1.1em;
  cursor: pointer;

  &:hover {
    background: #E7CC92;
    color: ${colours.dark};
    border-color: ${colours.dark};
  }
`;

const Icon = styled(FontAwesomeIcon)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 7px 15px 0px;
`;


const Contact: React.FC = () => {
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [overlayText, setOverlayText] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);

    let data: any = {};
    formData.forEach((value, key) => {data[key] = value});

    const returnData = {
      name: data.name,
      phone: data.phone,
      email: data.email,
      subject: data.subject,
      message: data.message,
    }

    emailjs.send('gmail', 'NR_Contact', returnData, 'user_qVvmKovzsj8m5O2fySEw6')
      .then((result) => {
          console.log(result.text);
          setOverlayOpen(true);
          setOverlayText("Form Successfully submitted! We will be in touch as soon as possible")
      }, (error) => {
          console.log(error.text);
          setOverlayOpen(true);
          setOverlayText("Oops, an error occured. Please try again later, or contact us if the issue persists.")
      });

    event.target.reset();
  }

  return (
    <Section background={colours.primary}>
        <Container>
          <MainHeader>Contact Us</MainHeader>
          <SubHeader>Please get in touch today if you have any questions, are interested in any of our services - or are looking for hassle free solutions to your removal needs!</SubHeader>

          <LinksContainer>
            <Link active={false}>
              <Icon icon={faEnvelope} size="2x" />
              Enquiries@northremovals.co.uk
            </Link>
            <Link active={false}>
              <Icon icon={faPhone} size="2x"/>
              07885 575 400
            </Link>
            <Link active={false}>
              <Icon icon={faFacebookSquare} size="2x" />
              @NorthMoves
            </Link>
            <Link active={false}>
              <Icon icon={faInstagramSquare} size="2x"/>
              @northmoves95
            </Link>
          </LinksContainer>

          <FormContainer onSubmit={handleSubmit}>
            <Column>
              <FormItem placeholder="Name" name="name" />
              <FormItem placeholder="Phone" name="phone" />
              <FormItem placeholder="Email" name="email" />
            </Column>

            <Column>
              <FormItem placeholder="Subject" name="subject" />
              <MultiLineForm placeholder="Your Message" name="message"></MultiLineForm>
            </Column>
            <SubmitButton type="submit" value="SUBMIT" />
          </FormContainer>

        </Container>
        <InfoOverlay open={overlayOpen} close={() => setOverlayOpen(false)} text={overlayText} />
    </Section>
  );
};

export default Contact;
