require('babel-register')
const fs = require('fs')
const path = require('path')
const { renderToStaticMarkup } = require('react-dom/server')
const h = require('react').createElement
const cxs = require('cxs')
const data = require('./data')
const colors = require('./src/colors')
const App = require('./src/App').default

const cx = cxs({
  fontFamily: '"SF Mono", Menlo, monospace',
  color: colors.black,
  lineHeight: '1.5'
})

const body = renderToStaticMarkup(h(App))
const css = cxs.css()

const template = ({ body, id, css }) => `<!DOCTYPE html>
<title>${data.name}</title>
<meta name='twitter:card' content='summary_large_image'>
<meta name='twitter:image' content='${data.card}'>
<meta name='og:image' content='${data.card}'>
<meta name='og:title' content='${data.name}'>
<meta name='twitter:title' content='${data.name}'>
<meta name='og:description' content='${data.description}'>
<meta name='twitter:description' content='${data.description}'>
<meta name='description' content='${data.description}'>
<meta name='viewport' content='width=device-width, initial-scale=1'>
<meta name='theme-color' content='${colors.red}'>
<style>*{box-sizing:border-box}body{margin:0}${css}</style>
<div id='${id}' class='${cx}'>
${body}
</div>
`

const html = template({ body, css, id: 'app' })

const filename = path.join(__dirname, './index.html')
fs.writeFileSync(filename, html)
