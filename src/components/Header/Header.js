import React, { useState } from 'react'
import Logo from 'components/Header/Logo'
import Menu from 'components/Header/Menu'
import MenuMobile from 'components/Header/MenuMobile'
import styled from 'styled-components'
import hamburger from 'images/icon-hamburger.svg'
import MainTitle from 'components/Header/MainTitle'

const MainHeaderWrapper = styled.section`
      max-width: 1440px;
        margin: 0 auto;
`;

const NavbarWrapper = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  
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

const Header = () => {
    const [menuState, toggleVisibility] = useState(false);

    return (
        <MainHeaderWrapper>
            <NavbarWrapper>
            <Logo />
            <HamburgerBtn onClick={() => toggleVisibility(!menuState)}><img src={hamburger} alt="hamburger menu" /></HamburgerBtn>
            { menuState === false ? <Menu /> : <MenuMobile giveMeState={toggleVisibility} />}
           
        </NavbarWrapper>
        <MainTitle />
        </MainHeaderWrapper>

    )
    }

export default Header