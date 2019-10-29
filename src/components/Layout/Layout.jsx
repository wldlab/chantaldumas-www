import React from "react"
import PropTypes from "prop-types"
import { Global, css } from "@emotion/core"

import "../../Fonts/typographies.css"

import { globalStyle } from "../../styles/global"
import mediaQuery from "../../utils/media-query"
import { between } from "polished"
import Player from "../Player"
import { PlayerProvider } from "../../context/PlayerContext"

const Layout = ({ children }) => {
  return (
    <>
      <PlayerProvider>
        <Global styles={globalStyle} />
        <div
          css={css`
            max-width: 1624px;
            margin: auto 36px;

            ${mediaQuery.greaterThen(1024)} {
              margin: auto ${between("36px", "147px", "1024px", "1920px")};
            }

            ${mediaQuery.greaterThen(1920)} {
              margin: auto;
            }
          `}
        >
          <main>{children}</main>
        </div>

        <Player />
      </PlayerProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
