import React from 'react'

import useStrokeDashOffset from './useStrokeDashOffset'

import { VIEWBOX_X1, VIEWBOX_X2 } from '../constants'

export default function useStrokeDashArray({ strokeWidth, trailWidth, value }) {
  const [dashArray, setDashArray] = React.useState(100)
  const [draw, setDraw] = React.useState('')

  React.useEffect(() => {
    const center =
      (strokeWidth > trailWidth
        ? Math.max(strokeWidth, trailWidth)
        : Math.min(strokeWidth, trailWidth)) / 2
    setDraw(`
      M ${VIEWBOX_X1},${center}
      L ${VIEWBOX_X2},${center}
    `)
  }, [strokeWidth, trailWidth])

  const ref = React.useCallback(
    (pathEl) => {
      if (pathEl !== null) {
        setDashArray(pathEl.getTotalLength())
      }
    },
    [draw]
  )
  return [ref, draw, dashArray, ...useStrokeDashOffset(value, dashArray)]
}
