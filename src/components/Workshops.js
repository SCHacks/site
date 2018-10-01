import React from 'react'
import { Heading } from '@hackclub/design-system'
import Sheet from './Sheet'
import List from './List'
import Underlined from './Underlined'
import data from 'data'

const Workshops = () => (
  <Sheet id="workshops">
    <Heading.h2 fontSize={5} mb={3}>
      Workshops
    </Heading.h2>
    <List>
      {data.workshops.map((workshop, i) => (
        <li key={workshop.slug}>
          <Underlined
            href={`https://hackclub.com/workshops/${workshop.slug}`}
            children={workshop.name}
            target="_blank"
          />
        </li>
      ))}
    </List>
  </Sheet>
)

export default Workshops
