
import styled, { css } from "styled-components";



const Title = styled.h2`
    font-size: 5vw;
    text-transform: uppercase;
    font-family: ${({ theme }) => theme.textFont};
    color: ${({ theme }) => theme.white};
    font-weight: 300;

    ${({ mini }) => mini && css`
    font-size: 5rem;
    color: ${({ theme }) => theme.black};
    `}

    ${({ miniMini }) => miniMini && css`
    font-size: 3rem;
    color: ${({ theme }) => theme.white};
    `}

    @media (max-width: 1000px) {
        font-size: 8vw;
    }

`;



export default Title;

