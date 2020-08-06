import React, { FC } from 'react';
import styled from 'styled-components';
import { colours } from '../Shared/SharedStyles';
import { useHistory } from 'react-router-dom';
import Images, {imageLib} from '../Shared/ImageLib';

const JumboCardContainer = styled.div`
  width: 80%;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas:
    'side image image'
    'side image image'
    'side image image';

  h3 {
      grid-area: title;
      font-size: 3em;
      margin: 20px 0;
  }
  p {
    grid-area: text;
    font-weight: 400;
    color: ${colours.dark};
  }
`;

const SideContainer = styled.div`
  grid-area: side;
  background: ${colours.secondary};
  color: ${colours.light};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: baseline;
  padding: 40px;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    border-top: 22px solid transparent;
    border-bottom: 22px solid transparent;
    border-left: 22px solid ${colours.secondary};
    right: -22px;
    top: calc(50% - 22px);
  }
`;

const Button = styled.button`
  grid-area: joinUs;
  padding: 14px 35px;
  margin-top: 20px;
  border: 0;
  background: #fff;
  color: ${colours.dark};
  font-size: 1.05em;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${colours.Yellow};
  }
`;

const LeadersImage = styled.div`
  grid-area: image;
  background: url(${Images['desk']});
  background-size: cover;
  height: 500px;
`;

interface IProps {
  title: string,
  buttonText: string,
  link: string,
  colour: string,
}

const JumboCard: FC<IProps> = ({ title, buttonText, link, colour }: IProps) => {
  const history = useHistory();
  
  return (
    <>
      <JumboCardContainer>
        <SideContainer>
          <h3>{title}</h3>
          <p>Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at vix ad putent delectus delicata usu. Vidit dissentiet eoscu eum an brute copiosae hendrerit. Eos erant dolorum an.</p>
          <Button onClick={() => history.push(`${process.env.PUBLIC_URL}${link}`)}>{buttonText}</Button>
        </SideContainer>
        <LeadersImage />
      </JumboCardContainer>
    </>
  );
}

export default JumboCard;