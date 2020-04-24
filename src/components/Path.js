import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import usePath from '../hooks/usePath'

const StyledPath = styled.path`
  stroke: ${({ theme, trail }) =>
    trail ? theme.trail.stroke : theme.path.stroke};
  stroke-linecap: ${({ theme, trail }) =>
    trail ? theme.trail.strokeLinecap : theme.path.strokeLinecap};
  stroke-dasharray: ${(props) => props.strokeDashArray};
  stroke-dashoffset: ${(props) => props.strokeDashOffset};
`

const Path = ({ strokeWidth, trail, trailWidth, value }) => {
  const [ref, draw, strokeDashArray, strokeDashOffset] = usePath({
    strokeWidth,
    trail,
    trailWidth,
    value
  })

  const getStrokeWidth = React.useMemo(() => {
    if (trail) {
      return trailWidth >= strokeWidth ? strokeWidth : trailWidth
    }
    return strokeWidth
  }, [trail, trailWidth, strokeWidth])

  return (
    <StyledPath
      ref={ref}
      d={draw}
      strokeDashArray={strokeDashArray}
      strokeDashOffset={strokeDashOffset}
      strokeWidth={getStrokeWidth}
      trail={trail}
    />
  )
}

Path.defaultProps = {
  strokeWidth: 2,
  trailWidth: 2,
  trail: false,
  value: 100
}

Path.propTypes = {
  strokeWidth: PropTypes.number,
  trail: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.PropTypes.number])
}

export default Path
