import React from 'react'
import ThemeProvider from 'cxs/ThemeProvider'
import theme from './theme'

import Container from './Container'
import Header from './Header'
import Workshops from './Workshops'
import GetStarted from './GetStarted'
import Submit from './Submit'
import Footer from './Footer'

const App = props =>
  <ThemeProvider theme={theme}>
    <Container>
      <Header />
      <Workshops />
      <GetStarted />
      <Submit />
      <Footer />
    </Container>
  </ThemeProvider>

export default App
