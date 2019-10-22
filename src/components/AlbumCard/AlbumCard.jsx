// vendors
import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import PlayButton from "../PlayButton/PlayButton"
import { typography } from "../../styles/styles"
import { forcingBreakingWord } from "../../utils/forcing-breaking-word"
import Padded from "../Padded"
import mediaQuery from "../../utils/media-query"

const StyledWrapper = styled(Padded)`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(303px, 1fr));
`

const AlbumCard = ({ title, children, tracks }) => {
  return (
    <StyledWrapper padded>
      <div
        css={css`
          display: flex;
          flex-flow: column;
        `}
      >
        <p
          css={css`
            font-family: ${typography.type.display};
            /* font-size: ${120 / typography.size.base}em; */
            line-height: ${140 / 120};
            font-weight: ${typography.weight.medium};
            margin: 0;

            font-size: ${typography.size.xxl[0] / typography.size.bases[0]}em;

            ${mediaQuery.greaterThen(typography.breakpoints[1])} {
              font-size: ${typography.size.xxl[1] / typography.size.bases[1]}em;
            }
            ${forcingBreakingWord};
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
    </StyledWrapper>
  )
}

AlbumCard.defaultProps = {
  tracks: [],
}

export default AlbumCard
