import { typography } from "../styles/styles"
import styled from "@emotion/styled"
import { paddedStyled } from "../components/Padded"
import { forcingBreakingWord } from "../utils/forcing-breaking-word"

export const OpenWindowWrapper = styled.div`
  ${paddedStyled}
  max-width: 1348px;
  margin: auto;
  font-size: ${45 / typography.size.base}em;
`

export const OpenWindowName = styled.p`
  font-size: ${68 / typography.size.base}em;
  line-height: ${78 / 68};
`

export const SectionArtistName = styled.p`
  font-size: ${68 / typography.size.base}em;
  line-height: ${78 / 68};
`

export const SectionTitle = styled.h2`
  ${forcingBreakingWord};
`
