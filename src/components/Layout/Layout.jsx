import React from "react"
import PropTypes from "prop-types"
import { Global, css } from "@emotion/core"

import "../../Fonts/typographies.css"

import { globalStyle, WrapperStyles } from "../../styles/global"
import Player from "../Player"
import { PlayerProvider } from "../../context/PlayerContext"
import Hero from "../../views/Hero"
import { color } from "../../styles/styles"
import Navigation from "../Navigation/Navigation"

const Layout = ({ children }) => {
  return (
    <>
      <PlayerProvider>
        <Global styles={globalStyle} />
        <Hero />

        <Navigation />

        <main
          css={css`
            background: repeating-linear-gradient(
              ${color.white},
              ${color.primary} 3979px,
              ${color.white} 7958px
            );
          `}
        >
          <div
            css={css`
              ${WrapperStyles}
            `}
          >
            {children}
          </div>
        </main>

        <Player />
      </PlayerProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
