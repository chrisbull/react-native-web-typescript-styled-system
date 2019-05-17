import { colors, gradients } from './colors'
import { defaultTheme } from './defaultTheme'
import { theme } from './theme'

export type FontFamily = keyof typeof defaultTheme.fonts
export type FontStyle = keyof typeof defaultTheme.fonts.regular
export type FontWeight = keyof typeof defaultTheme.fonts.regular.normal

export type Color = keyof typeof colors

export type ColorTheme = keyof typeof defaultTheme.modes
export type ThemeMode = 'light' | 'dark'

export type GradientColor = keyof typeof gradients
export type DefaultTheme = typeof defaultTheme
export type Theme = typeof theme

export interface ThemedProps {
  theme: DefaultTheme
}

export type WithTheme<P> = P & ThemedProps
