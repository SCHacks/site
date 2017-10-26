import React from 'react'
import Box from './Box'
import Columns from './Columns'
import Column from './Column'
import Bar from './Bar'
import Text from './Text'
import Logo from './Logo'
import Link from './Link'
import data from '../data'
import colors from './colors'

const Footer = () => (
  <footer>
    <Bar />
    <Columns>
      <Column>
        <Text>State High hacks</Text>
      </Column>
      <Column>
        <Text>MIT license</Text>
      </Column>
      <Column>
        <Link href={data.repo} children="Source" />
      </Column>
      <Column>
        <Link href="https://lachlanjc.glitch.me" children="By @lachlanjc" />
      </Column>
    </Columns>
    <Bar mb={4} style={{ marginTop: 32 }} />
    <Box py={4} />
  </footer>
)

export default Footer
