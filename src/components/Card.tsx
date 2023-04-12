import React, { FC } from "react";
import styled from "styled-components";
import Images, { imageLib } from "../Shared/ImageLib";
import { colours } from "../Shared/SharedStyles";
import { useHistory } from "react-router-dom";

interface IProps {
  image: imageLib;
  primary: string;
  url: string;
}

interface IContainerProps {
  image: imageLib;
}

const CardContainer = styled.div`
  width: 100%;
  min-height: 300px;
  position: relative;
  background: url(${(p: IContainerProps) => Images[p.image]});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  cursor: pointer;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: ${colours.dark};
    opacity: 0.5;
  }

  &:hover {
    transform: scale(1.15);
  }
`;

const PrimaryText = styled.div`
  font-size: 2em;
  color: ${colours.light};
  border-top: 2px solid ${colours.light};
  border-bottom: 2px solid ${colours.light};
  padding: 3px 0;
  z-index: 1;
  text-align: center;
  max-width: 80%;
`;

// const SecondaryText = styled.div`
//   text-align: center;
//   color: ${colours.light};
//   z-index: 1;
//   font-weight: 500;
//   margin-top: 20px;
//   width: 90%;
//   font-size: 1.1em;
// `;

const Card: FC<IProps> = ({ image, primary, url }: IProps) => {
  const history = useHistory();

  return (
    <>
      <CardContainer
        image={image}
        onClick={() => history.push(`${process.env.PUBLIC_URL}${url}`)}
      >
        <PrimaryText>{primary}</PrimaryText>
        {/* <SecondaryText>Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at vix ad putent delectus delicata usu.</SecondaryText> */}
      </CardContainer>
    </>
  );
};

export default Card;
