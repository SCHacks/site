import cxs from 'cxs/component'
import Text from './Text'
import colors from './colors'

const wrap = props => (props.wrap ? { whiteSpace: 'pre-wrap' } : null)
const Pre = cxs(Text)(
  {
    fontFamily: 'inherit',
    fontSize: 'inherit',
    margin: 0,
    overflow: 'auto',
    color: colors.green
  },
  wrap
)

export default Pre
