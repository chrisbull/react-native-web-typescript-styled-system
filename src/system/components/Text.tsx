import { TextProps as RNTextProps } from 'react-native'
import styled from 'styled-components/native'

import {
  basics,
  BasicsProps,
  dimensions,
  DimensionsProps,
  positions,
  PositionsProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from '../styles'

export interface TextProps
  extends BasicsProps,
    DimensionsProps,
    PositionsProps,
    SpaceProps,
    TypographyProps,
    RNTextProps {}

export const Text = styled.Text<TextProps>(
  basics,
  dimensions,
  positions,
  space,
  typography,
)
