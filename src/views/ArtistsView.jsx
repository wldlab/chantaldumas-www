// vendors
import React from "react"
import { css } from "@emotion/core"
import { hideVisually } from "polished"
import { useIntl } from "react-intl"
import { typography } from "../styles/styles"

const ArtistCard = ({ name, description }) => (
  <div>
    <h3>{name}</h3>

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
          grid-template-columns: repeat(auto-fit, minmax(542px, 1fr));
          grid-gap: 30px;
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
