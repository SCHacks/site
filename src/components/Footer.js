import React from 'react'
import { Flex, Box, Heading, Icon, Link as A } from '@hackclub/design-system'
import { urls } from 'data'

const Service = ({ href, service, ...props }) => (
  <A
    target="_blank"
    rel="noopener"
    href={href}
    mx={3}
    color="muted"
    aria-label={service}
    children={<Icon glyph={service} size={32} />}
    {...props}
  />
)

const Footer = ({ children }) => (
  <Box.footer p={[4, 5]} bg="steel" color="muted" align="center">
    {children}
    <Heading.h3 f={2} mb={3} align="center" caps>
      Join the Club
    </Heading.h3>
    <Flex justify="center" align="center" wrap>
      <Service href={urls.slack} service="slack" />
      <Service href={urls.instagram} service="instagram" />
      <Service href={urls.github} service="github" />
      <Service href={urls.email} service="email" />
    </Flex>
  </Box.footer>
)

export default Footer
