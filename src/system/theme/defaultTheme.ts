import { colors, darkColors, gradients } from './colors'

const borders = [
  0,
  '1px solid',
  '2px solid',
  '4px solid',
  '8px solid',
  '16px solid',
  '32px solid',
]
const space = [0, 4, 8, 16, 32, 64, 128, 256, 512]
const radii = [0, 4, 8, 16, 24, 32, '100%']
const widths = [16, 24, 32, 64, 128, 256]
const heights = [16, 24, 32, 64, 128, 256]
const sizes = [16, 24, 32, 64, 128, 256]
const maxWidths = [16, 32, 64, 128, 256, 512, 768, 1024, 1536]
const breakpoints = [32, 48, 64]
const fontSizes = [12, 14, 16, 20, 24, 36, 48, 80, 96]

export const fonts = {
  regular: {
    normal: {
      thin: 'Lato-Hairline',
      light: 'Lato-Light',
      normal: 'Lato-Regular',
      medium: 'Lato-Bold',
      bold: 'Lato-Bold',
      black: 'Lato-Black',
    },
    italic: {
      thin: 'Lato-HairlineItalic',
      light: 'Lato-LightItalic',
      normal: 'Lato-RegularItalic',
      medium: 'Lato-BoldItalic',
      bold: 'Lato-BoldItalic',
      black: 'Lato-BlackItalic',
    },
  },
}

const fontWeights = {
  thin: 100,
  ulraLight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  heavy: 800,
  black: 900,
}

const lineHeights = {
  solid: 1,
  title: 1.25,
  heading: 1.25,
  copy: 1.5,
  body: 1.75,
}

const letterSpacings = {
  normal: 'normal',
  tracked: '0.1em',
  tight: '-0.05em',
  mega: '0.25em',
}

const shadows = [
  '0px 0px 0px 0px rgba(0, 0, 0, 0.2)',
  '0px 2px 1px -1px rgba(0, 0, 0, 0.2)',
  '0px 3px 1px -2px rgba(0, 0, 0, 0.2)',
  '0px 3px 3px -2px rgba(0, 0, 0, 0.2)',
  '0px 2px 4px -1px rgba(0, 0, 0, 0.2)',
  '0px 3px 5px -1px rgba(0, 0, 0, 0.2)',
  '0px 3px 5px -1px rgba(0, 0, 0, 0.2)',
  '0px 4px 5px -2px rgba(0, 0, 0, 0.2)',
  '0px 5px 5px -3px rgba(0, 0, 0, 0.2)',
  '0px 5px 6px -3px rgba(0, 0, 0, 0.2)',
  '0px 6px 6px -3px rgba(0, 0, 0, 0.2)',
  '0px 6px 7px -4px rgba(0, 0, 0, 0.2)',
  '0px 7px 8px -4px rgba(0, 0, 0, 0.2)',
  '0px 7px 8px -4px rgba(0, 0, 0, 0.2)',
  '0px 7px 9px -4px rgba(0, 0, 0, 0.2)',
  '0px 8px 9px -5px rgba(0, 0, 0, 0.2)',
  '0px 8px 10px -5px rgba(0, 0, 0, 0.2)',
  '0px 8px 11px -5px rgba(0, 0, 0, 0.2)',
  '0px 9px 11px -5px rgba(0, 0, 0, 0.2)',
  '0px 9px 12px -6px rgba(0, 0, 0, 0.2)',
  '0px 10px 13px -6px rgba(0, 0, 0, 0.2)',
  '0px 10px 13px -6px rgba(0, 0, 0, 0.2)',
  '0px 10px 14px -6px rgba(0, 0, 0, 0.2)',
  '0px 11px 14px -7px rgba(0, 0, 0, 0.2)',
  '0px 11px 15px -7px rgba(0, 0, 0, 0.2)',
]

export const defaultTheme = {
  // StyledTheme BaseTheme
  breakpoints,
  colors,
  fontSizes,
  space,

  // StyledTheme Extras
  borders,
  fontWeights,
  fonts,
  heights,
  letterSpacings,
  lineHeights,
  maxWidths,
  radii,
  shadows,
  sizes,

  // Unused
  // borderStyles: {},
  // borderWidths: [],
  // buttons: {},
  // colorStyles: {},
  // maxHeights: [],
  // minHeights: [],
  // minWidths: [],
  // opacity: [],
  // textStyles: {},
  // zIndeces: [],

  // Custom
  widths,
  gradients,
  modes: {
    light: colors,
    dark: darkColors,
  },
}
