import React from 'react'
import Banner from './Banner'
import Logo from './Logo'
import Title from './Title'
import Link from './Link'
import Bar from './Bar'
import Text from './Text'
import Flex from './Flex'
import Box from './Box'
import Calendar from './Calendar'
import data from '../data'
import colors from './colors'

const Header = () => (
  <Banner>
    <Logo size={72} fill={colors.red} />
    <Title>
      <Link href="https://hackclub.com">Hack Club</Link>
      <span>State High</span>
    </Title>
    <Text f={3}>
      {data.description}
    </Text>
    <Flex align="center" mt={4}>
      <Calendar month="Sept." day={11} />
      <Box ml={3}>
        <Text>
          <strong>Next meeting</strong>
          <Link
            href="http://rmd.at/schacks"
            target="_blank"
            style={{ fontSize: 14, fontStyle: 'italic' }}
            children={' — want a reminder?'}
          />
        </Text>
        <Text>220N, 3:30–5:00pm</Text>
      </Box>
    </Flex>
  </Banner>
)

export default Header
