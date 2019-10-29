// vendors
import React, { useContext } from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import PlayButton from "../PlayButton/PlayButton"
import { typography, color } from "../../styles/styles"
import { forcingBreakingWord } from "../../utils/forcing-breaking-word"
import Padded from "../Padded"
import mediaQuery from "../../utils/media-query"
import PlayerContext from "../../context/PlayerContext"
import PropTypes from "prop-types"

const StyledWrapper = styled(Padded)`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(303px, 1fr));
`

const StyledButton = styled.button`
  appearance: none;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 1em;

  :hover {
    color: ${color.primary};
  }
`

const AlbumCard = ({ title, children, slug, tracks }) => {
  const player = useContext(PlayerContext)

  const isPlaying =
    player.currentAlbum === slug && player.playStatus === "PLAYING"

  const handlePlayClick = () => {
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

  const handleClickOnTrack = index => {
    if (
      player.currentAlbum === slug &&
      player.playStatus === "PAUSED" &&
      player.currentPlaying === index
    ) {
      player.play()

      return
    }

    if (player.currentAlbum === slug && player.currentPlaying !== index) {
      player.changeCurrentPlaying(index)

      return
    }

    player.updatePlaylist(slug, tracks, index)
  }

  return (
    <StyledWrapper padded>
      <div
        id={slug}
        css={css`
          display: flex;
          flex-wrap: wrap;
        `}
      >
        <div
          css={css`
            flex-basis: 100%;
          `}
        >
          <p
            css={css`
              font-family: ${typography.type.display};
              line-height: ${140 / 120};
              font-weight: ${typography.weight.medium};
              margin: 0;

              font-size: ${typography.size.xxl[0] / typography.size.bases[0]}em;

              ${mediaQuery.greaterThen(typography.breakpoints[1])} {
                font-size: ${typography.size.xxl[1] /
                  typography.size.bases[1]}em;
              }
              ${forcingBreakingWord};
            `}
          >
            {title}
          </p>
        </div>

        <div
          css={css`
            flex-basis: 100%;
          `}
        >
          {tracks.length > 0 && (
            <PlayButton
              onClick={handlePlayClick}
              isPlaying={isPlaying}
              css={css`
                font-size: ${120 / typography.size.base}em;
              `}
            />
          )}
        </div>

        <div
          css={css`
            align-self: flex-end;
            flex-basis: 100%;
          `}
        >
          {tracks.length > 1 && (
            <ul
              css={css`
                list-style: none;
                margin-right: -0.5em;
                margin-left: -0.5em;
                padding: 0;

                li {
                  display: inline-block;
                  padding: 1em 0.5em;
                }
              `}
            >
              {tracks.map((track, index) => (
                <li>
                  <StyledButton
                    type="button"
                    onClick={() => handleClickOnTrack(index)}
                    current={
                      index === player.currentPlaying &&
                      slug === player.currentAlbum
                    }
                    disabled={
                      index === player.currentPlaying &&
                      slug === player.currentAlbum
                    }
                  >
                    {index + 1}
                  </StyledButton>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div>{children}</div>
    </StyledWrapper>
  )
}

AlbumCard.propTypes = {
  tracks: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        src: PropTypes.string.isRequired,
        type: PropTypes.oneOf([
          "audio/mpeg",
          "audio/ogg",
          "audio/wav",
          "audio/ogg; codecs=opus",
          "audio/ogg; codecs=vorbis",
        ]).isRequired,
      })
    )
  ),
}

AlbumCard.defaultProps = {
  tracks: [],
}

export default AlbumCard
