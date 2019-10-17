import React from "react"
import PropTypes from "prop-types"
import { Global, css } from "@emotion/core"

import "../../Fonts/typographies.css"

import { globalStyle } from "../../styles/global"

const Layout = ({ children }) => {
  return (
    <>
      <Global styles={globalStyle} />
      <div
        css={css`
          max-width: 1624px;
          margin: auto;
        `}
      >
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
