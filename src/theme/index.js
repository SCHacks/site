import React from 'react'
import { injectGlobal, ThemeProvider as Root } from 'styled-components'
import theme from './config'

injectGlobal`
  body {
    font-family: ${theme.font};
    background-color: ${theme.colors.black};
    color: ${theme.colors.white};
    line-height: 1.6;
  }
  * {
    box-sizing: border-box;
  }
  h1,
  h2 {
    font-weight: 900;
  }
  ul, ol {
    margin: 0;
    padding: 0;
  }
`

const ThemeProvider = props => (
  <Root theme={theme} children={<div>{props.children}</div>} />
)

export default ThemeProvider
