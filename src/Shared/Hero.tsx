import React, { FC } from 'react';
import styled from 'styled-components';
import Images, {imageLib} from './ImageLib';
import { SharedSettings } from './SharedStyles';

interface HeroProps {
    imageUrl: string;
    small?: boolean;
    imageHeight?: string
}

const HeroBanner = styled.div`
    width: 100%;
    height: ${(p: HeroProps):string => p.small ? "65vh" : "55vh"};
    text-align: center;
    background: #eee;
    background-image: url(${(p: HeroProps):string => p.imageUrl});
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: ${(p: HeroProps):string => p.imageHeight ?? "center"};
    background-position-x: center;

    @media(max-width: ${SharedSettings.mobile}) {
        height: 40vh;
  }
`;


interface IProps {
    image: imageLib;
    small?: boolean;
    imageHeight?: string;
}

const Hero: FC<IProps> = ({image, small, imageHeight}: IProps) => {
    return (
        <HeroBanner imageUrl={Images[image]} small={small} imageHeight={imageHeight} />
    );
}

export default Hero;