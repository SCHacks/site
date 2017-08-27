import React from 'react'
import cxs from 'cxs/component'
import media from './media'

const Banner = cxs('header')(props => ({
  paddingTop: props.theme.space[5],
  [media[1]]: {
    paddingTop: props.theme.space[5] * 1.5
  }
}))

export default Banner
