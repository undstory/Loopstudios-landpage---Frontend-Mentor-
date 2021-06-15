import React, { useState } from 'react'
import Logo from 'components/Navbar/Logo'
import Menu from 'components/Navbar/Menu'
import MenuMobile from 'components/Navbar/MenuMobile'
import styled from 'styled-components'
import hamburger from 'images/icon-hamburger.svg'


const NavbarWrapper = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 1440px;
    margin: 0 auto;
    padding: 6rem 0;
    position: relative;

    @media (max-width: 1500px) {
        padding-left: 3rem;
        padding-right: 3rem;
    }
`;

const HamburgerBtn = styled.button`
    display: none;

    @media (max-width: 700px) {
        display: inline-block;
        border: none; 
        background-color: transparent;
        outline: none;
        cursor: pointer;
    }
`;

const Navbar = () => {
    const [menuState, toggleVisibility] = useState(false);

    return (
        <NavbarWrapper>
            <Logo />
            <HamburgerBtn onClick={() => toggleVisibility(!menuState)}><img src={hamburger} alt="hamburger menu" /></HamburgerBtn>
            { menuState === false ? <Menu /> : <MenuMobile />}
        </NavbarWrapper>
    )
    }

export default Navbar