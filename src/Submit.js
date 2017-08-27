import React from 'react'
import Bar from './Bar'
import Heading from './Heading'
import Columns from './Columns'
import Column from './Column'
import Label from './Label'
import Input from './Input'
import SubmitButton from './SubmitButton'
import cxs from 'cxs/component'

const Submit = () =>
  <section id="submit">
    <Bar />
    <Heading>Submit</Heading>
    <form action="https://formspree.io/ljc14@scasd.org" method="POST">
      <Columns>
        <Column>
          <Label>
            Email
            <Input type="email" name="email" placeholder="abc@scasd.org" />
          </Label>
        </Column>
        <Column>
          <Label>
            Link
            <Input type="url" name="url" placeholder="abc.xyz" />
          </Label>
        </Column>
        <Column style={{ alignSelf: 'flex-end' }}>
          <SubmitButton type="submit" />
        </Column>
        <Column />
      </Columns>
    </form>
  </section>

export default Submit
