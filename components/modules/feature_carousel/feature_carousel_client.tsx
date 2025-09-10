'use client'

import React, { FunctionComponent, useState } from 'react'
import cn from 'classnames'
import { Page_Flexiblelayout_PageBuilder_FeatureCarousel } from 'interfaces/types'
import Pagination from 'components/generic/pagination/pagination'
import FeatureModule from 'components/generic/feature/feature'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperType } from 'swiper/types'
import styles from './feature_carousel.module.scss'
import 'swiper/css'

const FeatureClient: FunctionComponent<{ module: Page_Flexiblelayout_PageBuilder_FeatureCarousel }> = ({ module }) => {
  const { spacing, headline, features, mobileLayout, color } = module

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null)

  return (
    <div className={cn(styles.root, `spacing-${spacing}`)}>
      <div className={cn('container default-grid')}>
        {headline && <h2 className={cn('top-headline')}>{headline}</h2>}
        <div className={cn(styles.feature)}>
          <Swiper
            spaceBetween={24}
            slidesPerView={1}
            watchOverflow
            onSlideChange={(swiper) => setSelectedIndex(swiper.activeIndex)}
            onSwiper={setSwiperInstance}
          >
            {features?.length &&
              features.map((feature) => (
                <SwiperSlide key={feature.eyebrow + feature.headline + feature.copy}>
                  <FeatureModule
                    feature={feature}
                    mobileLayout={mobileLayout}
                    color={color}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
        {features?.length > 1 && (
          <div className={cn(styles.pagination)}>
            <Pagination
              length={features.length}
              selectedIndex={selectedIndex}
              setSelectedIndex={(v) => swiperInstance?.slideTo(v)}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default FeatureClient
