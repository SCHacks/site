import React from 'react'
import styled from 'styled-components'
import { Heading, Field, Button } from '@hackclub/design-system'
import theme from 'theme/config'
import Sheet from './Sheet'

const SubmitButton = Button.withComponent('input')

const Base = styled.form`
  label {
    margin-bottom: ${theme.space[3]}px;
    span {
      font-weight: 800;
    }
    input {
      padding: 0 !important;
      border: 0;
      border-bottom: 1px solid ${theme.colors.muted};
      border-radius: 0;
      &:focus {
        box-shadow: 0 2px 0 ${theme.colors.cool};
        border-bottom-color: ${theme.colors.cool};
      }
    }
  }
`

const Submit = () => (
  <Sheet id="submit">
    <Heading.h2 fontSize={5} mb={3}>
      Submit
    </Heading.h2>
    <Base action="https://formspree.io/f/mlevgqvz" method="POST">
      <Field
        label="Email"
        type="email"
        name="email"
        placeholder="abc@scasd.org"
      />
      <Field label="Link" type="url" name="url" placeholder="abc.xyz" />
      <SubmitButton type="submit" mt={3} />
    </Base>
  </Sheet>
)

export default Submit
