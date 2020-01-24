import React from 'react'

import useIntersect from '@snyung/use-intersect'

const App = () => {
  const onIntersectFunc = () => {
    console.log('intersect')
  }

  const customeRef = useIntersect(onIntersectFunc)

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
      <div className={'testDiv'} />
      <div ref={customeRef} className={'testDiv'} />
    </>
  )
}
export default App
