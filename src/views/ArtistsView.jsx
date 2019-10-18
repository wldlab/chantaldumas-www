// vendors
import React from "react"
import { css } from "@emotion/core"
import { hideVisually } from "polished"

const ArtistCard = ({ name, description }) => (
  <div>
    <h3>{name}</h3>

    <div
      dangerouslySetInnerHTML={{ __html: description }}
      css={css`
        font-size: ${35 / 25}em;
        line-height: ${50 / 35};
      `}
    />
  </div>
)

const ArtistsView = ({ artists }) => {
  return (
    <section>
      <h2
        css={css`
          ${hideVisually()}
        `}
      >
        Notes sur les artistes
      </h2>

      <div
        css={css`
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(542px, 1fr));
          grid-gap: 30px;
        `}
      >
        {artists.map(({ name, description }) => (
          <ArtistCard name={name} description={description} />
        ))}
      </div>
    </section>
  )
}

export default ArtistsView
