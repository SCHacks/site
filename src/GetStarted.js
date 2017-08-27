import React from 'react'
import Bar from './Bar'
import Heading from './Heading'
import Columns from './Columns'
import Column from './Column'
import Link from './Link'
import data from '../data'

const GetStarted = () =>
  <section id="start">
    <Bar />
    <Heading>Getting Started</Heading>
    <Columns>
      {data.start.map((item, i) =>
        <Column key={item.href}>
          <Link {...item} />
        </Column>
      )}
    </Columns>
  </section>

export default GetStarted
