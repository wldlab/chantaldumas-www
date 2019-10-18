import { css } from "@emotion/core"
import { typography, color } from "./styles"
import mediaQuery from "../utils/media-query"

export const bodyStyles = css`
  font-family: ${typography.type.primary};
  font-size: 18px;
  color: ${color.black};

  ${mediaQuery.greaterThen(1024)} {
    font-size: 25px;
  }
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
