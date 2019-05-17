import { SafeAreaViewProps as RNSafeAreaViewProps } from 'react-native-safe-area-view'
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

export interface SafeAreaViewProps
  extends BasicsProps,
    BordersProps,
    DimensionsProps,
    FlexboxesProps,
    PositionsProps,
    SpaceProps,
    RNSafeAreaViewProps {}

export const SafeAreaView = styled.SafeAreaView<SafeAreaViewProps>(
  basics,
  borders,
  dimensions,
  flexboxes,
  positions,
  space,
)
