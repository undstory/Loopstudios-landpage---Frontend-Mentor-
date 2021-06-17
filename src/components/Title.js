
import styled from "styled-components";



const Title = styled.h2`
    font-size: 5vw;
    text-transform: uppercase;
    font-family: ${({ theme }) => theme.textFont};
    color: ${({ theme }) => theme.white};
    font-weight: 300;

    @media (max-width: 1000px) {
        font-size: 8vw;
    }

`;



export default Title;

