import React from 'react'
import styled from 'styled-components'
import {
  Box,
  Flex,
  Text,
  Heading,
  Image,
  Container,
  Link as A,
  Link,
  Badge
} from '@hackclub/design-system'
import Underlined from './Underlined'
import Calendar from './Calendar'
import data from 'data'

const Header = () => (
  <Box align="center" py={5}>
    <Link href="https://hackclub.com">
      <Image
        src="/logo-primary.svg"
        width={256}
        mx="auto"
        alt="State High Hack Club logo"
      />
    </Link>
    <Container maxWidth={36} mt={4} mb={[4, 5]} px={[3, 0]}>
      <Text fontSize={[3, 4]}>
        A club for coding + making at State College Area High School, a chapter
        of the international non-profit{' '}
        <Underlined href="https://hackclub.com" color="white">
          Hack Club
        </Underlined>. We meet weekly on Mondays.
      </Text>
    </Container>
    <Flex align="center" justify="center">
      <Calendar month={data.meeting.month} day={data.meeting.day} />
      <Box align="left" ml={[3, 4]}>
        <Text fontSize={3} bold>
          Next meeting
        </Text>
        <Text fontSize={1}>C212, 4:00–5:30pm</Text>
        <Text mt={2}>
          <Link
            href="http://rmd.at/schacks"
            target="_blank"
            fontSize={1}
            bold
            hoverline
            chevronRight
            color="white"
            children="Get a reminder"
          />
        </Text>
      </Box>
    </Flex>
  </Box>
)

export default Header
