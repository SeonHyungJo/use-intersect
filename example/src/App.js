import React from 'react'

import useIntersect from 'use-intersect'

const option = {
  threshold: 0.8
}

const App = () => {
  const onIntersectFunc = (target) => {
    console.log('intersect', target)
  }

  const customeRef = useIntersect(onIntersectFunc, { rootOptions: option, once: false })

  return (
    <>
      <div className={'testDiv'} />
      <div className={'testDiv'} />
      <div className={'testDiv'} />
      <div className={'testDiv'} />
      <div className={'testDiv'} />
      <div className={'testDiv'} />
      <div className={'testDiv'} />
      <div className={'testDiv'} />
      <div className={'testDiv'} />
      <div className={'testDiv'} />
      <div ref={customeRef} className={'targetDiv'} />
      <div className={'testDiv'} />
      <div className={'testDiv'} />
      <div className={'testDiv'} />
      <div className={'testDiv'} />
      <div className={'testDiv'} />
      <div className={'testDiv'} />
      <div className={'testDiv'} />
      <div className={'testDiv'} />
      <div className={'testDiv'} />
      <div className={'testDiv'} />
    </>
  )
}
export default App
