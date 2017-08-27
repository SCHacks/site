import React from 'react'
import Bar from './Bar'
import Heading from './Heading'
import Columns from './Columns'
import Column from './Column'
import Link from './Link'
import data from '../data'

const Workshops = () =>
  <section id="workshops">
    <Bar />
    <Heading>Workshops</Heading>
    <Columns>
      {data.workshops.map((workshop, i) =>
        <Column key={workshop.slug}>
          <Link
            href={`https://workshops.hackclub.com/${workshop.slug}`}
            children={`${i + 1}. ${workshop.name}`}
          />
        </Column>
      )}
    </Columns>
  </section>

export default Workshops
