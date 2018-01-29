import React from 'react'
// import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import data from '../data.json'

import ThemeProvider from '../theme'
import { colors } from '@hackclub/design-system'

export default ({ children }) => (
  <ThemeProvider>
    <Helmet
      title="SCHacks"
      meta={[
        { name: 'description', content: data.description },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: data.card },
        { property: 'og:image', content: data.card },
        { property: 'og:image:width', content: 512 },
        { property: 'og:image:height', content: 512 },
        { property: 'og:title', content: data.name },
        { name: 'twitter:title', content: data.name },
        { property: 'og:description', content: data.description },
        { name: 'twitter:description', content: data.description },
        { name: 'description', content: data.description },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: colors.primary }
      ]}
    />
    {children()}
  </ThemeProvider>
)

// TemplateWrapper.propTypes = {
//   children: PropTypes.func
// }
