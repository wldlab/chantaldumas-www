// vendors
import React from "react"
import { css } from "@emotion/core"
import { color, spacing, zIndices } from "../styles/styles"
import { h1, WrapperStyles } from "../styles/global"
import { OpenButtonBlock } from "../components/Navigation"
import mediaQuery from "../utils/media-query"

const breakpoint = 1024

const Hero = () => {
  return (
    <header
      css={css`
        height: 100vh;
        position: relative;
        color: ${color.primary};

        ${mediaQuery.lessThen(breakpoint)} {
          background-color: ${color.primary};
          color: ${color.white};
        }
      `}
    >
      <div
        css={css`
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          clip: rect(0, auto, auto, 0);
          pointer-events: none;
          z-index: ${zIndices.fixed - 1};

          ${mediaQuery.greaterThen(breakpoint)} {
            display: none;
          }
        `}
      >
        <OpenButtonBlock fill={color.white} />
      </div>

      <div
        css={css`
          ${WrapperStyles}
          display: flex;
          justify-content: space-between;
          height: 100%;
          flex-flow: column;
          box-sizing: border-box;

          ${mediaQuery.greaterThen(breakpoint)} {
            flex-flow: row-reverse;
            padding-right: ${spacing.gap[0] + spacing.column[1]}px;
          }
        `}
      >
        <p
          css={css`
            ${h1}
            margin-top: 17px;
            margin-bottom: 17px;
          `}
        >
          Volume <br />1
        </p>

        <h1
          css={css`
            ${h1}
            margin-top: 17px;
            margin-bottom: 17px;
          `}
        >
          Le <br />
          son refuge
        </h1>
      </div>
    </header>
  )
}

export default Hero
