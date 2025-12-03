import { MediaItem } from 'interfaces/types'

export interface MediaItemInterface {
  mediaType: 'image' | 'video' | string
  image?: MediaItem
  videoId?: string | undefined
}

export default interface MediaInterface {
  media: MediaItemInterface
  mediamobile?: MediaItemInterface
  className?: string
}
