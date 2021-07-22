import styled from 'styled-components'

const GridItem = styled.div`
    background-image: url(${({ img }) => img});
    background-repeat: no-repeat;
    background-size: cover;
    height: 450px;
    width: 256px;
    margin: 10px 0;
    position: relative;
    :hover {
        ::after {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%; 
            background-color: white;   
            opacity: .7;  
        }
    }

    @media (max-width: 514px) {
    
    width:100vw;
    max-height: 240px;
    margin: 2rem 0;
    background-position: center center;

    }
`;

export default GridItem