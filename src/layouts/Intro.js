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
`;

const ContentWrapper = styled.div`
    width: 1440px;
    margin: 0 auto;  
    position: relative;
`;

const Img = styled.img`
    width: 70%;
`;

const StyledBox = styled.div`
    padding: 10rem 0 0 10rem;
    background-color: ${({ theme }) => theme.white};
    position: absolute;
    bottom: 0; 
    right: 0;
    z-index: 3000;
    width: 50%;
`;

const TitleMini = styled(Title)`
    font-size: 2.8vw;
    color: ${({ theme }) => theme.black};
    margin-bottom: 3rem;
`;


const Intro = () => (
    <StyledWrapper>
        <ContentWrapper>
            <Img src={img} alt="man with interactive vr" />
            <StyledBox>
                <TitleMini>The leader in interactive vr</TitleMini>
                <Paragraph>Founded in 2011, Loopstudios has beem producing world-class virtual 
                    reality projects for some of the best companies around the globe. 
                    Our award-winning creations have transformed businesses through digital 
                    experiences that bind to their brand.</Paragraph>
            </StyledBox>
        </ContentWrapper>
 
    </StyledWrapper>
)

export default Intro