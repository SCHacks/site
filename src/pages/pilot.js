import React from 'react'
import { Heading, Link } from '@hackclub/design-system'
import Header from 'components/Header'
import Bar from 'components/Bar'
import Columns from 'components/Columns'
import Column from 'components/Column'

const links = [
  {
    href: 'https://glitch.com',
    children: 'Glitch'
  },
  {
    href: 'https://glitch.com/website-starter-kit',
    children: 'Glitch tutorials'
  },
  {
    href: 'https://hackclub.com/challenge',
    children: '🏅 Challenge'
  },
  {
    href: 'https://goo.gl/forms/Mgsh1lswaqrtf0xw2',
    children: 'Feeback form'
  }
]

export default () => (
  <div>
    <Header />
    <Bar />
    <Heading.h2 f={4}>Links</Heading.h2>
    <Columns>
      {links.map((props, i) => (
        <Column key={i}>
          <Link target="_blank" {...props} />
        </Column>
      ))}
    </Columns>
  </div>
)
