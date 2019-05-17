import { getTheme, Theme, ThemeMode, DefaultTheme } from '../system'
import { useEffect, useState } from './universal-react-hooks'
import { useAsyncStorage } from './useAsyncStorage'

export interface ThemeState {
  themeMode: ThemeMode
  theme: Theme
  hasThemeLoaded: boolean
}

const initialThemeState = {
  themeMode: 'light',
  hasThemeLoaded: false,
} as ThemeState

/**
 * Effect
 */
export const useTheme = () => {
  const [themeState, setThemeState] = useState<ThemeState>(initialThemeState)

  useEffect(() => {
    const { loadString } = useAsyncStorage('themeMode')

    if (!themeState.hasThemeLoaded) {
      loadString().then((themeMode: ThemeMode) => {
        console.log(`Cached Theme -> Loaded: ${themeMode}`)
        if (themeMode !== null) {
          setThemeState({
            ...themeState,
            themeMode,
            hasThemeLoaded: true,
          })
        }
      })
    }
  })

  const toggle = () => {
    const themeMode = themeState.themeMode === 'light' ? 'dark' : 'light'
    const { saveString } = useAsyncStorage('themeMode')

    saveString(themeMode).then(() =>
      console.log(`Cached Theme -> Saved: ${themeMode}`),
    )

    setThemeState({
      ...themeState,
      themeMode,
    })
  }

  const { themeMode } = themeState

  return { themeMode, toggle }
}
