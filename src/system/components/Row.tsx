import { Flex } from './Flex'

export const Row = Flex

Row.displayName = 'Row'
Row.defaultProps = {
  mx: -3,
  flexWrap: 'wrap',
  flexDirection: 'row',
}

// export const Row: React.FC<BoxProps> = (props) => <Box row wrap {...props} />
