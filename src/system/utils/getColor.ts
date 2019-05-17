import { Color } from '../theme'
import { themeGet } from './themeGet'

/**
 * Get the theme color from props
 */
export const getColor = (color: Color) => themeGet(t => t.colors[color])
