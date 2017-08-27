import cxs from 'cxs/component'
import { space, width, fontSize, color } from 'styled-system'

const bold = props => (props.bold ? { fontWeight: 'bold' } : null)

const Text = cxs('p')(
  {
    marginTop: 0,
    marginBottom: 0
  },
  space,
  width,
  fontSize,
  color,
  bold
)

export default Text
