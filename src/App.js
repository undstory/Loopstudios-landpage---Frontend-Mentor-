import React from 'react'
import GlobalStyle from 'themes/GlobalStyle'
import { theme } from 'themes/theme'
import { ThemeProvider } from 'styled-components'

import Welcome from 'layouts/Welcome'

const App = () => (
  <>
  <GlobalStyle />
  <ThemeProvider theme={theme}>
    <>
      <Welcome />
      Hello
    </>
  </ThemeProvider>

  </>
)

export default App
