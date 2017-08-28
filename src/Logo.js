import React from 'react'
import data from '../data'

const Logo = ({ size = 64, fill = 'currentcolor', className }) =>
  <svg className={className} viewBox="0 0 32 32" width={size} height={size}>
    <path fill={fill} d={data.logo} />
  </svg>

export default Logo
