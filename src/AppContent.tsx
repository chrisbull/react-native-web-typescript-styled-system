import * as React from 'react'

import { Spinner } from './components/Spinner'
import { Button } from './components/Button'
import { Avatar } from './components/Avatar'

import { useContext } from './hooks/universal-react-hooks'

import { Text, Box } from './system'
import { ThemeContext } from './context/ThemeContext'

const ToggleButton = () => {
  const { toggle, themeMode } = useContext(ThemeContext)

  return (
    <Button onPress={toggle}>
      <Text color="shade9" p={2}>
        {themeMode === 'dark' ? 'Light' : 'Dark'}
      </Text>
    </Button>
  )
}

export const AppContent = () => (
  <Box flex={1} bg="shade0" center middle position="relative">
    <Box position="absolute" right="10%" top="10%">
      <ToggleButton />
    </Box>
    <Avatar
      size={80}
      overflow="hidden"
      source={{ uri: 'https://avatars3.githubusercontent.com/u/753112?v=4' }}
    />
    <Spinner color="shade9" />
  </Box>
)
