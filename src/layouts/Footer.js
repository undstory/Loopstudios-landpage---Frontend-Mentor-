import React from 'react'
import styled from 'styled-components'
import Logo from 'components/Header/Logo'
import Menu from 'components/Header/Menu'
import SocialBtns from 'components/SocialBtns'
import MenuItem from 'components/Header/MenuItem'

const StyledWrapper = styled.section`
    width: 100%;
    background-color: ${({ theme }) => theme.black};
    color:  ${({ theme }) => theme.white};

   
`;

const ContentWrapper = styled.div`
    max-width: 1440px;
    margin: 0 auto;  
    padding: 5rem 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1440px) {
        padding-left: 4rem;
        padding-right: 4rem;
    }

    @media (max-width: 724px) {
        justify-content: center;
    }
`;

const StyledLeftSide = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    @media (max-width: 724px) {
        display: none;
    }
`;

const StyledRightSide = styled.div`
     display: flex;
    flex-direction: column;
    justify-content: flex-end;

    @media (max-width: 724px) {
        display: none;
    }
`;

const StyledMiniFooter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  

    @media (min-width: 724px) {
        display: none;
    }
`;

const StyledText = styled.p`
    color: ${({ theme }) => theme.darkGray};
    font-family: ${({ theme }) => theme.headerFont};
    font-size: 1.2rem;
`;

const StyledMiniList = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  
`;

const StyledMenuItem = styled(MenuItem)`
   margin-left: 0;
   padding: 2rem;

   &:last-child {
        margin-bottom: 3rem;
    }
`;

const StyledMiniSocialBtns = styled(SocialBtns)`
    justify-content: center;
    align-items: center;
  
`;

const Footer = () => (
    <StyledWrapper>
        <ContentWrapper>

            <StyledLeftSide>
                <Logo footer />
                <Menu footer />
            </StyledLeftSide>

            <StyledRightSide>
                <SocialBtns />
                <StyledText>2021 Loopstudios. All rights reserved</StyledText>
            </StyledRightSide>

            <StyledMiniFooter>
                <Logo />
                <StyledMiniList>
                    <StyledMenuItem>About</StyledMenuItem>
                    <StyledMenuItem>Careers</StyledMenuItem>
                    <StyledMenuItem>Events</StyledMenuItem>
                    <StyledMenuItem>Products</StyledMenuItem>
                    <StyledMenuItem>Support</StyledMenuItem>
                </StyledMiniList>    
                <StyledMiniSocialBtns />
                <StyledText>2021 Loopstudios. All rights reserved</StyledText>
            </StyledMiniFooter>        
        </ContentWrapper>

    </StyledWrapper>
)

export default Footer