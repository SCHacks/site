import React from 'react'
import styled from 'styled-components'
import { Text, Flex } from '@hackclub/design-system'
import theme from 'theme/config'

const Background = styled(Flex)`
  flex-direction: column;
  flex-shrink: 0;
  overflow: hidden;
  text-align: center;
  width: 96px;
  height: 96px;
  border-color: ${theme.colors.white};
  border-style: solid;
  border-width: 3px;
  border-radius: 16px;
  font-weight: 800;
`
const Month = styled(Text).attrs({
  fontSize: 3,
  py: 1,
  bg: 'white',
  color: 'black'
})`
  line-height: 1;
`
const Day = styled(Text).attrs({ fontSize: 6, color: 'primary' })`
  line-height: 1.25;
`

const Calendar = ({ month, day }) => (
  <Background>
    <Month children={month} />
    <Day children={day} />
  </Background>
)

export default Calendar
