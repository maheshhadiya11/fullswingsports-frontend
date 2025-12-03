import React from 'react'
import NextImage from 'next/image'
import cn from 'classnames'
import { WordpressImage } from './wordpressImage'

// const WPImage = ({ image, aspectRatio, imageProps, className }: WordpressImage) => {
//   const { dataUrl, mediaItemUrl, mediaDetails, focalPoint } = image
//   return (
//     <NextImage
//       src={mediaItemUrl}
//       width={mediaDetails.width}
//       height={aspectRatio && mediaDetails.width ? mediaDetails.width * aspectRatio : mediaDetails.height}
//       alt={image.altText}
//       className={cn(className)}
//       placeholder="blur"
//       blurDataURL={dataUrl || mediaItemUrl}
//       style={{
//         aspectRatio,
//         objectFit: 'cover',
//         objectPosition: focalPoint,
//       }}
//       {...imageProps}
//     />
//   )
// }

// export default WPImage

const WPImage = ({
  image,
  aspectRatio,
  imageProps,
  className,
  priority = false,
  quality = 85,
  sizes = '(max-width: 768px) 100vw, 50vw'
}: WordpressImage & {
  priority?: boolean;
  quality?: number;
  sizes?: string;
}) => {
  const { dataUrl, mediaItemUrl, mediaDetails, focalPoint, altText = '' } = image

  // Return null if there's no valid image source
  if (!mediaItemUrl) return null

  // Calculate dimensions considering aspect ratio
  const width = mediaDetails?.width || 500
  const height = aspectRatio
    ? width * aspectRatio
    : mediaDetails?.height || width * 0.75 // Default 4:3 if no height

  // Only enable blur placeholder if we have a valid dataUrl
  const shouldUseBlur = dataUrl && dataUrl.startsWith('data:image')

  return (
    <NextImage
      src={mediaItemUrl}
      width={width}
      height={height}
      alt={altText}
      className={cn(className)}
      placeholder={shouldUseBlur ? 'blur' : undefined}
      blurDataURL={shouldUseBlur ? dataUrl : undefined}
      priority={priority}
      quality={quality}
      sizes={sizes}
      style={{
        aspectRatio: aspectRatio ? String(aspectRatio) : undefined,
        objectFit: 'cover',
        objectPosition: focalPoint || 'center',
        ...imageProps?.style
      }}
      {...imageProps}
    />
  )
}

export default WPImage
