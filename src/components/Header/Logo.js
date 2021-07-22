import React from 'react'
import styled from 'styled-components'
import logo from 'images/logo.svg'

const StyledFooterImg = styled.img`
    width: 200px;
    margin-bottom: 2rem;
`;



const Logo = ({ footer }) => (
    <>
     { footer ? (
         <StyledFooterImg src={logo} alt="loopstudio's logo" />
        ) : (
             <img src={logo} alt="loopstudio's logo" />
             )
            }
    </>
)

export default Logo