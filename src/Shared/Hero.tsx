import React, { FC } from 'react';
import styled from 'styled-components';

import highRopes from '../img/cub-high-ropes.jpg';
import canoes from '../img/canoes.jpg';
import expedition from '../img/explorer-expedition.jpg';
import obstacle from '../img/explorer-teamwork-3.jpg';
import beavers from '../img/beavers-and-leader.jpg';
import cubs from '../img/cubs-group.jpg';
import scouts from '../img/scouts-life-jackets.jpg';
import kayaking from '../img/kayaking.jpg';

const images = {
    'highRopes': highRopes,
    'canoes': canoes,
    'expedition': expedition,
    'obstacle': obstacle,
    'beavers': beavers,
    'cubs': cubs,
    'scouts': scouts,
    'kayaking': kayaking,
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
    image: 'highRopes' | 'canoes' | 'expedition' | 'obstacle' | 'beavers' | 'cubs' | 'scouts' | 'kayaking';
    small?: boolean;
    imageHeight?: string;
}

const Hero: FC<IProps> = ({image, small, imageHeight}: IProps) => {
    return (
        <HeroBanner imageUrl={images[image]} small={small} imageHeight={imageHeight} />
    );
}

export default Hero;