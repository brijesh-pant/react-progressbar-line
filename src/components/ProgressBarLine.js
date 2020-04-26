import React from 'react'
import { ThemeProvider } from 'styled-components'

import { VIEWBOX_X2 } from '../constants'

import theme from '../config/theme'
import { calculateSafeValue } from '../utils'

import Svg from './Svg'
import Path from './Path'
import Text from './Text'

const ProgressBarLine = ({
  value: propValue,
  min,
  max,
  strokeWidth,
  trailWidth,
  text
}) => {
  const [value, setValue] = React.useState(max)

  React.useEffect(() => {
    const safeValue = calculateSafeValue({ min, max, propValue })
    setValue(((safeValue - min) * VIEWBOX_X2) / (max - min))
  }, [propValue])

  return (
    <ThemeProvider theme={theme}>
      <Text text={text} value={value} />
      <Svg strokeWidth={strokeWidth}>
        <Path
          trail
          value={VIEWBOX_X2}
          min={min}
          max={max}
          strokeWidth={strokeWidth}
          trailWidth={trailWidth}
        />
        <Path
          value={value}
          min={min}
          max={max}
          strokeWidth={strokeWidth}
          trailWidth={trailWidth}
        />
      </Svg>
    </ThemeProvider>
  )
}

export default ProgressBarLine
