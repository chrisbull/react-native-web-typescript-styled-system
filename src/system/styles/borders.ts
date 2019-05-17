import {
  borders as bordersSystem,
  BordersProps as BordersSystemProps,
  boxShadow,
  BoxShadowProps,
  compose,
} from 'styled-system'

export interface BordersProps extends BordersSystemProps, BoxShadowProps {}

export const borders = compose(
  bordersSystem,
  boxShadow,
)
