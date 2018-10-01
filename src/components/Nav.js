import React from 'react'
import styled from 'styled-components'
import { Box, Container, Link as A } from '@hackclub/design-system'
import Flag from 'components/Flag'

const Base = styled(Box).attrs({ py: 3, w: 1 })`
  position: absolute;
  top: 0;
  z-index: 4;
`

const Inner = styled(Container).attrs({
  as: 'nav',
  maxWidth: 48,
  px: 3,
  role: 'navigation'
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Item = styled(A).attrs({
  bold: true,
  my: 1,
  px: [2, 3]
})`color: inherit;`

const Nav = ({ color = 'white', ...props }) => (
  <Base role="banner" {...props}>
    <Inner color={color} py={[1, 0]}>
      <Flag />
      <Box ml={3}>
        <Item children="HQ" href="https://hackclub.com" />
      </Box>
    </Inner>
  </Base>
)

export default Nav
