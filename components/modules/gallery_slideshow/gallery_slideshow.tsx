import React, { FunctionComponent } from 'react'
import GallerySlideshowClient, { IGallerySlideshowClient } from './gallery_slideshow_client'

export const typename = 'Flexiblelayout_PageBuilder_GallerySlideshow'

const GallerySlideshowModule: FunctionComponent<{
  module: IGallerySlideshowClient
  currentColor?: boolean
  modal?: boolean
  className?: string
}> = (props) => {
  return <GallerySlideshowClient {...props} />
}

export default GallerySlideshowModule
