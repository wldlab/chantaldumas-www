// vendors
import React from "react"
import { css } from "@emotion/core"
import { spacing, typography } from "../../styles/styles"
import mediaQuery from "../../utils/media-query"

const GridColumns = ({ children, ...rest }) => {
  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: ${spacing.gap[0] / typography.size.bases[0]}rem;

        ${mediaQuery.greaterThen(typography.breakpoints[1])} {
          grid-gap: ${spacing.gap[1] / typography.size.bases[1]}rem;
        }
      `}
      {...rest}
    >
      {children}
    </div>
  )
}

export default GridColumns

export const Column = ({ children, start, ...rest }) => (
  <div
    css={css`
      grid-column: ${start} / span 1;
    `}
    {...rest}
  >
    {children}
  </div>
)
