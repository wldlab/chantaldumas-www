export const color = {
  primary: "#B3FF96",
  white: "#fff",
  black: "#000",
}

export const spacing = {
  margin: [36, 147],
  gap: [10, 30],
  column: [68, 108],
  breakpoints: [0, 1024],
  width: [303, 1624],
}

export const typography = {
  type: {
    primary: '"Beatrice Regular"',
    display: '"Beatrice Display"',
  },
  weight: {
    regular: 400,
    medium: 500,
  },
  size: {
    base: 25,
    bases: [14, 25],
    h1: [47, 98],
    h2: [68, 250],
    h3: [30, 68],
    s: [15, 15],
    m: [18, 35],
    l: [23, 45],
    xxl: [45, 120],
  },
  breakpoints: [0, 1024],
}

// https://easings.net/en#
// https://developers.google.com/web/fundamentals/design-and-ux/animations/choosing-the-right-easing
export const transition = {
  speed: {
    superfast: `100ms`,
    fast: `250ms`,
    default: `400ms`,
    slow: `800ms`,
    superslow: `1200ms`,
  },
  easing: {
    inQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
    outQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
    inback: "cubic-bezier(0.6, -0.28, 0.735, 0.045)",
    outBack: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    inOutBack: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
  },
}
