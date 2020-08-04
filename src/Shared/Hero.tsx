import React, { FC } from 'react';
import styled from 'styled-components';

import removals1 from '../img/removals.jpg';

const images = {
    'removals1': removals1,
};

interface HeroProps {
    imageUrl: string;
    small?: boolean;
    imageHeight?: string
}

const HeroBanner = styled.div`
    width: 100%;
    height: ${(p: HeroProps):string => p.small ? "65%" : "80%"};
    text-align: center;
    background: #eee;
    background-image: url(${(p: HeroProps):string => p.imageUrl});
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: ${(p: HeroProps):string => p.imageHeight ?? "center"};
    background-position-x: center;
`;


interface IProps {
    image: 'removals1';
    small?: boolean;
    imageHeight?: string;
}

const Hero: FC<IProps> = ({image, small, imageHeight}: IProps) => {
    return (
        <HeroBanner imageUrl={images[image]} small={small} imageHeight={imageHeight} />
    );
}

export default Hero;