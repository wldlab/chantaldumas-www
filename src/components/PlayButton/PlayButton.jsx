// vendors
import React from "react"
import styled from "@emotion/styled"
import PropTypes from "prop-types"
import { color, transition } from "../../styles/styles"

const UnstyledButton = styled.button`
  appearance: none;
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
  font-size: 1em;
  transition: color ${transition.speed.fast} ${transition.easing.inQuint};

  :hover {
    transition: color ${transition.speed.fast} ${transition.easing.outQuint};
    color: ${color.primary};
  }
`

const PlayButton = ({ isPlaying, onClick, ...rest }) => {
  const handleClick = () => {
    onClick()
  }
  return (
    <div {...rest}>
      {!isPlaying ? (
        <UnstyledButton type="button" onClick={handleClick}>
          ►
        </UnstyledButton>
      ) : (
        <UnstyledButton type="button" onClick={handleClick}>
          &#10074;&#10074;
        </UnstyledButton>
      )}
    </div>
  )
}

PlayButton.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
}

PlayButton.defaultProps = {
  onClick: () => {},
}

export default PlayButton
