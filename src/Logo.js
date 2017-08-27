import React from 'react'

const d =
  'M16,32 C7.163444,32 0,24.836556 0,16 C0,7.163444 7.163444,0 16,0 C24.836556,0 32,7.163444 32,16 C32,24.836556 24.836556,32 16,32 Z M18.4,10 L18,8 L9,8 L9,25 L11,25 L11,18 L16.6,18 L17,20 L24,20 L24,10 L18.4,10 Z M16.2,15.3 L15.5,16 L12.5,13 L15.5,10 L16.2,10.7 L13.9,13 L16.2,15.3 Z M18.3,17.3 L20.6,15 L18.3,12.7 L19,12 L22,15 L19,18 L18.3,17.3 Z'

const Logo = ({ size = 64, fill = 'currentcolor', className }) =>
  <svg className={className} viewBox="0 0 32 32" width={size} height={size}>
    <path fill={fill} d={d} />
  </svg>

export default Logo
