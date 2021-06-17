import React from 'react'
import styled from 'styled-components'
import Logo from 'components/Header/Logo';
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

const CloseWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 3rem;
`;
const MenuWrapper = styled.ul`
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.white};
    padding: 5rem 3rem;
`;

const CloseButton = styled.button`
    outline: none;
    border: none;
    background-color: transparent;
`;

const MenuItem = styled.li`
    text-transform: uppercase;
    font-family: ${({ theme }) => theme.textFont};
    font-size: 3rem;
    line-height: 1.8;
`;

const MenuMobile = ({giveMeState}) => (
    <MobileMenuWrapper>
        <CloseWrapper>
            <Logo />
            <CloseButton onClick={() => giveMeState(false)}><img src={closeBtn} alt="close button" /></CloseButton>
        </CloseWrapper>
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