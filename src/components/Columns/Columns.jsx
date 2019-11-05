// vendors
import React from "react"
import { css } from "@emotion/core"
import mediaQuery from "../../utils/media-query"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

const Columns = ({ columns, children, ...rest }) => (
  <div
    css={css`
      columns: 1;
      column-gap: 30px;

      ${mediaQuery.greaterThen(768)} {
        columns: ${columns};
      }

      p:first-child {
        margin-top: 0;
      }
    `}
    {...rest}
  >
    {children}
  </div>
)

Columns.propTypes = {
  children: PropTypes.node.isRequired,
  columns: PropTypes.number,
}

Columns.defaultProps = {
  columns: 2,
}

export const preventColumnBreakStyles = css`
  break-inside: avoid; /* Chrome, Safari */
  page-break-inside: avoid; /* Theoretically FF 20+ */
  display: table; /* Actually FF 20+ */
`

export const UnbreakableBlock = styled.div`
  ${preventColumnBreakStyles};
`

export default Columns
