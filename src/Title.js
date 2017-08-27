import cxs from 'cxs/component'

const Title = cxs('h1')(props => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: props.theme.space[3],
  ' a': {
    color: props.theme('colors.red'),
    fontSize: 32
  },
  ' span': {
    display: 'inline-block',
    backgroundColor: props.theme('colors.red'),
    color: props.theme('colors.white'),
    fontSize: 16,
    textTransform: 'uppercase',
    borderRadius: 4,
    paddingLeft: props.theme.space[2],
    paddingRight: props.theme.space[2],
    marginLeft: props.theme.space[3]
  }
}))

export default Title
