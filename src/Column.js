import cxs from 'cxs/component'
import Box from './Box'
import media from './media'

const Column = cxs(Box)(props => ({
  width: '100%',
  paddingLeft: props.theme.space[3],
  paddingRight: props.theme.space[3],
  paddingTop: props.theme.space[2],
  paddingBottom: props.theme.space[2],
  [media[0]]: {
    width: 100 / 2 + '%',
    paddingTop: props.theme.space[3],
    paddingBottom: props.theme.space[3]
  },
  [media[1]]: {
    width: 100 / 4 + '%'
  }
}))

export default Column
