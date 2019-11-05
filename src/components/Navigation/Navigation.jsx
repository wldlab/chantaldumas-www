// vendors
import React, { useState } from "react"
import { useIntl } from "react-intl"
import { css } from "@emotion/core"
import {
  color,
  typography,
  spacing,
  transition,
  zIndices,
} from "../../styles/styles"
import mediaQuery from "../../utils/media-query"
import { between } from "polished"
import logoAvatar from "../../images/logo-avatar-clean.svg"
import BurgerButton from "../../images/BurgerButton"
import { resetButtonStyle } from "../../styles/global"
import closingX from "../../images/ClosingX.svg"

const breakpoint = 1024

export const OpenButtonBlock = ({ fill, onClick, ...rest }) => (
  <div
    css={css`
      position: fixed;
      top: 0;
      right: 0;
      margin-top: calc(0.55em + 27px);
      margin-right: 36px;

      ${mediaQuery.greaterThen(1024)} {
        margin-right: ${between("36px", "147px", "1024px", "1920px")};
      }

      ${mediaQuery.greaterThen(1920)} {
        margin-right: calc(50vw - ${spacing.width[1] / 2}px);
      }
    `}
    {...rest}
  >
    <button
      onClick={onClick}
      css={css`
        ${resetButtonStyle};
        width: 33px;
        height: 27px;
        cursor: pointer;

        ${mediaQuery.greaterThen(typography.breakpoints[1])} {
          width: 62px;
          height: 51px;
        }
      `}
    >
      <BurgerButton fill={fill} />
    </button>
  </div>
)

const Navigation = ({ onOpen, onClose }) => {
  const { formatMessage: t } = useIntl()
  const [visible, setVisible] = useState(false)

  const handleOpen = () => {
    setVisible(true)
  }
  const handleClose = () => {
    setVisible(false)
  }

  const AnckerLink = ({ to, children, ...props }) => (
    <a href={`#${to}`} onClick={handleClose} {...props}>
      {children}
    </a>
  )

  return (
    <div>
      <OpenButtonBlock
        onClick={handleOpen}
        css={css`
          z-index: ${zIndices.fixed - 2};
        `}
        fill={color.primary}
      />

      <nav
        css={css`
          display: grid;
          position: fixed;
          top: 0;
          bottom: 0;
          right: 0;
          grid-template-columns: auto auto;
          grid-template-rows: auto 1fr auto auto;
          color: ${color.white};
          background-color: ${color.primary};
          font-size: ${typography.size.l[0] / typography.size.bases[0]}em;
          padding: 27px 0 52px 61px;
          padding-right: 36px;
          z-index: ${zIndices.fixed};
          overflow: scroll;
          opacity: 0;
          pointer-events: none;
          transition: opacity ${transition.speed.default} ease-in-out;

          ${mediaQuery.greaterThen(typography.breakpoints[1])} {
            font-size: ${typography.size.l[1] / typography.size.bases[1]}em;
          }

          ${mediaQuery.greaterThen(1024)} {
            padding-right: ${between("36px", "147px", "1024px", "1920px")};
          }

          ${mediaQuery.greaterThen(1920)} {
            padding-right: calc(50vw - ${spacing.width[1] / 2}px);
          }

          ${mediaQuery.lessThen(breakpoint)} {
            left: 0;
            padding: 17px 36px;
          }

          a {
            color: inherit;
            text-decoration: none;
            line-height: ${60 / 45};
          }

          ${visible &&
            css`
              opacity: 1;
              pointer-events: auto;
            `}
        `}
      >
        <p
          css={css`
            grid-area: 1 / 1 / span 1 / span 1;
            font-family: ${typography.type.display};
            font-weight: ${typography.weight.medium};
            line-height: 1;
            font-size: ${typography.size.h1[0] / typography.size.l[0]}em;
            margin: 0;

            ${mediaQuery.greaterThen(typography.breakpoints[1])} {
              font-size: ${typography.size.h1[1] / typography.size.l[1]}em;
            }
          `}
        >
          Volume <br />1
        </p>

        <div
          css={css`
            grid-area: 1 / 2 / span 1 / span 1;
            justify-self: end;
          `}
        >
          <button
            onClick={handleClose}
            css={css`
              ${resetButtonStyle};
              margin-top: 0.55em;
              width: 27px;
              height: 27px;

              ${mediaQuery.greaterThen(typography.breakpoints[1])} {
                width: 51px;
                height: 51px;
              }

              img {
                width: 100%;
              }
            `}
          >
            <img src={closingX} alt="" />
          </button>
        </div>

        <ul
          css={css`
            list-style: none;
            padding: 0;
            grid-area: 2 / 1 / span 1 / span 2;
          `}
        >
          <li>
            <AnckerLink to={t({ id: "slug.audioWorks" })}>
              {t({ id: "labels.audioWorks" })}
            </AnckerLink>
          </li>
          <li>
            <AnckerLink to={t({ id: "slug.notesOnTheArtists" })}>
              {t({ id: "labels.notesOnTheArtists" })}
            </AnckerLink>
          </li>
          <li>
            <AnckerLink to={t({ id: "slug.openWindows" })}>
              {t({ id: "labels.openWindows" })}
            </AnckerLink>
          </li>
          <li>
            <AnckerLink to={t({ id: "slug.nothingButWater" })}>
              {t({ id: "labels.nothingButWater" })}
            </AnckerLink>
          </li>
          <li>
            <AnckerLink to={t({ id: "slug.archivedWorks" })}>
              {t({ id: "labels.archivedWorks" })}
            </AnckerLink>
          </li>
        </ul>

        <p
          css={css`
            grid-area: 3 / 1 / span 1 / span 2;
          `}
        >
          <a href="/">Volume 2</a>
        </p>

        <a
          href={t({ id: "slug.opositeLink" })}
          css={css`
            grid-area: 4 / 1 / span 1 / span 1;
            align-self: end;
          `}
        >
          {t({ id: "labels.opositeLangage" })}
        </a>

        <a
          href="https://avatarquebec.org/"
          css={css`
            grid-area: 4 / 2 / span 1 / span 1;
            width: ${91 / 45}em;
            justify-self: end;

            img {
              width: 100%;
            }
          `}
        >
          <img src={logoAvatar} alt="Le logo d'Avatar" />
        </a>
      </nav>
    </div>
  )
}

export default Navigation
