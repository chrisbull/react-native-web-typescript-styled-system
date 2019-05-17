import { Theme, ThemedProps } from '../theme'

export const themeGet = (accessor: (theme: Theme) => any) => (
  props: ThemedProps,
) => accessor(props.theme)
