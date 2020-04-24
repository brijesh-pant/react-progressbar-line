import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledText = styled.span`
  color: ${(props) => props.theme.text.fill};
  display: block;
  text-align: ${(props) => props.theme.text.textAlign};
`

const Text = ({ text }) => {
  if (!text) {
    return null
  }

  return <StyledText>{text}</StyledText>
}

Text.defaultProps = {
  text: ''
}

Text.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
}

export default Text
