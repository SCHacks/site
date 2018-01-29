import React from 'react'
import { Heading, Link } from '@hackclub/design-system'
import Bar from './Bar'
import Columns from './Columns'
import Column from './Column'
import data from '../data.json'

const GetStarted = () => (
  <section id="start">
    <Bar />
    <Heading.h2 f={4}>Getting Started</Heading.h2>
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
