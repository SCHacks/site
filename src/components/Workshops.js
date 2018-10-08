import React from 'react'
import { Heading, Text } from '@hackclub/design-system'
import Sheet from './Sheet'
import List from './List'
import Underlined from './Underlined'
import data from 'data'

const Workshops = () => (
  <Sheet id="workshops">
    <Heading.h2 fontSize={5} mb={2}>
      Workshops
    </Heading.h2>
    <Text fontSize={[2, 3]} mb={[3, 4]}>
      This is a collection of coding tutorials from Hack Club. Go at your own
      pace, & submit your link below when you’re finished!
    </Text>
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
