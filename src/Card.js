import React from 'react'
import data from './data.json'

const Card = () => (
  <svg viewBox="0 0 1024 768" width={1024} height={768}>
    <rect width={1024} height={768} fill="#e42d42" />
    <g transform="translate(256 128)">
      <svg viewBox="0 0 32 32" width={512} height={512}>
        <path fill="white" d={data.logo} />
      </svg>
    </g>
    <style dangerouslySetInnerHTML={{ __html: css }} />
  </svg>
)

const css = `
body { margin: 0; }
`

export default Card
