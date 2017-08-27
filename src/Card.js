import React from 'react'
import Flex from './Flex'
import Logo from './Logo'
import colors from './colors'

const Card = () =>
  <svg viewBox="0 0 1024 768" width={1024} height={768}>
    <rect width={1024} height={768} fill={colors.red} />
    <g transform="translate(256 128)">
      <Logo size={512} fill={colors.white} />
    </g>
    <style dangerouslySetInnerHTML={{ __html: css }} />
  </svg>

const css = `
body { margin: 0; }
`

export default Card
