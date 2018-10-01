import React from 'react'
import Helmet from 'react-helmet'
import ThemeProvider from 'theme'
import theme from 'theme/config'
import data from 'data'

const meta = tags =>
  tags.map((props, index) =>
    React.createElement('meta', { ...props, key: index })
  )

export default ({ children }) => (
  <ThemeProvider>
    <Helmet title="State High Hack Club">
      <html lang="en" />
      <meta charSet="UTF-8" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      {meta([
        { name: 'description', content: data.description },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: data.card },
        { property: 'og:image', content: data.card },
        { property: 'og:image:width', content: 1024 },
        { property: 'og:image:height', content: 768 },
        { property: 'og:title', content: data.name },
        { name: 'twitter:title', content: data.name },
        { property: 'og:description', content: data.description },
        { name: 'twitter:description', content: data.description },
        { name: 'description', content: data.description },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: theme.colors.primary }
      ])}
      <link
        href="https://fonts.googleapis.com/css?family=Nunito:400,800,900i"
        rel="stylesheet"
      />
    </Helmet>
    {children}
  </ThemeProvider>
)
