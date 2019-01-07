import React from 'react'
import Link from 'gatsby-link'
import { Container, Heading, Text, LargeButton } from '@hackclub/design-system'
import Layout from 'components/Layout'

LargeButton.link = LargeButton.withComponent(Link)

export default () => (
  <Layout>
    <Container px={3} py={[5, 6]} align="center">
      <Heading.h1 color="primary" fontSize={[128, 256]}>
        404!
      </Heading.h1>
      <Text color="white" fontSize={3}>
        Sorry, that page isn’t here.
      </Text>
      <LargeButton.link bg="cool" to="/" mt={4}>
        <span role="img" aria-label="home emoji">
          🏡
        </span>{' '}
        Go Home
      </LargeButton.link>
    </Container>
  </Layout>
)
