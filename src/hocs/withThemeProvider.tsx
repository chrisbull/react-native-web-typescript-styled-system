import * as React from 'react'
import { ThemeProvider } from '../context/ThemeContext'
import { defaultTheme } from '../system'

export const withThemeProvider = (Component: any) => (props: any) => {
  return (
    <ThemeProvider defaultTheme={defaultTheme}>
      <Component {...props} />
    </ThemeProvider>
  )
}
