import React from 'react'
import Bar from './Bar'
import { Heading, Link } from '@hackclub/design-system'
import Columns from './Columns'
import Column from './Column'
import data from '../data.json'

const Workshops = () => (
  <section id="workshops">
    <Bar />
    <Heading.h2 f={4}>Workshops</Heading.h2>
    <Columns>
      {data.workshops.map((workshop, i) => (
        <Column key={workshop.slug}>
          <Link
            href={`https://workshops.hackclub.com/${workshop.slug}`}
            children={`${i + 1}. ${workshop.name}`}
          />
        </Column>
      ))}
    </Columns>
  </section>
)

export default Workshops
