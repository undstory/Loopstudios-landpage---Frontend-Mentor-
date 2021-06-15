import React from 'react'
import styled from 'styled-components'
import Logo from 'components/Navbar/Logo';
import closeBtn from 'images/icon-close.svg';

const MobileMenuWrapper = styled.div`
    background-color: ${({ theme }) => theme.black};
    color: ${({ theme }) => theme.white};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
`;
const MenuWrapper = styled.ul`
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.white};
`;

const CloseButton = styled.button`
    outline: none;
    border: none;
    background-color: transparent;
`;

const MenuItem = styled.li`
    text-transform: uppercase;
`;

const MenuMobile = () => (
    <MobileMenuWrapper>
        <div>
            <Logo />
            <CloseButton><img src={closeBtn} alt="close button" /></CloseButton>
        </div>
        <MenuWrapper>
            <MenuItem>About</MenuItem>
            <MenuItem>Careers</MenuItem>
            <MenuItem>Events</MenuItem>
            <MenuItem>Products</MenuItem>
            <MenuItem>Support</MenuItem>
        </MenuWrapper>
    </MobileMenuWrapper>
   
)
export default MenuMobile