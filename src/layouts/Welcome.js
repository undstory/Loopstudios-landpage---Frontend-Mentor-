import React from 'react'
import styled from 'styled-components'
import backgroundPicture from 'images/desktop/image-hero.jpg'
import Navbar from 'components/Navbar/Navbar'

const MainWrapper = styled.section`
    border: 1px solid red;
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.background});
    /* background-position: center center; */
    background-size: cover;
    background-repeat: no-repeat;
   
`;


const Welcome = () => (
    <MainWrapper background={backgroundPicture}>
        <Navbar />

    </MainWrapper>
)

export default Welcome