import reset from './reset'

const btn = props => ({
  ...reset,
  color: props.theme('colors.white'),
  backgroundColor: props.theme('colors.red'),
  border: 'none',
  borderRadius: 4,
  boxShadow: '0 0 8px rgba(0,0,0,.25)',
  fontWeight: '600',
  lineHeight: '1.625',
  textDecoration: 'none',
  textAlign: 'center',
  paddingTop: props.theme.space[2],
  paddingBottom: props.theme.space[2],
  marginTop: props.theme.space[3]
})

export default btn
