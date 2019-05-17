import {
  bottom,
  BottomProps,
  compose,
  left,
  LeftProps,
  position,
  PositionProps,
  right,
  RightProps,
  top,
  TopProps,
  zIndex,
  ZIndexProps,
} from 'styled-system'

export interface PositionsProps extends BottomProps, LeftProps, PositionProps, RightProps, TopProps, ZIndexProps {}

export const positions = compose(
  bottom,
  left,
  position,
  right,
  top,
  zIndex,
)
