import React from 'react'
import GlobalStyle from 'themes/GlobalStyle'
import { theme } from 'themes/theme'
import { ThemeProvider } from 'styled-components'
import Welcome from 'layouts/Welcome'
import Intro from 'layouts/Intro'

const App = () => (
  <>
  <GlobalStyle />
  <ThemeProvider theme={theme}>
    <>
      <Welcome />
      <Intro />
    </>
  </ThemeProvider>

  </>
)

export default App
