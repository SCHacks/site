import React from 'react'
import cxs from 'cxs/component'
import Flex from './Flex'
import Box from './Box'

const Background = cxs(Flex)(props => ({
  flexDirection: 'column',
  flexShrink: '0',
  textAlign: 'center',
  width: 5 * 16,
  height: 5 * 16,
  borderColor: props.theme('colors.red'),
  borderStyle: 'solid',
  borderWidth: 4,
  borderTopWidth: 2,
  borderRadius: 12,
  lineHeight: '1.625'
}))

const Month = cxs(Box)(props => ({
  backgroundColor: props.theme('colors.red'),
  color: props.theme('colors.white'),
  fontSize: 16,
  fontWeight: 'bold'
}))

const Day = cxs(Box)(props => ({
  fontSize: 32
}))

const Calendar = ({ month, day }) => (
  <Background>
    <Month children={month} />
    <Day children={day} />
  </Background>
)

export default Calendar
