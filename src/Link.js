import cxs from 'cxs/component'
import colors from './colors'

const Link = cxs('a')(props => ({
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  color: props.theme('colors.blue'),
  ':hover': {
    textDecoration: 'underline'
  }
}))

export default Link
