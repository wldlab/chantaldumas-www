// vendors
import React from "react"
import { css } from "@emotion/core"
import { typography, color } from "../../styles/styles"

const StepWithBackgroundNumber = ({ children, id, ...rest }) => (
  <div
    css={css`
      position: relative;
      min-height: 100vh;
      display: flex;
      align-items: center;
    `}
  >
    <div
      css={css`
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 0;
      `}
    >
      <div
        css={css`
          position: sticky;
          top: 0;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: ${400 / typography.size.base}rem;
          font-family: ${typography.type.display};
          font-weight: ${typography.weight.medium};
          color: ${color.primary};
        `}
      >
        {id}
      </div>
    </div>

    <div
      css={css`
        width: 100%;
        z-index: 1;
      `}
    >
      {children}
    </div>
  </div>
)

export default StepWithBackgroundNumber
