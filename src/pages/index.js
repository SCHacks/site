import React from 'react'
import styled from 'styled-components'
import { Container, Heading } from '@hackclub/design-system'
import theme from 'theme/config'

import Layout from 'components/Layout'
import Header from 'components/Header'
import Leadership from 'components/Leadership'
import Workshops from 'components/Workshops'
import GetStarted from 'components/GetStarted'
import Submit from 'components/Submit'
import Footer from 'components/Footer'

const Body = styled(Container).attrs({ pt: 4, px: 3, pb: 5, width: 1 })`
  display: grid;
  grid-gap: ${theme.space[3]}px;
  grid-template-areas: 'start' 'workshops' 'submit';

  ${theme.mediaQueries.md} {
    grid-gap: ${theme.space[5]}px;
    grid-template-areas: 'workshops start'
                         'workshops submit';
  }

  > div {
    &:nth-child(1) {
      grid-area: workshops;
    }
    &:nth-child(2) {
      grid-area: start;
    }
    &:nth-child(3) {
      grid-area: submit;
    }
  }
`

export default () => (
  <Layout>
    <Header />
    <Heading.h2 color="white" align="center" fontSize={[5, 6]} mb={2} px={3}>
      Resources
    </Heading.h2>
    <Body>
      <Workshops />
      <GetStarted />
      <Submit />
    </Body>
    <Leadership />
    <Footer />
  </Layout>
)
