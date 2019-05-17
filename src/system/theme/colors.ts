import { palette } from './palette'

const absolutes = {
  white: '#FFFFFF',
  white80: '#FFFFFF80',
  white60: '#FFFFFF60',
  white40: '#FFFFFF40',
  white20: '#FFFFFF20',
  white10: '#FFFFFF10',
  black: '#000000',
  black80: '#00000080',
  black60: '#00000060',
  black40: '#00000040',
  black20: '#00000020',
  black10: '#00000010',
  transparent: 'transparent',
}

const reversePalette = {
  ...palette,
  shade0: palette.shade9,
  shade1: palette.shade8,
  shade2: palette.shade7,
  shade3: palette.shade6,
  shade4: palette.shade5,
  shade5: palette.shade4,
  shade6: palette.shade3,
  shade7: palette.shade2,
  shade8: palette.shade1,
  shade9: palette.shade0,
}

export const colors = {
  ...absolutes,
  ...palette,
}

export const darkColors = {
  ...colors,
  ...reversePalette,
}

export const gradients = {
  default: ['#1DE9B6', '#1DC4E9'],
  secondary: ['#E5E7E8', '#AFB2B4'],
  orange: ['#f97f63', '#e54664'],
  blue: ['#4b92ff', '#1a2980'],
  pink: ['#ff2366', '#8d4de8'],
  purple: ['#7b1fa2', '#4527a0'],
  green: ['#38ef7d', '#11998e'],
}
