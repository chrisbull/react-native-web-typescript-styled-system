import * as React from 'react'
import { StyleProp, ViewStyle } from 'react-native'

import { Box, BoxProps } from './Box'
import { SafeAreaView, SafeAreaViewProps } from './SafeAreaView'
import { ScrollView, ScrollViewProps } from './ScrollView'

export interface ScreenProps
  extends BoxProps,
    ScrollViewProps,
    SafeAreaViewProps {
  scrollable?: boolean
  safearea?: boolean
  contentContainerStyle?: StyleProp<ViewStyle>
}

export const Screen: React.FC<ScreenProps> = ({
  forceInset = { top: 'always', horizontal: 'never' },
  contentContainerStyle: contentContainerStyle,
  children,
  safearea,
  scrollable,
  ...props
}) => {
  /**
   * Wrap main content with a Box
   */
  let innerContents = (
    <Box bg="background" flex={1} {...props}>
      {children}
    </Box>
  )

  /**
   * Wrap in SafeAreaView if needed
   */
  if (safearea) {
    innerContents = (
      <SafeAreaView
        forceInset={forceInset}
        bg="background"
        flex={1}
        style={contentContainerStyle}
      >
        {innerContents}
      </SafeAreaView>
    )
  }

  /**
   * Return a wrapped with ScrollView if wanted
   */
  return scrollable ? (
    <ScrollView
      contentContainerStyle={contentContainerStyle}
      flex={1}
      bg="background"
    >
      {innerContents}
    </ScrollView>
  ) : (
    innerContents
  )
}
