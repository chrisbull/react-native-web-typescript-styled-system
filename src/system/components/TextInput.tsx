import { TextInputProps as RNTextInputProps } from 'react-native'

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
  typography,
  TypographyProps,
} from '../styles'

export interface TextInputProps
  extends BasicsProps,
    BordersProps,
    DimensionsProps,
    FlexboxesProps,
    PositionsProps,
    SpaceProps,
    TypographyProps,
    RNTextInputProps {}

export const TextInput = styled.TextInput<TextInputProps>(
  basics,
  borders,
  dimensions,
  flexboxes,
  positions,
  space,
  typography,
)
