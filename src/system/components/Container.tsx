import styled from 'styled-components/native'
import { Box } from './Box'

export const Container = styled(Box)`
  /* max-width: 1024px; */
`

Container.displayName = 'Container'
Container.defaultProps = {
  mx: 'auto',
}
