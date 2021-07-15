import styled from 'styled-components'

const GridItem = styled.div`
    background-image: url(${({ img }) => img});
    background-repeat: no-repeat;
    /* background-position: center center; */
    background-size: cover;
    height: 450px;
    width: 256px;
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
`;

export default GridItem