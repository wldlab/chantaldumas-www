import { css } from "@emotion/core"
import { typography, color, spacing } from "./styles"
import mediaQuery from "../utils/media-query"
import { between, normalize } from "polished"

export const bodyStyles = css`
  font-family: ${typography.type.primary};
  font-size: 14px;
  color: ${color.black};
  line-height: ${30 / typography.size.base};

  ${mediaQuery.greaterThen(1024)} {
    font-size: ${typography.size.base}px;
  }
`

export const htmlStyles = css`
  scroll-behavior: smooth;
`

// const fontsBreakpoint = sizes => {
//   return css`
//     ${typography.breakpoints.map((breakpoint, index) => {
//       return `
//         ${mediaQuery.greaterThen(breakpoint)} {
//           font-size: ${sizes[index] / typography.size.base[index]}em;
//         }
//       `
//     })}
//   `
// }

export const resetButtonStyle = css`
  appearance: none;
  border: none;
  background: none;
  padding: 0;
`

export const h1 = css`
  font-family: ${typography.type.display};
  font-weight: ${typography.weight.medium};
  line-height: 1;
  font-size: ${typography.size.h1[0] / typography.size.bases[0]}em;

  ${mediaQuery.greaterThen(typography.breakpoints[1])} {
    font-size: ${typography.size.h1[1] / typography.size.bases[1]}em;
  }
`

export const h2 = css`
  font-family: ${typography.type.display};
  font-weight: ${typography.weight.medium};
  line-height: 1;
  font-size: ${typography.size.h2[0] / typography.size.bases[0]}em;

  ${mediaQuery.greaterThen(typography.breakpoints[1])} {
    font-size: ${typography.size.h2[1] / typography.size.bases[1]}em;
  }
`

export const h3 = css`
  font-weight: ${typography.weight.regular};
  font-size: ${typography.size.h3[0] / typography.size.bases[0]}em;
  line-height: ${78 / 68};

  ${mediaQuery.greaterThen(typography.breakpoints[1])} {
    font-size: ${typography.size.h3[1] / typography.size.bases[1]}em;
  }
`

export const WrapperStyles = css`
  max-width: ${spacing.width[1]}px;
  margin: auto ${spacing.margin[0]}px;

  ${mediaQuery.greaterThen(spacing.breakpoints[1])} {
    margin: auto
      ${between(
        `${spacing.margin[0]}px`,
        `${spacing.margin[1]}px`,
        `${spacing.breakpoints[1]}px`,
        `${spacing.breakpoints[2]}px`
      )};
  }

  ${mediaQuery.greaterThen(spacing.breakpoints[2])} {
    margin: auto;
  }
`

export const globalStyle = css`
  ${normalize()};

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
