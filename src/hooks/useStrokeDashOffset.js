import React from 'react'

export default function useStrokeDashOffset(value, dashArray) {
  const [dashOffset, setDashOffset] = React.useState(0)

  React.useEffect(() => {
    const dashOffset = Math.abs(dashArray - parseInt(value, 10))
    setDashOffset(dashOffset)
  }, [value, dashArray])

  return [dashOffset]
}
