// vendors
import React from "react"
import { css } from "@emotion/core"

export const paddedStyled = css`
  max-width: 1348px;
  margin: auto;
`

const padded = ({ children, ...rest }) => {
  return (
    <div
      css={css`
        ${paddedStyled}
      `}
      {...rest}
    >
      {children}
    </div>
  )
}

export default padded
