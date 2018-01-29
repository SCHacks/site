import React from 'react'
import { Box, Text, Link, colors } from '@hackclub/design-system'
import Columns from './Columns'
import Column from './Column'
import Bar from './Bar'
import Logo from './Logo'
import data from '../data'

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
        <Link href="https://lachlanjc.me" children="By @lachlanjc" />
      </Column>
    </Columns>
    <Bar mb={4} style={{ marginTop: 32 }} />
    <Box py={4} />
  </footer>
)

export default Footer
