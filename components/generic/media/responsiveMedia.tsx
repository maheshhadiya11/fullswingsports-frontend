'use client'

import cn from 'classnames'
import { useEffect, useState } from 'react'
import WPImage from '../wordpress_image/wordpress_image'
import MediaInterface from './media.interface'

const ResponsiveMediaFile = ({ media, mediamobile, className }: MediaInterface) => {
  const [isMobile, setIsMobile] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const handleResize = () => setIsMobile(window.innerWidth <= 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Safely get the current image with fallbacks

  const getCurrentImage = () => {
    if (!isMounted) return media // SSR fallback

    // Mobile: Check if mobile media exists and has an image
    if (isMobile) {
      // Show mobile image if available, otherwise fallback to mobile video or desktop media
      if (mediamobile?.image?.mediaItemUrl) {
        return mediamobile // Show mobile image
      }
      if (mediamobile?.videoId) {
        return mediamobile // Show mobile video
      }
      // Fallback to desktop media if no mobile image/video is available
      return media
    }

    // Desktop: If no image on desktop, show video, otherwise return desktop media
    if (!media?.image?.mediaItemUrl && media?.videoId) {
      return media // Show desktop video if image is missing
    }

    return media // Default to desktop media
  }

  // Call the function once
  const currentImage = getCurrentImage()

  // If no valid image or video, return null
  if (!currentImage?.image?.mediaItemUrl && !currentImage?.videoId) {
    return null
  }

  // If there's no image and a valid videoId, render the video
  if (!currentImage?.image?.mediaItemUrl && currentImage?.videoId) {
    return (
      <video
        className={cn(className, 'h-full w-full object-cover object-center')}
        src={`https://content.jwplatform.com/videos/${currentImage.videoId}-rATa83m7.mp4`}
        autoPlay
        playsInline
        muted
        loop
      />
    )
  }

  // If we have an image, render the image using WPImage
  if (currentImage?.image?.mediaItemUrl) {
    return (
      <WPImage
        image={currentImage.image}
        className={cn('h-full w-full', className)}
      />
    )
  }

  // Default return (safety)
  return null
}

export default ResponsiveMediaFile


