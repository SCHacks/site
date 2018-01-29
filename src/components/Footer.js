import React from 'react'
import { Box, Text, Link, colors } from '@hackclub/design-system'
import Columns from './Columns'
import Column from './Column'
import Bar from './Bar'
import Logo from './Logo'
import data from '../data.json'

Box.f = Box.withComponent('footer')

const Footer = () => (
  <Box.f pt={3} pb={4}>
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
    <Bar mt={3} />
  </Box.f>
)

export default Footer
