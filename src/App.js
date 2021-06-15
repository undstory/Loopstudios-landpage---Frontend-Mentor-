import React from 'react'
import GlobalStyle from 'themes/GlobalStyle'
import styled, { ThemeProvider } from 'styled-components'
import { themes } from 'themes/Themes'

const HeaderWrapper = styled.h2`
  font-family: ${({ theme}) => theme.textFont}
`;

const App = () => (
  <>
  <GlobalStyle />
  <ThemeProvider theme={themes}>
    <>
    <HeaderWrapper>Happy hacking!</HeaderWrapper>
    </>
  </ThemeProvider>

  </>
)

export default App
