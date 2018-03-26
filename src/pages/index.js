import React from 'react'
import { Container } from '@hackclub/design-system'

import Header from 'components/Header'
import Workshops from 'components/Workshops'
import GetStarted from 'components/GetStarted'
import Submit from 'components/Submit'
import Footer from 'components/Footer'

export default () => (
  <div>
    <Header />
    <Workshops />
    <GetStarted />
    <Submit />
    <Footer />
  </div>
)
