import React from 'react'
import { ThemeProvider } from 'styled-components'

import theme from '../config/theme'

import Svg from './Svg'
import Path from './Path'
import Text from './Text'

const ProgressBarLine = ({ strokeWidth, trailWidth, text, value }) => {
  return (
    <ThemeProvider theme={theme}>
      <Text text={text} />
      <Svg strokeWidth={strokeWidth}>
        <Path trail strokeWidth={strokeWidth} trailWidth={trailWidth} />
        <Path value={value} strokeWidth={strokeWidth} trailWidth={trailWidth} />
      </Svg>
    </ThemeProvider>
  )
}

export default ProgressBarLine
