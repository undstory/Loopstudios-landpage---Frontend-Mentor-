import React from 'react'
import styled from 'styled-components'
import Title from 'components/Title'
import Button from 'components/Button'
import GridItem from 'components/GridItem'
import deepEarth from 'images/desktop/image-deep-earth.jpg'
import nightArcade from 'images/desktop/image-night-arcade.jpg'
import soccerTeam from 'images/desktop/image-soccer-team.jpg'
import theGrid from 'images/desktop/image-grid.jpg'
import fromUp from 'images/desktop/image-from-above.jpg'
import pocketBorealis from 'images/desktop/image-pocket-borealis.jpg'
import theCuriosity from 'images/desktop/image-curiosity.jpg'
import makeIt from 'images/desktop/image-fisheye.jpg'
import deepEarthMini from 'images/mobile/image-deep-earth.jpg'
import nightArcadeMini  from 'images/mobile/image-night-arcade.jpg'
import soccerTeamMini  from 'images/mobile/image-soccer-team.jpg'
import theGridMini  from 'images/mobile/image-grid.jpg'
import fromUpMini  from 'images/mobile/image-from-above.jpg'
import pocketBorealisMini  from 'images/mobile/image-pocket-borealis.jpg'
import theCuriosityMini  from 'images/mobile/image-curiosity.jpg'
import makeItMini  from 'images/mobile/image-fisheye.jpg'

const StyledWrapper = styled.section`
    width: 100%;
    background-color: ${({ theme }) => theme.white};
  
`;

const ContentWrapper = styled.div`
    max-width: 1440px;
    margin: 0 auto;  
    padding-top: 10rem;
`;

const StyledHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5rem;

    @media (max-width: 1440px) {
        padding: 0 4rem;
    }

    @media (max-width: 515px){
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`;

const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    justify-content: space-between;
    grid-gap: 2rem;
    margin: 6rem 0;
    margin: 8rem auto 10rem;
    justify-items: center;
    cursor: pointer;

    @media (max-width: 1440px) {
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
    }
    @media (max-width: 1000px) {
        grid-gap: 0;
    }

    @media (max-width: 1000px) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(4, 1fr);
    }

    @media (max-width: 514px) {
        display: none;
    }

`;

const StyledGridMini = styled.div`
    display: none ;
    
    @media (max-width: 514px) {
    display: flex;
    flex-direction: column; 
    justify-content: center;
   
    }
   
`;
const StyledGridTitle = styled(Title)`
        position: absolute;
        top: 350px;
        left: 3rem;
        width: 70%;   

        @media (max-width: 1000px) {
        font-size: 3rem;
    }

    @media (max-width: 514px) {
        top: 75%;
        left: 3rem;
        font-size: 2rem;
    }
    `;

const Creations = () => (

  
            <StyledWrapper>
            <ContentWrapper>
            <StyledHeader>
                <Title mini >Our Creations</Title>
                <StyledGridMini>
                <GridItem img={deepEarthMini}><StyledGridTitle miniMini>Deep earth</StyledGridTitle></GridItem>
                <GridItem img={nightArcadeMini}><StyledGridTitle miniMini>Night arcade</StyledGridTitle></GridItem>
                <GridItem img={soccerTeamMini}><StyledGridTitle miniMini>Soccer team vr</StyledGridTitle></GridItem>
                <GridItem img={theGridMini}><StyledGridTitle miniMini>The grid</StyledGridTitle></GridItem>
                <GridItem img={fromUpMini}><StyledGridTitle miniMini>From up above vr</StyledGridTitle></GridItem>
                <GridItem img={pocketBorealisMini}><StyledGridTitle miniMini>pocket borealis</StyledGridTitle></GridItem>
                <GridItem img={theCuriosityMini}><StyledGridTitle miniMini>the curiosity</StyledGridTitle></GridItem>
                <GridItem img={makeItMini}><StyledGridTitle miniMini>make it fisheye</StyledGridTitle></GridItem>
                </StyledGridMini>
                <Button>see all</Button>
            </StyledHeader>
            <StyledGrid>
                <GridItem img={deepEarth}><StyledGridTitle miniMini>Deep earth</StyledGridTitle></GridItem>
                <GridItem img={nightArcade}><StyledGridTitle miniMini>Night arcade</StyledGridTitle></GridItem>
                <GridItem img={soccerTeam}><StyledGridTitle miniMini>Soccer team vr</StyledGridTitle></GridItem>
                <GridItem img={theGrid}><StyledGridTitle miniMini>The grid</StyledGridTitle></GridItem>
                <GridItem img={fromUp}><StyledGridTitle miniMini>From up above vr</StyledGridTitle></GridItem>
                <GridItem img={pocketBorealis}><StyledGridTitle miniMini>pocket borealis</StyledGridTitle></GridItem>
                <GridItem img={theCuriosity}><StyledGridTitle miniMini>the curiosity</StyledGridTitle></GridItem>
                <GridItem img={makeIt}><StyledGridTitle miniMini>make it fisheye</StyledGridTitle></GridItem>
            </StyledGrid>
            </ContentWrapper>
        </StyledWrapper>
    
    
        )
    
   



export default Creations