import { css } from "@emotion/core"
import { typography, color } from "./styles"
import mediaQuery from "../utils/media-query"

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
  background: repeating-linear-gradient(
    ${color.white},
    ${color.primary} 3979px,
    ${color.white} 7958px
  );
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
