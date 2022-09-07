import React from 'react'
import { Heading, Text } from '@hackclub/design-system'
import Sheet from './Sheet'
import List from './List'
import Underlined from './Underlined'
import data from 'data'

const Announcements = () => (
  <Sheet id="announcements">
    <Heading.h2 fontSize={5} mb={2}>
      Announcements
    </Heading.h2>
    <List>
      {data.announcements.map((announcement, i) => {
        <li key={announcement.slug}>
          <Underlined
            href={announcement.link}
            children={announcement.message}
            target="_blank"
          />
        </li>
      })}
    </List>
  </Sheet>
)

export default Announcements
