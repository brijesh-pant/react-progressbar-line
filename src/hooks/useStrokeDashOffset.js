import React from 'react'

export default function useStrokeDashOffset(value, dashArray) {
  const [dashOffset, setDashOffset] = React.useState(0)

  React.useEffect(() => {
    const dashOffset = Math.abs(dashArray - value)
    setDashOffset(dashOffset)
  }, [value, dashArray])

  return [dashOffset]
}
