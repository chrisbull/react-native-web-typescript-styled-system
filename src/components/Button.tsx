import styled from 'styled-components/native'

import {
  color,
  space,
  SpaceProps,
  ColorProps,
  borders,
  BordersProps,
  OverflowProps,
  overflow,
} from 'styled-system'

interface ButtonProps
  extends SpaceProps,
    ColorProps,
    BordersProps,
    OverflowProps {}

export const Button = styled.TouchableHighlight<ButtonProps>(
  space,
  color,
  borders,
  overflow,
)

Button.defaultProps = {
  borderRadius: 1,
  overflow: 'hidden',
  py: 2,
  px: 3,
  bg: 'accent1',
}
