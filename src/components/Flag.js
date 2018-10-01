import styled from 'styled-components'
import theme from 'theme/config'
import Link from 'gatsby-link'

const Flag = styled(Link).attrs({
  to: '/',
  'aria-label': 'Homepage'
})`
  background: url(/flag.svg) no-repeat;
  background-size: auto 100%;
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  ${theme.mediaQueries.md} {
    width: 64px;
    height: 64px;
  }
`

export default Flag
