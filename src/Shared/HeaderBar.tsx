import React, { useState } from 'react';
import styled from 'styled-components';
import { colours, SharedSettings } from '../Shared/SharedStyles';
import { useHistory } from 'react-router-dom';

interface IProps {
    stickyHeader?: boolean;
}

interface menuProps {
    menuOpen? : boolean;
}

const HeaderNav = styled.div`
    position: absolute;
    top: ${(p: IProps) => p.stickyHeader ? "150px" : "100vh"};
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${colours.secondary};
    z-index: 1;
    border-bottom: 3px solid ${colours.dark};
    border-top: 3px solid ${colours.dark};

    @media(max-width: ${SharedSettings.mobile}) {
        top: 0;
        background: transparent;
        border-color: transparent;
    }
`;

const HeaderNavContainer = styled.div` 
    width: 100%;
    max-width: ${SharedSettings.maxWidth};
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${colours.dark};
    z-index: 1;
    transition: height 0.3s ease;

    & > img {
        height: 68px;
        margin-left: 50px;

        @media(max-width: 350px) {
            margin-left: 10px;
        }
    }

    @media(min-width: ${SharedSettings.maxWidth}) {
        left: calc(50% - ${SharedSettings.maxWidth});    
    }
`;

const HeaderButton = styled.button`
    height: 100%;
    background: transparent;
    color: ${colours.dark};
    cursor: pointer;
    padding: 11px 14px;
    border: none;
    border-bottom: 2px solid transparent;
    border-top: 2px solid transparent;
    font-size: 1.2em;
    font-weight: 600;
    text-decoration: none;
    
    &:hover {
      background: #E7CC92;
    }

    &:focus {  
      outline: 0;
      background: #E7CC92;
    }
 
    &:last-child {
        margin-right: 20px;
    } 
`;

const NavItemsRightContainer = styled.div`
    display: flex;
    justify-content: center;
    overflow: hidden;
    transition: all 0.3s ease;
    margin: auto;

    @media( max-width: 1100px ) {
        flex-direction: column;
        align-self: flex-start;
        height: ${(p:menuProps) => p.menuOpen ? "80vh" : "0"};

        position: absolute;
        top: 100px;
        left: 20px;
        right: 20px;
        background: ${colours.secondary};


        ${HeaderButton} {
            color: ${colours.dark};
            text-align: center;
            font-size: 1.4em;
            padding: 0 14px;

            &:last-child {
                margin-right: 0;
            }
        }
    }

    @media( max-width: 350px) {
        left: 5px;
        right: 5px;
    }
`;

const Burger = styled.div`
    height: 4px;
    width: 40px;
    border-radius: 2px;
    background: ${(p: menuProps) => p.menuOpen ? colours.dark : colours.dark};
    transition: all 0.5s ease;
    transition-property: height, width, transform;
    position: absolute;
    top: calc(50% - 12.5px);
    left: calc(50% - 20px);
    transform: ${(p: menuProps) => p.menuOpen ? "translateY(10px) rotate(45deg)" : ""};

    &:before, &:after {
        content: '';
        position: absolute;
        height: 4px;
        width: 40px;
        border-radius: 2px;
        background: ${(p: menuProps) => p.menuOpen ? colours.dark : "inherit"};
        transition: transform 0.5s ease, opacity 0.5s ease;
    }

    &:before {
        margin-top: 10px;
        transform: ${(p: menuProps) => p.menuOpen ? "translateY(-10px) rotate(180deg)" : ""};
        opacity: ${(p: menuProps) => p.menuOpen ? "0" : "1"};
    }

    &:after {
        margin-top: 20px;
        transform: ${(p: menuProps) => p.menuOpen ? "translateY(-20px) rotate(-90deg)" : ""};
    }
`;


const BurgerContainer = styled.div`
    height: 100px;
    width: 100px;
    background: ${(p: menuProps) => p.menuOpen ? colours.secondary : "transparent"};
    position: relative;
    align-self: flex-end;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 20px;
    display: none;

    @media( max-width: 1100px ) {
        display: initial;

    }
    @media( max-width: 350px ) {
        right: 5px;
    }
`;

const HeaderBar: React.FC<IProps> = ({ stickyHeader }: IProps) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const history = useHistory();

    const handleNav = (link: string): void => {
        console.log("clicked nav", link);
        setMenuOpen(false);
        history.push(`${process.env.PUBLIC_URL}${link}`);
    }

    return (
        <HeaderNav stickyHeader={stickyHeader}>
            <HeaderNavContainer>
                <BurgerContainer menuOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><Burger menuOpen={menuOpen} /></BurgerContainer>
                <NavItemsRightContainer menuOpen={menuOpen}>
                    <HeaderButton onClick={() => handleNav("")}>Home</HeaderButton>
                    <HeaderButton onClick={() => handleNav("/about")}>About Us</HeaderButton>
                    <HeaderButton onClick={() => handleNav("/beavers")}>Home Moves</HeaderButton>
                    <HeaderButton onClick={() => handleNav("/beavers")}>Office Removals</HeaderButton>
                    <HeaderButton onClick={() => handleNav("/beavers")}>Packing Service</HeaderButton>
                    <HeaderButton onClick={() => handleNav("/beavers")}>Packaging Materials</HeaderButton>
                    <HeaderButton onClick={() => handleNav("/beavers")}>Contact Us</HeaderButton>
                </NavItemsRightContainer>
            </HeaderNavContainer>
        </HeaderNav>
    );
}

export default HeaderBar;