import React from 'react'

import useStrokeDashOffset from './useStrokeDashOffset'

import { VIEWBOX_X1, VIEWBOX_X2 } from '../constants'

export default function useStrokeDashArray(value, strokeWidth) {
  const [dashArray, setDashArray] = React.useState(100)
  const [d, setD] = React.useState('')

  React.useEffect(() => {
    const center = strokeWidth / 2
    setD(`
      M ${VIEWBOX_X1},${center}
      L ${VIEWBOX_X2},${center}
    `)
  }, [strokeWidth])

  const ref = React.useCallback(
    (pathEl) => {
      if (pathEl !== null) {
        setDashArray(pathEl.getTotalLength())
      }
    },
    [d]
  )
  return [ref, d, dashArray, ...useStrokeDashOffset(value, dashArray)]
}
