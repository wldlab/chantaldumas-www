// vendors
import React from "react"
import { css } from "@emotion/core"
import PlayButton from "../PlayButton/PlayButton"
import { typography } from "../../styles/styles"
import { forcingBreakingWord } from "../../utils/forcing-breaking-word"

const AlbumCard = ({ title, children, tracks }) => {
  return (
    <div
      css={css`
        display: grid;
        grid-gap: 30px;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        max-width: 1348px;
        margin: auto;
      `}
    >
      <div
        css={css`
          display: flex;
          flex-flow: column;
        `}
      >
        <p
          css={css`
            font-family: ${typography.type.display};
            font-size: ${120 / typography.size.base}em;
            line-height: ${140 / 120};
            font-weight: ${typography.weight.medium};
            margin: 0;
            ${forcingBreakingWord}
          `}
        >
          {title}
        </p>

        <PlayButton
          css={css`
            font-size: ${120 / typography.size.base}em;
          `}
        />
      </div>

      <div>{children}</div>
    </div>
  )
}

AlbumCard.defaultProps = {
  tracks: [],
}

export default AlbumCard
