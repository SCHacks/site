import React from 'react'
import { Text, Flex } from '@hackclub/design-system'

const Background = Flex.extend`
  flex-direction: column;
  flex-shrink: 0;
  text-align: center;
  width: 80px;
  height: 80px;
  border-color: ${props => props.theme.colors.primary};
  border-style: solid;
  border-width: 4px;
  border-top-width: 2px;
  border-radius: 12px;
  line-height: 1.5;
`

const Calendar = ({ month, day }) => (
  <Background>
    <Text bg="primary" color="white" f={2} bold children={month} />
    <Text f={5} children={day} />
  </Background>
)

export default Calendar
