import React from 'react'
import Box from './Box'
import cxs from 'cxs/component'

const Container = cxs(Box)(props => ({
  maxWidth: 1024,
  paddingLeft: props.theme.space[4],
  paddingRight: props.theme.space[4],
  marginLeft: 'auto',
  marginRight: 'auto'
}))

export default Container
