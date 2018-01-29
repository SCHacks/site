import React from 'react'
import { Box } from '@hackclub/design-system'

const Column = props => (
  <Box w={[1, 1 / 2, 1 / 4]} px={3} py={2} f={2} {...props} />
)

export default Column
