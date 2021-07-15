import React from 'react'
import styled from 'styled-components'
import img from 'images/desktop/image-interactive.jpg'
import Title from 'components/Title';
import Paragraph from 'components/Paragraph';

const StyledWrapper = styled.section`
    width: 100%;
    height: 100vh;
    background-color: ${({ theme }) => theme.white};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    @media (max-width: 997px) {
    padding-top: 10rem;
    }
`;

const ContentWrapper = styled.div`
    width: 1440px;
    margin: 0 auto;  
    position: relative;

    @media (max-width: 997px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    justify-content: center;
    }
`;

const Img = styled.img`
    width: 70%;

    @media (max-width: 997px) {
   
        width: 90%;
    }
`;

const StyledBox = styled.div`
    padding: 10rem 10rem 0 10rem;
    background-color: ${({ theme }) => theme.white};
    position: absolute;
    bottom: 0; 
    right: 0;
    z-index: 3000;
    width: 50%;

    @media (max-width: 1220px) {
        padding: 5rem 5rem 0 5rem;
    }

    @media (max-width: 997px) {
        position: static;
        width: 80%;
    }

    @media (max-width: 427px) {
        position: static;
        width: 90%;
    }
`;

const TitleMini = styled(Title)`
    font-size: 5rem;
    color: ${({ theme }) => theme.black};
    margin-bottom: 3rem;

    @media (max-width: 997px) {
        text-align: center;
        font-size: 3rem;
    }

    @media (max-width: 427px) {
       font-size: 2rem;
    }
`;

const StyledParagraph = styled(Paragraph)`
    
    @media (max-width: 997px) {
        text-align: center;
        font-size: 1.5rem;
    }
  
    @media (max-width:425px) {
     
        font-size: 1.2rem;
    }
`;


const Intro = () => (
    <StyledWrapper>
        <ContentWrapper>
            <Img src={img} alt="man with interactive vr" />
            <StyledBox>
                <TitleMini>The leader in interactive vr</TitleMini>
                <StyledParagraph>Founded in 2011, Loopstudios has beem producing world-class virtual 
                    reality projects for some of the best companies around the globe. 
                    Our award-winning creations have transformed businesses through digital 
                    experiences that bind to their brand.</StyledParagraph>
            </StyledBox>
        </ContentWrapper>
 
    </StyledWrapper>
)

export default Intro