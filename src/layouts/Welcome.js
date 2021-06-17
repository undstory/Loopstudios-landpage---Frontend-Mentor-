import React from 'react'
import styled from 'styled-components'
import backgroundPicture from 'images/desktop/image-hero.jpg'
import backgroundPictureMobile from 'images/mobile/image-hero.jpg'
import Header from 'components/Header/Header'


const MainWrapper = styled.section`
    width: 100%;
    height: 100vh;
    background-image: url(${(props) => props.background});
    /* background-position: center center; */
    background-size: cover;
    background-repeat: no-repeat;

   @media (max-width: 800px) {
    background-image: url(${(props) => props.backgroundMobile});
   }
`;


const Welcome = () => (
    <MainWrapper background={backgroundPicture} backgroundMobile={backgroundPictureMobile}>
        <Header />

    </MainWrapper>
)

export default Welcome