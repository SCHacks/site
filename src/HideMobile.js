import Box from './Box'
import cxs from 'cxs/component'
import { breakpoints } from './media'

const HideMobile = cxs(Box)({
  [`@media screen and (max-width: ${breakpoints[0]}em)`]: {
    display: 'none'
  }
})

export default HideMobile
