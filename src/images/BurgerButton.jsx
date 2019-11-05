// vendors
import React from "react"

const BurgerButton = ({ fill, ...rest }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 62 50.82" {...rest}>
    <g fill={fill}>
      <rect width="62" height="10.164" transform="translate(0 0)" />
      <rect width="62" height="10.164" transform="translate(0 20.328)" />
      <rect width="62" height="10.164" transform="translate(0 40.656)" />
    </g>
  </svg>
)

export default BurgerButton
