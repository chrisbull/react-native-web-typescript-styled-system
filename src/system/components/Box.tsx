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

export interface BoxProps
  extends BasicsProps,
    BordersProps,
    DimensionsProps,
    FlexboxesProps,
    PositionsProps,
    SpaceProps {
  center?: boolean
  middle?: boolean
  space?: 'between' | 'around' | 'evenly'
}

export const Box = styled.View<BoxProps>(
  basics,
  borders,
  dimensions,
  flexboxes,
  positions,
  space,
  props => props.center && { alignItems: 'center' },
  props => props.middle && { justifyContent: 'center' },
  props => props.space && { justifyContent: `space-${props.space}` },
)
