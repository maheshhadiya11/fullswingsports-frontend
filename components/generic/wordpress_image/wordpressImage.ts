import { MediaItem } from '../../../interfaces/types'

export interface WordpressImage {
  image: MediaItem
  imageProps?: any
  className?: string
  aspectRatio?: number
}

export interface WordpressImageFields {
  altText: string
  mediaItemUrl: string
  mediaDetails: {
    height: number
    width: number
  }
  title: string
}
