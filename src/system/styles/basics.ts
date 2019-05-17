import { color, ColorProps, compose, opacity, OpacityProps, overflow, OverflowProps } from 'styled-system'

export interface BasicsProps extends ColorProps, OpacityProps, OverflowProps {}

export const basics = compose(
  color,
  opacity,
  overflow,
)
