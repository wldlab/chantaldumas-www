// vendors
import React from "react"
import { css } from "@emotion/core"
import { color } from "../styles/styles"
import { h1, WrapperStyles } from "../styles/global"

const Hero = () => {
  return (
    <header
      css={css`
        height: 100vh;
        background-color: ${color.primary};
        color: ${color.white};
      `}
    >
      <div
        css={css`
          ${WrapperStyles}
          display: flex;
          flex-flow: column;
          justify-content: space-between;
          height: 100%;
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
