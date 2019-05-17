import * as React from 'react'
import { compose } from 'recompose'
import withHooks from 'react-with-hooks'

import { AppContent } from './AppContent'
import { withThemeProvider } from './hocs/withThemeProvider'

const AppInner = compose(
  withHooks,
  withThemeProvider,
)(AppContent)

const App = () => {
  return (
    <React.Fragment>
      <AppInner />
    </React.Fragment>
  )
}

export default App
