/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import React from "react"
import { IntlProvider } from "react-intl"

import fr from "./src/locales/fr.json"
import en from "./src/locales/en.json"

const messages = { fr, en }

export const wrapPageElement = ({ element, props }) => {
  const {
    pageContext: { langKey },
  } = props

  return (
    <IntlProvider locale={langKey} messages={messages[langKey]}>
      {element}
    </IntlProvider>
  )
}
