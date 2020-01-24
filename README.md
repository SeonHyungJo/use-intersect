<p align="center">
    <a href="https://seonhyungjo.github.io/use-intersect/"><img width="140" src="./static/use-intersect-logo.png" alt="React useIntersect Logo" /></a>

<h1 align="center">React useIntersect Hooks</h1>

<div align="center">

[![NPM](https://img.shields.io/npm/v/use-intersect.svg)](https://www.npmjs.com/package//use-intersect) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

</div>

## Install

```bash
npm install --save use-intersect
```

## Usage

```tsx
import * as React from 'react'

import useIntersect from 'use-intersect'

const handleIntersect = (targetElement) ={
  console.log('intersect', targetElement)
}

const Example = () => {
  const targetRef = useIntersect(handleIntersect)

  return (
    <img ref={targetRef}/>
  )
}
```

## License

MIT © :mouse:[snyung](https://github.com/seonhyungjo)
