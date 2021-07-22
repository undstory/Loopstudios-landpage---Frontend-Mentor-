import React from 'react'
import styled from 'styled-components'
import MenuItem from './MenuItem';

const MenuWrapper = styled.ul`
    display: flex;
    flex-direction: row;

    @media (max-width: 700px) {
        display: none;
    }
`;



const Menu =() => (
    <MenuWrapper> 
        <MenuItem>About</MenuItem>
        <MenuItem>Careers</MenuItem>
        <MenuItem>Events</MenuItem>
        <MenuItem>Products</MenuItem>
        <MenuItem>Support</MenuItem>
    </MenuWrapper>
)

export default Menu