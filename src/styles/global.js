import { css } from "@emotion/core"
import { typography, color } from "./styles"
import mediaQuery from "../utils/media-query"

export const bodyStyles = css`
  font-family: ${typography.type.primary};
  font-size: 18px;
  color: ${color.black};
  line-height: ${30 / typography.size.base};

  ${mediaQuery.greaterThen(1024)} {
    font-size: ${typography.size.base}px;
  }
`

export const htmlStyles = css`
  background: repeating-linear-gradient(
    ${color.white},
    ${color.primary} 3979px,
    ${color.white} 7958px
  );
`

export const h2 = css`
  font-size: ${250 / typography.size.base}em;
  font-family: ${typography.type.display};
  font-weight: ${typography.weight.medium};
  line-height: 1;
`

export const h3 = css`
  font-size: ${65 / typography.size.base}em;
  font-weight: ${typography.weight.regular};
`

export const globalStyle = css`
  html {
    ${htmlStyles};
  }

  body {
    ${bodyStyles};
  }

  h2 {
    ${h2};
  }

  h3 {
    ${h3};
  }
`
