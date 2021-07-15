
import styled from 'styled-components'

const Button = styled.button`
    background-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.black};
    border: 1px solid ${({ theme }) => theme.black};
    outline: none;
    text-transform: uppercase;
    font-size: 1.2rem;
    font-family:  ${({ theme }) => theme.headerFont};
    padding: .8rem 4rem;
    cursor: pointer;
    letter-spacing: 2px;;

    :hover {
        background-color: ${({ theme }) => theme.black};
        color: ${({ theme }) => theme.white};
    }
`;

export default Button;