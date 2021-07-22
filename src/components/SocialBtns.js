import React from 'react'
import styled from 'styled-components'
import facebook from 'images/icon-facebook.svg'
import twitter from 'images/icon-twitter.svg'
import pinterest from 'images/icon-pinterest.svg'
import instagram from 'images/icon-instagram.svg'

const StyledList = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-bottom: 2rem;
`;

const StyledItem = styled.li`
    margin-left: 2rem;
    cursor: pointer;
    position: relative;

    &:hover {
        &::after {
        content: "";
        border-bottom: 2px solid white;
        position: absolute;
        top: 2rem;
        left: 0;
        width: 2.5rem;
        height: 1rem;
    }
    }
`;

const SocialBtns = () => (
    <StyledList>
        <StyledItem><a href><img src={facebook} alt="facebook's icon" /></a></StyledItem>
        <StyledItem><a href><img src={twitter} alt="twitter's icon" /></a></StyledItem>
        <StyledItem><a href><img src={pinterest} alt="pinterest's icon" /></a></StyledItem>
        <StyledItem><a href><img src={instagram} alt="instagram's icon" /></a></StyledItem>
    </StyledList>
)

export default SocialBtns