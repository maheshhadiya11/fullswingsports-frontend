'use client'

import React, { FunctionComponent, useState } from 'react'
import cn from 'classnames'
import { Page_Flexiblelayout_PageBuilder_TabbedFeature } from 'interfaces/types'
import Button from 'components/generic/button/button'
import Media from 'components/generic/media/media'
import styles from './tabbed_feature.module.scss'

const TabbedFeatureVertical: FunctionComponent<{ module: Page_Flexiblelayout_PageBuilder_TabbedFeature }> = ({
  module,
}) => {
  const { cta, headline, media, tabs } = module

  const [selectedTabIndex, setSelectedTabIndex] = useState(0)
  if (!tabs) return null

  const useTabImages = tabs.reduce((use, tab) => use && !!tab.image, true)
  const useMainImage = !!media && !useTabImages

  const selectedTab = tabs[selectedTabIndex]

  return (
    <div className={cn(styles.vertical, 'container default-grid')}>
      <div className={styles.topRow}>
        <div className={styles.headlineContainer}>{headline}</div>
        {cta && (
          <div className={styles.ctaContainer}>
            <Button
              variant="primary"
              link={cta}
              layout="small"
            />
          </div>
        )}
      </div>
      <div className={cn(styles.content)}>
        {useTabImages && (
          <div className={styles.mobileTabImageContainer}>
            <Media
              className={styles.mobileImage}
              media={{ mediaType: 'image', image: selectedTab.image }}
            />
          </div>
        )}
        <div className={styles.tabsContainer}>
          {tabs &&
            tabs.map((tab, index) => (
              <div
                role="button"
                tabIndex={0}
                onKeyDown={(event) => event.key === 'Enter' && setSelectedTabIndex(index)}
                onClick={() => setSelectedTabIndex(index)}
                className={cn(styles.tab, selectedTabIndex === index && styles.open)}
              >
                <div className={styles.headline}>
                  <div className={styles.dot} />
                  <span>{tab.headline}</span>
                </div>
                <div className={styles.accordion}>
                  <div className={styles.accordionContent}>
                    {tab.copy && <div className={styles.copy}>{tab.copy}</div>}
                    {tab.cta && (
                      <div className={styles.cta}>
                        <Button
                          variant="secondary"
                          link={tab.cta}
                          layout="small"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className={cn(styles.tabImageContainer, useTabImages && styles.hideInMobile)}>
          {useMainImage && media && (
            <Media
              media={media}
              className={styles.image}
            />
          )}
          {useTabImages && selectedTab && (
            <Media
              media={{ mediaType: 'image', image: selectedTab.image }}
              className={styles.image}
            />
          )}
        </div>
      </div>
      {cta && (
        <div className={styles.mobileCtaContainer}>
          <Button
            variant="primary"
            link={cta}
            layout="small"
          />
        </div>
      )}
    </div>
  )
}

export default TabbedFeatureVertical
