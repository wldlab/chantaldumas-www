// vendors
import React from "react"
import { css, keyframes } from "@emotion/core"
import { color } from "../../styles/styles"

const animateStripes = keyframes`
  100% { background-position: -500% 0px; }
`

const Progress = ({ value, loading }) => {
  return (
    <progress
      max="1"
      value={value}
      css={css`
        appearance: none;
        border: none;
        display: block;
        opacity: 0;

        width: 100%;
        height: 10px;
        background-color: rgba(0, 0, 0, 0);
        color: ${color.primary};
        margin: 0;
        line-height: 0;

        ::-webkit-progress-bar,
        ::-moz-progress-bar {
          background: ${color.primary};

          ${loading &&
            css`
              background: repeating-linear-gradient(
                90deg,
                ${color.primary},
                ${color.white},
                ${color.primary}
              );
              background-size: 500%;
              animation: ${animateStripes} 10s linear infinite;
            `}
        }

        :not([value]) {
          opacity: ${loading ? "1" : "0"};
        }
      `}
    >
      {value * 100} %
    </progress>
  )
}

export default Progress
