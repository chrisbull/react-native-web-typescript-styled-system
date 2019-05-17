import {
  compose,
  height,
  HeightProps,
  maxHeight,
  MaxHeightProps,
  maxWidth,
  MaxWidthProps,
  minHeight,
  MinHeightProps,
  minWidth,
  MinWidthProps,
  size,
  SizeProps,
  width,
  WidthProps,
} from 'styled-system'

export interface DimensionsProps
  extends HeightProps,
    MaxHeightProps,
    MaxWidthProps,
    MinHeightProps,
    MinWidthProps,
    SizeProps,
    WidthProps {}

export const dimensions = compose(
  height,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  width,
  size,
)
