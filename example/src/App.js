import React from 'react'

import { useMyHook } from '@snyung/use-intersect'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App
