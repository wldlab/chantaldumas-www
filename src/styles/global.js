import { css } from "@emotion/core"
import { typography, color } from "./styles"

export const bodyStyles = css`
  font-family: ${typography.type.primary};
  font-size: 25px;
  color: ${color.black};
`

export const htmlStyles = css`
  background-color: ${color.white};
`

export const globalStyle = css`
  html {
    ${htmlStyles}
  }

  body {
    ${bodyStyles}
  }
`
