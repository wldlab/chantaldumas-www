// vendors
import React, { useContext, useState } from "react"
import { useIntl } from "react-intl"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import PlayerContext from "../context/PlayerContext"
import { typography, color, transition } from "../styles/styles"
import mediaQuery from "../utils/media-query"
import { resetButtonStyle } from "../styles/global"

const breakpoint = 1024

const AudioWorkPart = ({
  title,
  slug,
  tracks,
  duration,
  artist,
  year,
  children,
}) => {
  const { formatMessage: t } = useIntl()
  const player = useContext(PlayerContext)
  const [visible, setVisible] = useState(false)

  const isPlaying =
    player.currentAlbum === slug && player.playStatus === "PLAYING"

  const handleClick = () => {
    if (player.currentAlbum === slug && player.playStatus === "PAUSED") {
      player.play()

      return
    }

    if (player.currentAlbum === slug && player.playStatus === "PLAYING") {
      player.pause()

      return
    }

    player.updatePlaylist(slug, tracks, 0)
  }

  const handleToggleNote = () => {
    setVisible(!visible)
  }

  const ContentWrapper = styled.div`
    ${mediaQuery.greaterThen(breakpoint)} {
      position: absolute;
      right: 0;
      width: 50%;
      opacity: 0;
      pointer-events: none;
      top: 0.5em;

      ${isPlaying &&
        css`
          opacity: 1;
        `};
    }
  `

  const PlayButton = styled.button`
    ${resetButtonStyle};

    line-height: 1;
    font-size: ${56 / typography.size.bases[0]}em;
    font-family: ${typography.type.display};
    font-weight: medium;
    cursor: pointer;
    color: ${isPlaying && color.primary};
    text-align: left;

    transition: color ${transition.speed.fast} ${transition.easing.inQuint};

    :hover {
      transition: color ${transition.speed.fast} ${transition.easing.outQuint};
      color: ${color.primary};
    }

    ${mediaQuery.greaterThen(typography.breakpoints[1])} {
      font-size: ${250 / typography.size.bases[1]}em;
    }

    ${mediaQuery.greaterThen(breakpoint)} {
      :hover + ${ContentWrapper} {
        opacity: 1;
      }
    }
  `

  const Wrapper = styled.div`
    position: relative;
    margin-top: 40px;
    margin-bottom: 40px;
  `

  return (
    <Wrapper>
      <PlayButton onClick={handleClick}>
        {artist} <span>{!isPlaying ? "►" : <>&#10074;&#10074;</>}</span>
      </PlayButton>

      <ContentWrapper>
        <div
          css={css`
            font-size: ${18 / typography.size.bases[0]}em;

            ${mediaQuery.greaterThen(typography.breakpoints[1])} {
              font-size: ${45 / typography.size.bases[1]}em;
            }
          `}
        >
          <p
            css={css`
              margin-bottom: 0;
            `}
          >
            {title}&nbsp;({year})
          </p>
          <p
            css={css`
              margin-top: 0;
            `}
          >
            {t({ id: "labels.duration" })}: {duration}
          </p>
        </div>

        {children && (
          <div>
            <button
              onClick={handleToggleNote}
              css={css`
                ${resetButtonStyle};
                font-size: ${18 / typography.size.bases[0]}em;
                cursor: pointer;

                ${mediaQuery.greaterThen(breakpoint)} {
                  display: none;
                }
              `}
            >
              {t({ id: "labels.notesOnThePiece" })} {!visible ? "+" : "-"}
            </button>

            <div
              css={css`
                display: ${visible ? "block" : "none"};

                ${mediaQuery.lessThen(breakpoint)} {
                  margin-top: 24px;
                }
                ${mediaQuery.greaterThen(breakpoint)} {
                  display: block;
                  columns: 2;
                  column-gap: 30px;
                }
              `}
            >
              <div
                css={css`
                  font-size: 15px;

                  *:first-child {
                    margin-top: 0;
                  }
                `}
              >
                {children}
              </div>

              <button
                onClick={handleToggleNote}
                css={css`
                  ${resetButtonStyle};
                  font-size: ${18 / typography.size.bases[0]}em;
                  cursor: pointer;
                  margin-top: 27px;

                  ${mediaQuery.greaterThen(breakpoint)} {
                    display: none;
                  }
                `}
              >
                {t({ id: "labels.close" })} -
              </button>
            </div>
          </div>
        )}
      </ContentWrapper>
    </Wrapper>
  )
}

export default AudioWorkPart
