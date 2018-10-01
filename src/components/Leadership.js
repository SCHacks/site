import React from 'react'
import { Container, Heading, Text } from '@hackclub/design-system'
import Leaders from './Leaders'

const Leadership = () => (
  <section id="leadership">
    <Container maxWidth={36} align="center" px={3} pb={4}>
      <Heading.h2 color="white" fontSize={[5, 6]} mb={2}>
        Leadership
      </Heading.h2>
      <Text color="smoke" fontSize={[3, 4]}>
        We’re a diverse group of students passionate about infusing hacker
        culture into our high school.
      </Text>
    </Container>
    <Leaders px={3} mb={[5, 6]} />
  </section>
)

export default Leadership
