import React, { Fragment } from 'react'

import Header from 'components/Header'
import Workshops from 'components/Workshops'
import GetStarted from 'components/GetStarted'
import Submit from 'components/Submit'
import Footer from 'components/Footer'

export default () => (
  <Fragment>
    <Header />
    <Workshops />
    <GetStarted />
    <Submit />
    <Footer />
  </Fragment>
)
