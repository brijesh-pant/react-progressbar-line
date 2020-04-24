import React from 'react'

import { ExampleComponent, ProgressBarLine } from 'react-progressbar-line'
import 'react-progressbar-line/dist/index.css'

const App = () => {
  const val = 70;
  return (
    <>
      <ExampleComponent text="Create React Library Example 😄" />      
      <div id="svg-container">
        <ProgressBarLine 
          text={`${val}%`} 
          value={val} 
          strokeWidth={5}
          trailWidth={2} />
      </div>
    </>
  )
}

export default App
