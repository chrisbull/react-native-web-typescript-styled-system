import {
  color,
  compose,
  fontSize,
  FontSizeProps,
  letterSpacing,
  LetterSpacingProps,
  lineHeight,
  LineHeightProps,
  textAlign,
  TextAlignProps,
} from 'styled-system'
import { defaultTheme, FontFamily, FontStyle, FontWeight } from '../theme'

export interface FontsStyleProps extends FontSizeProps {
  font?: FontFamily
  fontStyle?: FontStyle
  fontWeight?: FontWeight
}

export interface TypographyProps
  extends FontSizeProps,
    LetterSpacingProps,
    LineHeightProps,
    TextAlignProps,
    FontsStyleProps {
  muted?: boolean
}

export const typography = compose(
  color,
  fontSize,
  letterSpacing,
  lineHeight,
  textAlign,
  ({
    theme = defaultTheme,
    // font = 'regular',
    // fontStyle = 'normal',
    // fontWeight = 'normal',
  }) => ({
    fontFamily: theme.fonts.regular.normal.normal,
  }),
  props => props.muted && { opacity: 0.8 },
)
