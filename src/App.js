import React from 'react'
import GlobalStyle from 'themes/GlobalStyle'
import { theme } from 'themes/theme'
import { ThemeProvider } from 'styled-components'
import Welcome from 'layouts/Welcome'
import Intro from 'layouts/Intro'
import Creations from 'layouts/Creations'
import Footer from 'layouts/Footer'

const App = () => (
  <>
  <GlobalStyle />
  <ThemeProvider theme={theme}>
    <>
      <Welcome />
      <Intro />
      <Creations />
      <Footer />
    </>
  </ThemeProvider>

  </>
)

export default App
