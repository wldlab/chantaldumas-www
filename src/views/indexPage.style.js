import { typography } from "../styles/styles"
import styled from "@emotion/styled"
import { paddedStyled } from "../components/Padded"
import { forcingBreakingWord } from "../utils/forcing-breaking-word"
import { h3 } from "../styles/global"
import mediaQuery from "../utils/media-query"

export const OpenWindowWrapper = styled.div`
  ${paddedStyled}

  font-size: ${typography.size.l[0] / typography.size.bases[0]}em;

  ${mediaQuery.greaterThen(typography.breakpoints[1])} {
    font-size: ${typography.size.l[1] / typography.size.bases[1]}em;
  }
`

export const OpenWindowName = styled.p`
  ${h3};
`

export const SectionArtistName = styled.p`
  ${h3};
  margin-top: ${47 / typography.size.h3[0]}em;
  margin-bottom: ${110 / typography.size.h3[0]}em;
`

export const SectionTitle = styled.h2`
  ${forcingBreakingWord};
  margin-top: ${76 / typography.size.h2[0]}em;
  margin-bottom: ${47 / typography.size.h2[0]}em;
`

export const OpenWindowBlock = styled.div`
  margin-top: ${110 / typography.size.bases[0]}em;
  margin-bottom: ${110 / typography.size.bases[0]}em;
`

export const NothingButWaterFontBig = styled.div`
  font-size: ${typography.size.h3[0] / typography.size.bases[0]}em;

  ${mediaQuery.greaterThen(typography.breakpoints[1])} {
    font-size: ${typography.size.h3[1] / typography.size.bases[1]}em;
  }
`

export const NothingButWaterFontMedium = styled.div`
  font-size: ${typography.size.l[0] / typography.size.bases[0]}em;

  ${mediaQuery.greaterThen(typography.breakpoints[1])} {
    font-size: ${typography.size.l[1] / typography.size.bases[1]}em;
  }
`
