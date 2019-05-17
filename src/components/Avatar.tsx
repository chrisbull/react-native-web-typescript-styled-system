import { Image, ImageProps } from '../system'

export interface AvatarProps extends ImageProps {}

export const Avatar = Image

Avatar.displayName = 'Avatar'
Avatar.defaultProps = {
  size: 40,
  borderRadius: 10,
}
