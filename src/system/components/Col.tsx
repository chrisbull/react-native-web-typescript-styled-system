import { Box } from './Box'

export const Col = Box

Col.displayName = 'Col'
Col.defaultProps = {
  px: 3,
  flex: '1 1 auto',
}

// export const Col: React.FC<BoxProps> = (props) => <Box flex={1} pl={1} pr={1} {...props} />
