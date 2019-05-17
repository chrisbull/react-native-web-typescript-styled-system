import * as React from 'react'
import { ThemeProvider as StyledProvider } from 'styled-components/native'
import { useTheme } from '../hooks/useTheme'
import { DefaultTheme, getTheme, ThemeMode } from '../system'

export interface ThemeContextProps {
  themeMode: ThemeMode
  toggle: () => void
}

export const ThemeContext = React.createContext<ThemeContextProps>({
  themeMode: 'light',
  toggle: () => {},
})

export const ThemeProvider: React.FC<{
  children: any
  defaultTheme: DefaultTheme
}> = ({ children, defaultTheme }) => {
  const { themeMode, toggle } = useTheme()

  if (!defaultTheme) {
    console.error('You need to set a defaultTheme')
  }

  const theme = getTheme(themeMode, defaultTheme)

  return (
    <ThemeContext.Provider value={{ toggle, themeMode, theme }}>
      <StyledProvider theme={theme}>{children}</StyledProvider>
    </ThemeContext.Provider>
  )
}
