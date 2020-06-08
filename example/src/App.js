import React from 'react'

import { ExampleComponent, ProgressBarLine } from 'react-progressbar-line'
import 'react-progressbar-line/dist/index.css'

const App = () => {
  return (
    <>
      <ExampleComponent text='React ProgressBarLine' />
      <div className='container'>
        <div className='half'>
          <pre>
            <code>
              {`
    <ProgressBarLine
      value={75}
    />`}
            </code>
          </pre>
        </div>
        <div className='half half-example'>
          <div id='svg-container'>
            <ProgressBarLine value={75} />
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='half'>
          <pre>
            <code>
              {`
    <ProgressBarLine
      value={75}
      min={50}
      max={100}
    />`}
            </code>
          </pre>
        </div>
        <div className='half half-example'>
          <div id='svg-container'>
            <ProgressBarLine value={75} min={50} max={100} />
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='half'>
          <pre>
            <code>
              {`
    <ProgressBarLine
      value={125}
      min={0}
      max={200}
    />`}
            </code>
          </pre>
        </div>
        <div className='half half-example'>
          <div id='svg-container'>
            <ProgressBarLine value={125} min={0} max={200} />
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='half'>
          <pre>
            <code>
              {`
    <ProgressBarLine
      strokeWidth={10}
    />`}
            </code>
          </pre>
        </div>
        <div className='half half-example'>
          <div id='svg-container'>
            <ProgressBarLine strokeWidth={10} />
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='half'>
          <pre>
            <code>
              {`
    <ProgressBarLine
      trailWidth={2}
    />`}
            </code>
          </pre>
        </div>
        <div className='half half-example'>
          <div id='svg-container'>
            <ProgressBarLine trailWidth={2} />
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='half'>
          <pre>
            <code>
              {`
    <ProgressBarLine
      text='Custom Text 😄'
    />`}
            </code>
          </pre>
        </div>
        <div className='half half-example'>
          <div id='svg-container'>
            <ProgressBarLine text='Custom Text 😄' />
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='half'>
          <pre>
            <code>
              {`
    <ProgressBarLine
      value={25}
      min={0}
      max={100}
      strokeWidth={5}
      trailWidth={5}
      styles={{
        path: {
          stroke: '#17b978'
        },
        trail: {
          stroke: '#a7ff83'
        },
        text: {
          fill: '#404040',
          textAlign: 'center',
          fontSize: '32px'
        }
      }}
    />`}
            </code>
          </pre>
        </div>
        <div className='half half-example'>
          <div id='svg-container'>
            <ProgressBarLine
              value={25}
              min={0}
              max={100}
              strokeWidth={5}
              trailWidth={5}
              styles={{
                path: {
                  stroke: '#17b978'
                },
                trail: {
                  stroke: '#a7ff83'
                },
                text: {
                  fill: '#404040',
                  textAlign: 'center',
                  fontSize: '32px'
                }
              }}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
