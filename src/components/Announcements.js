import React from 'react'
import { Heading, Text } from '@hackclub/design-system'
import styled from 'styled-components'
import Sheet from './Sheet'
import List from './List'
import Underlined from './Underlined'
import data from 'data'
import theme from 'theme/config'

const CenteredSheet = styled(Sheet)`
  margin-bottom: ${theme.space[4]}px;
  width: 36rem;
  text-align: center;
  overflow-wrap: break-word;

  @media only screen and (max-width: 600px) {
    width: auto;
    margin: 20px;
  }
`

const Announcements = () => (
  <CenteredSheet id="announcements">
    <Heading.h2 fontSize={5} mb={2}>
      Announcements
    </Heading.h2>
    <List style={{"display": "inline-block"}}>
      {data.announcements.map((announcement, i) => {
        var componentList = [];

        let last = 0;
        let start, end;
        while ((start = announcement.message.indexOf('{', last)) != -1) {
          if ((end = announcement.message.indexOf('}', start)) == -1) {
            last = start + 1;
          } else {
            componentList.push(
              announcement.message.substring(last, start)
            );
            let [text, link] = announcement.message.substring(start + 1, end).split('|');
            componentList.push(
              <Underlined
                key={announcement.slug}
                href={link} 
                children={text}
                target="_blank"
              />
            )
            last = end + 1;
          }
        }
        componentList.push(
          announcement.message.substring(last)
        );

        return (
          <li key={announcement.slug}>
            <Text fontSize={[3, 4]}>
              {componentList}
            </Text>
          </li>
        )
      })}
    </List>
  </CenteredSheet>
)

export default Announcements
