import React from 'react'
import { ThemeProvider } from 'styled-components'

import theme from '../config/theme'

import Svg from './Svg'
import Path from './Path'

const ProgressBarLine = ({ strokeWidth, value }) => {
  return (
    <ThemeProvider theme={theme}>
      <Svg>
        <Path trail strokeWidth={strokeWidth} />
        <Path value={value} strokeWidth={strokeWidth} />
      </Svg>
    </ThemeProvider>
  )
}

export default ProgressBarLine
