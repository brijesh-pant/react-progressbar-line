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

const Path = ({ strokeWidth, trail, value }) => {
  const [ref, d, strokeDashArray, strokeDashOffset] = usePath(
    value,
    strokeWidth
  )

  return (
    <StyledPath
      ref={ref}
      d={d}
      strokeDashArray={strokeDashArray}
      strokeDashOffset={strokeDashOffset}
      strokeWidth={strokeWidth}
      trail={trail}
    />
  )
}

Path.defaultProps = {
  strokeWidth: 2,
  trail: false,
  value: 100
}

Path.propTypes = {
  strokeWidth: PropTypes.number,
  trail: PropTypes.bool,
  value: PropTypes.number
}

export default Path
