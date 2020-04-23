import React from 'react'

import { ExampleComponent, ProgressBarLine } from 'react-progressbar-line'
import 'react-progressbar-line/dist/index.css'

const App = () => {
  return (
    <>
      <ExampleComponent text="Create React Library Example 😄" />
      <div id="svg-container">
        <ProgressBarLine value={70} strokeWidth={5} />
      </div>
    </>
  )
}

export default App
