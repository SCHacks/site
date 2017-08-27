import cxs from 'cxs/component'
import Text from './Text'

const Heading = cxs('h2')(props => ({
  fontSize: 24,
  marginTop: props.theme.space[4],
  marginBottom: props.theme.space[2]
}))

export default Heading
