import * as React from 'react'
import * as Animatable from 'react-native-animatable'
import { withTheme } from 'styled-components/native'

import { G, Path, Svg } from 'react-native-svg'
import { Color, WithTheme } from './system'

export const spinnerSizes: Record<string, number> = {
  small: 20,
  regular: 30,
  large: 50,
}

export type SpinnerSize = keyof typeof spinnerSizes

interface SpinnerProps {
  size?: SpinnerSize
  color?: Color
}

export const Spinner = withTheme(
  ({ theme, color = 'shade9', size = 'regular' }: WithTheme<SpinnerProps>) => (
    <Animatable.View
      animation="rotate"
      iterationCount="infinite"
      duration={700}
      style={{
        height: spinnerSizes[size],
        width: spinnerSizes[size],
      }}
    >
      <Svg
        width={spinnerSizes[size] || size}
        height={spinnerSizes[size] || size}
        viewBox="0 0 36 36"
      >
        <G fill={theme.colors[color]}>
          <Path
            d="M4.6707777,5.90266258 L6.97536849,7.8282606 C1.53901626,13.7122312 1.67835952,22.891563 7.39339828,28.6066017 C13.2512627,34.4644661 22.7487373,34.4644661 28.6066017,28.6066017 C34.3216405,22.891563 34.4609837,13.7122312 29.0246315,7.8282606 L31.3292223,5.90266258 C37.7512931,12.9673502 37.5508597,23.9049844 30.7279221,30.7279221 C23.6984848,37.7573593 12.3015152,37.7573593 5.27207794,30.7279221 C-1.55085968,23.9049844 -1.75129309,12.9673502 4.6707777,5.90266258 Z"
            opacity=".1"
          />
          <Path
            d="M4.6707777,5.90266258 C4.86514489,5.68884626 5.06557831,5.47857757 5.27207794,5.27207794 C12.3015152,-1.75735931 23.6984848,-1.75735931 30.7279221,5.27207794 C30.9344217,5.47857757 31.1348551,5.68884626 31.3292223,5.90266258 L29.0246315,7.8282606 C28.8887706,7.68121317 28.7494273,7.5362239 28.6066017,7.39339828 C22.7487373,1.53553391 13.2512627,1.53553391 7.39339828,7.39339828 C7.25057267,7.5362239 7.1112294,7.68121317 6.97536849,7.8282606 L4.6707777,5.90266258 Z"
            opacity=".8"
          />
        </G>
      </Svg>
    </Animatable.View>
  ),
)
