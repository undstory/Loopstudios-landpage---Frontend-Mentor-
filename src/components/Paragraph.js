import styled from "styled-components";

const Paragraph = styled.p`
    font-size: 2rem;
    color: ${({ theme }) => theme.darkGray};
    font-family: ${({ theme }) => theme.headerFont};
    line-height: 1.8;
`;

export default Paragraph;