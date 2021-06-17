import React from 'react'
import styled from 'styled-components'

const MenuWrapper = styled.ul`
    display: flex;
    flex-direction: row;

    @media (max-width: 700px) {
        display: none;
    }
`;

const MenuItem = styled.li`
    font-family: ${({ theme }) => theme.headerFont};
    color: ${({ theme }) => theme.white};
    margin-left: 3rem;
    font-size: 1.6rem;
    cursor: pointer;
    position: relative;

    &:hover {
        &::after {
        content: "";
        border-bottom: 2px solid white;
        position: absolute;
        top: 2rem;
        left: 30%;
        width: 2rem;
        height: 1rem;
    }
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