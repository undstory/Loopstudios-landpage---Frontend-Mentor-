import styled from 'styled-components'

const MenuItem = styled.li`
    font-family: ${({ theme }) => theme.headerFont};
    color: ${({ theme }) => theme.white};
    margin-left: 3rem;
    font-size: 1.6rem;
    cursor: pointer;
    position: relative;

    &:first-child {
        margin-left: 0;
    } 
    
    &:hover {
        &::after {
        content: "";
        border-bottom: 2px solid white;
        position: absolute;
        top: 2rem;
        left: 30%;
        width: 2rem;
        height: 1rem;
    }
    }


`;

export default MenuItem;