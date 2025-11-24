/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react'
import cn from 'classnames'
import MediaInterface from './media.interface'
import WPImage from '../wordpress_image/wordpress_image'

const Media = ({ media, className }: MediaInterface) => {
  return (
    <>
      {media?.mediaType === 'image' && media.image?.mediaItemUrl && (
        <WPImage
          image={media.image}
          className={cn('h-full w-full', className)}
        />
      )}
      {media?.mediaType === 'video' && media.videoId && (
        <video
          className={cn(className, 'h-full w-full object-cover object-center')}
          src={`https://content.jwplatform.com/videos/${media.videoId}-rATa83m7.mp4`}
          autoPlay
          playsInline
          muted
          loop
        />
      )}
    </>
  )
}

export default Media
