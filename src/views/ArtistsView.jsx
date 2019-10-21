// vendors
import React from "react"
import { css } from "@emotion/core"
import { hideVisually } from "polished"
import { useIntl } from "react-intl"
import { typography } from "../styles/styles"
import { forcingBreakingWord } from "../utils/forcing-breaking-word"
import mediaQuery from "../utils/media-query"

const ArtistCard = ({ name, description }) => (
  <div>
    <h3
      css={css`
        ${forcingBreakingWord};
      `}
    >
      {name}
    </h3>

    <div
      dangerouslySetInnerHTML={{ __html: description }}
      css={css`
        font-size: ${35 / typography.size.base}em;
        line-height: ${50 / 35};
      `}
    />
  </div>
)

const ArtistsView = ({ artists }) => {
  const { formatMessage: t } = useIntl()

  return (
    <section id={t({ id: "slug.notesOnTheArtists" })}>
      <h2
        css={css`
          ${hideVisually()}
        `}
      >
        {t({ id: "labels.notesOnTheArtists" })}
      </h2>

      <div
        css={css`
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260, 1fr));
          grid-gap: 30px;

          ${mediaQuery.greaterThen(1024)} {
            grid-template-columns: repeat(auto-fit, minmax(542px, 1fr));
          }
        `}
      >
        {artists.map(({ name, description }, key) => (
          <ArtistCard name={name} description={description} key={key} />
        ))}
      </div>
    </section>
  )
}

export default ArtistsView
