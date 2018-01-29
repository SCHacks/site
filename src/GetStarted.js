import React from 'react'
import Bar from './Bar'
import { Heading, Link } from '@hackclub/design-system'
import Columns from './Columns'
import Column from './Column'
import data from '../data'

const GetStarted = () => (
  <section id="start">
    <Bar />
    <Heading.h2>Getting Started</Heading.h2>
    <Columns>
      {data.start.map((item, i) => (
        <Column key={item.href}>
          <Link {...item} />
        </Column>
      ))}
    </Columns>
  </section>
)

export default GetStarted
