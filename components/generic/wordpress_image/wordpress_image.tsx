import React from 'react'
import NextImage from 'next/image'
import cn from 'classnames'
import { WordpressImage } from './wordpressImage'

const WPImage = ({ image, aspectRatio, imageProps, className }: WordpressImage) => {
  const { dataUrl, mediaItemUrl, mediaDetails, focalPoint } = image
  return (
    <NextImage
      src={mediaItemUrl}
      width={mediaDetails.width}
      height={aspectRatio && mediaDetails.width ? mediaDetails.width * aspectRatio : mediaDetails.height}
      alt={image.altText}
      className={cn(className)}
      placeholder="blur"
      blurDataURL={dataUrl || mediaItemUrl}
      style={{
        aspectRatio,
        objectFit: 'cover',
        objectPosition: focalPoint,
      }}
      {...imageProps}
    />
  )
}

export default WPImage
