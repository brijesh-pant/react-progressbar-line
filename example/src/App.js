import React from 'react'

import { ExampleComponent, ProgressBarLine } from 'react-progressbar-line'
import 'react-progressbar-line/dist/index.css'

const App = () => {
  const [val, setVal] = React.useState(100)
  return (
    <>
      <ExampleComponent text="Create React Library Example 😄" />
      <input type="range" value={val} onChange={(e) => {setVal(e.target.value)}} />
      <div id="svg-container">
        <ProgressBarLine
          value={val} 
          min={0}
          max={100}
          strokeWidth={5} 
          trailWidth={5} 
        />
      </div>
    </>
  )
}

export default App
