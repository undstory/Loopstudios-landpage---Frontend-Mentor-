import React from 'react'
import styled from 'styled-components'
import Title from 'components/Title'

const MainTitleWrapper = styled.div`
    padding: 5rem 3rem;
    width: 55%;
    border: 2px solid ${({ theme }) => theme.white};
    margin-top: 10rem;

    @media (max-width: 1500px) {
        margin-left: 3rem;
    }

    @media (max-width: 1000px) {
        margin: 10rem auto;
        width: 80%;
        padding: 2rem;
    }

`;

const MainTitle = () => (
    <MainTitleWrapper>
        <Title>Immersive experiences that deliver</Title>
    </MainTitleWrapper>
)

export default MainTitle