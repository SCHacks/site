import cxs from 'cxs/component'
import Box from './Box'
import media from './media'

const Bar = cxs(Box)(props => ({
  width: 64,
  height: 8,
  backgroundColor: props.theme('colors.red'),
  marginTop: props.theme.space[4],
  marginBottom: props.theme.space[4],
  [media[0]]: {
    marginTop: props.theme.space[5]
  }
}))

export default Bar
