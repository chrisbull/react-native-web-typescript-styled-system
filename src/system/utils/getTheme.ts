import { defaultTheme, Theme, ThemeMode } from '../theme'

/**
 * Get Theme Props based on mode
 * @param mode dork or light mode
 */
export const getTheme = (mode: ThemeMode, theme: Theme = defaultTheme) => ({
  ...theme,
  colors: (theme.modes && theme.modes[mode]) || theme.modes.light || undefined,
})
