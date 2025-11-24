'use client'

import React, { FunctionComponent, useMemo, useState } from 'react'
import cn from 'classnames'
import {
  Page_Flexiblelayout_PageBuilder_GallerySlideshow,
  Page_Flexiblelayout_PageBuilder_GallerySlideshow_Slides,
} from 'interfaces/types'
import Pagination from 'components/generic/pagination/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperType } from 'swiper/types'
import Media from 'components/generic/media/media'
import styles from './gallery_slideshow.module.scss'
import 'swiper/css'

interface ISlide extends Page_Flexiblelayout_PageBuilder_GallerySlideshow_Slides {
  caption?: string
}

export interface IGallerySlideshowClient extends Page_Flexiblelayout_PageBuilder_GallerySlideshow {
  slides: ISlide[]
}

const GallerySlideshowClient: FunctionComponent<{
  module: IGallerySlideshowClient
}> = ({ module }) => {
  const { spacing, layout, headline, caption, slides } = module

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null)

  /**
   * Because the image and video fields are not required in the CMS, there is
   * potential for a slide to have neither, so we filter out any empty slides here.
   */
  const _slides = useMemo(() => {
    return slides?.filter((slide) => {
      if (slide.media.mediaType === 'image') return !!slide.media.image
      if (slide.media.mediaType === 'video') return !!slide.media.videoId
      return false
    })
  }, [slides])

  return (
    <div className={cn(styles.root, `spacing-${spacing}`, styles[layout], 'modal-wrap')}>
      {headline && (
        <div className={cn('container default-grid')}>
          <h2 className="top-headline">{headline}</h2>
        </div>
      )}
      <div className={cn(layout === 'full' ? styles.full : 'container default-grid')}>
        <div className={cn(styles.slide)}>
          <Swiper
            spaceBetween={24}
            slidesPerView={1}
            watchOverflow
            onSlideChange={(swiper) => setSelectedIndex(swiper.activeIndex)}
            onSwiper={setSwiperInstance}
          >
            {_slides?.length &&
              _slides.map((slide) => {
                const key = slide.media.mediaType === 'image' ? slide.media.image.uri : slide.media.videoId
                return (
                  <SwiperSlide key={key}>
                    <Media
                      media={slide.media}
                      className={styles.image}
                    />
                  </SwiperSlide>
                )
              })}
          </Swiper>
        </div>
        {(_slides?.length > 1 || caption) && (
          <div className={cn(styles.footer)}>
            {_slides?.length > 1 && (
              <Pagination
                className={styles.pagination}
                length={_slides.length}
                selectedIndex={selectedIndex}
                setSelectedIndex={(v) => swiperInstance?.slideTo(v)}
              />
            )}
            {_slides.length && (
              <div
                className={cn(
                  styles.caption,
                  _slides?.length > 1 && _slides[selectedIndex]?.caption && styles.divider,
                  _slides.length === 1 && styles.fullWidthCaption,
                )}
              >
                {_slides[selectedIndex]?.caption && _slides[selectedIndex]?.caption}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default GallerySlideshowClient
