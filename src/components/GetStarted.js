import React from 'react'
import { Heading } from '@hackclub/design-system'
import Sheet from './Sheet'
import List from './List'
import Underlined from './Underlined'
import data from 'data'

const GetStarted = () => (
  <Sheet id="start">
    <Heading.h2 fontSize={5} mb={3}>
      New here?
    </Heading.h2>
    <List>
      {data.start.map((item, i) => (
        <li key={item.href}>
          <Underlined target="_blank" {...item} />
        </li>
      ))}
    </List>
  </Sheet>
)

export default GetStarted
