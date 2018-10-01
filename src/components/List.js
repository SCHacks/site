import styled from 'styled-components'
import { Box } from '@hackclub/design-system'
import theme from 'theme/config'

const size = 24

const List = styled(Box.withComponent('ol'))`
  counter-reset: li;
  list-style: none;
  text-align: left;
  padding: 0;
  margin: 0;

  li {
    position: relative;
    font-size: ${theme.fontSizes[3]}px;
    padding-left: ${theme.space[4]}px;
    margin-top: ${theme.space[3]}px;
    &:before {
      content: counter(li);
      counter-increment: li;
      position: absolute;
      left: 0;
      top: ${theme.space[1]}px;
      height: ${size}px;
      width: ${size}px;
      line-height: ${size}px;
      font-size: ${theme.fontSizes[2]}px;
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};
      border-radius: ${size}px;
      font-weight: 800;
      text-align: center;
    }
    ${theme.mediaQueries.md} {
      padding-left: ${theme.space[4] * 1.25}px;
    }
  }
`

export default List
