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

const option = {
  threshold: 0.8
}

const handleIntersect = (targetElement) ={
  console.log('intersect', targetElement)
}

const Example = () => {

  const targetRef = useIntersect(handleIntersect, {rootOptions: option, once:true})

  return (
    <img ref={targetRef}/>
  )
}
```

## API

### `useIntersect`

| Prop | Type | Required | Description |
| :--- | :--- | :------: | :---------- |
| `onIntersect` | Function |    ✓     | Execute onItersect Function |
| `IntersectOptions` | IntersectOptions | | Intersect option |


### `IntersectOptions` type

| name | Type | Required | Description |
| :--- | :--- | :------: | :---------- |
| `rootOptions` | `ObserverOptions` | | ObserverOptions |
| `once` | boolean | | [default:true] Trigger onItersect once |

### `ObserverOptions` type

| name | Type | Required | Description |
| :--- | :--- | :------: | :---------- |
| `root` | Element \| null | | root Element |
| `rootMargin` | string | | Observer rootMargin |
| `threshold` | number | | Observer threshold |

> [[MDN]Reference](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver)


## License

MIT © :mouse:[snyung](https://github.com/seonhyungjo)
