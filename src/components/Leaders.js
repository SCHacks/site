import React from 'react'
import styled from 'styled-components'
import {
  Box,
  Flex,
  Text,
  Container,
  Button,
  Icon,
  Avatar
} from '@hackclub/design-system'
import theme from 'theme/config'
import data from 'data'

const Base = styled(Container).attrs({ maxWidth: 72 })`
  display: grid;
  grid-gap: ${theme.space[3]}px;
  width: 100%;

  ${theme.mediaQueries.md} {
    grid-template-columns: repeat(${data.leaders.length}, minmax(0, 1fr));
  }
`
const LeaderName = styled(Text)`
  font-weight: 700;
  line-height: 1.25;
`
const EmailButton = styled(Button)`
  display: inline-flex;
  align-items: center;
  line-height: 1 !important;
  font-weight: 500;
`
const username = a => a.split(' ')[0].toLowerCase()
const Leader = ({ name, pronouns, email, ...props }) => (
  <Flex align="center" style="margin: auto;" >
    <Avatar src={`/team/${username(name)}.jpg`} alt={name} size={128} mr={3} />
    <Box align="center">
      <LeaderName f={4} children={name} />
      <Text color="muted" f={2} mb={2} children={pronouns} />
      <EmailButton href={`mailto:${email}@scasd.org`} bg="cool" f={2} mt={2}>
        <Icon glyph="email" size={24} />
        <Text.span ml={1}>Email</Text.span>
      </EmailButton>
    </Box>
  </Flex>
)

const Leaders = props => (
  <Base {...props}>
    {data.leaders.map(profile => (
      <Leader
        name={profile.name}
        pronouns={profile.pronouns}
        email={profile.email}
        key={profile.email}
      />
    ))}
  </Base>
)

export default Leaders
