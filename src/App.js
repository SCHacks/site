import React from 'react'
import { ThemeProvider, Container, colors } from '@hackclub/design-system'
import data from '../data.json'

import Header from './Header'
import Workshops from './Workshops'
import GetStarted from './GetStarted'
import Submit from './Submit'
import Footer from './Footer'

const App = props => (
  <ThemeProvider>
    <title>{data.name}</title>
    <meta charSet="UTF-8" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={data.card} />
    <meta name="og:image" content={data.card} />
    <meta name="og:title" content={data.name} />
    <meta name="twitter:title" content={data.name} />
    <meta name="og:description" content={data.description} />
    <meta name="twitter:description" content={data.description} />
    <meta name="description" content={data.description} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content={colors.primary} />
    <Container px={3}>
      <Header />
      <Workshops />
      <GetStarted />
      <Submit />
      <Footer />
    </Container>
  </ThemeProvider>
)

export default App
