import React from 'react'
import Link from 'gatsby-link'
import { Container, Heading, Text, LargeButton } from '@hackclub/design-system'
import Logo from 'components/Logo'

LargeButton.link = LargeButton.withComponent(Link)

export default () => (
  <Container px={3} py={[4, 5]} align="center">
    <Link to="/">
      <Logo color="primary" size={128} mb={3} mx="auto" />
      <Heading.h1 color="primary" f={[4, 5, 6]}>
        404!
      </Heading.h1>
    </Link>
    <Text color="black" f={3}>
      Sorry, that page isn’t here.
    </Text>
    <LargeButton.link to="/" bg="accent" mt={4}>
      🏡 Go Home
    </LargeButton.link>
  </Container>
)
