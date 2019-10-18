/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import React from "react"
import { IntlProvider, addLocaleData } from "react-intl"

// locales data
// import frLocaleData from "react-intl/locale-data/fr"
// import enLocaleData from "react-intl/locale-data/en"

import fr from "./src/locales/fr.json"
import en from "./src/locales/en.json"

// addLocaleData([...frLocaleData, ...enLocaleData])

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
