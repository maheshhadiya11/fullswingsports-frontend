'use client'

import React, { FunctionComponent, useState } from 'react'
import cn from 'classnames'
import { Page_Flexiblelayout_PageBuilder_TabbedFeature } from 'interfaces/types'
import Media from 'components/generic/media/media'
import Button from 'components/generic/button/button'
import Tabs from 'components/generic/tabs/tabs'
import styles from './tabbed_feature.module.scss'

const TabbedFeatureHorizontal: FunctionComponent<{ module: Page_Flexiblelayout_PageBuilder_TabbedFeature }> = ({
  module,
}) => {
  const { cta, headline, media, tabs } = module

  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0)
  const selectedTab = tabs[selectedTabIndex]

  // logic: if all tab images are defined, show those, otherwise show the main image. Otherwise UI jumps
  const useTabImages = tabs.reduce((use, tab) => use && !!tab.image, true)

  return (
    <div className={cn(styles.horizontal)}>
      <div className="container default-grid">
        <div className={cn(styles.topRow, 'default-grid')}>
          <div className={styles.headlineContainer}>{headline}</div>
          {cta && (
            <div className={styles.mobilePrimaryBtnContainer}>
              <Button
                variant="primary"
                link={cta}
                layout="small"
              />
            </div>
          )}
        </div>
      </div>
      <Tabs
        tabs={tabs}
        cta={cta}
        selectedIndex={selectedTabIndex}
        onTabClick={(index) => setSelectedTabIndex(index)}
      />
      <div className="container default-grid">
        <div className={styles.tabsContentSection}>
          {selectedTab && (
            <div className={styles.tabContent}>
              {selectedTab.headline && <div className={styles.tabHeadline}>{selectedTab.headline}</div>}
              {selectedTab.copy && <div className={styles.tabCopy}>{selectedTab.copy}</div>}
              {selectedTab.cta && (
                <div className={styles.tabCTA}>
                  <Button
                    variant="secondary"
                    link={selectedTab.cta}
                    layout="small"
                  />
                </div>
              )}
            </div>
          )}
          {(media || selectedTab) && (
            <div className={styles.mainImageContainer}>
              {useTabImages && selectedTab.image && (
                <Media
                  media={{ mediaType: 'image', image: selectedTab.image }}
                  className={styles.image}
                />
              )}
              {!useTabImages && media && (
                <Media
                  media={media}
                  className={styles.image}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default TabbedFeatureHorizontal
