import { ScrollViewProps as RNScrollViewProps } from 'react-native'
import styled from 'styled-components/native'

import {
  basics,
  BasicsProps,
  borders,
  BordersProps,
  dimensions,
  DimensionsProps,
  flexboxes,
  FlexboxesProps,
  positions,
  PositionsProps,
  space,
  SpaceProps,
} from '../styles'

export interface ScrollViewProps
  extends BasicsProps,
    BordersProps,
    DimensionsProps,
    FlexboxesProps,
    PositionsProps,
    SpaceProps,
    RNScrollViewProps {}

export const ScrollView = styled.ScrollView<ScrollViewProps>(
  basics,
  borders,
  dimensions,
  flexboxes,
  positions,
  space,
)
