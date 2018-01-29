import React from 'react'
import { Box } from '@hackclub/design-system'
import data from '../data.json'

const Svg = Box.withComponent('svg')

const Logo = ({ size = 64, color = 'primary', ...props }) => (
  <Svg viewBox="0 0 32 32" width={size} height={size} color={color} {...props}>
    <path fill="currentcolor" d={data.logo} />
  </Svg>
)

export default Logo
