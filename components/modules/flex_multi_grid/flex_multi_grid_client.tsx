'use client'

import React, { FunctionComponent, useState } from 'react'
import cn from 'classnames'
import { Page_Flexiblelayout_PageBuilder_FlexMultiGrid } from 'interfaces/types'
import Tabs from 'components/generic/tabs/tabs'
import { useIsMobile } from 'utils/useIsMobile'
import AnimateHeight from 'react-animate-height'
import Button from 'components/generic/button/button'
import styles from './flex_multi_grid.module.scss'
import GridItem from './flex_multi_grid_item'

export const typename = 'Flexiblelayout_PageBuilder_FlexMultiGrid'
const FlexMultiGridClient: FunctionComponent<{
  module: Page_Flexiblelayout_PageBuilder_FlexMultiGrid
  isBlogLanding?: boolean
}> = ({ module, isBlogLanding }) => {
  const { tabs, headline, layout, cta, spacing, layoutMode } = module
  if (!tabs) return null

  const [selectedTabIndex, setSelectedTabIndex] = useState(0)
  const selectedTab = tabs[selectedTabIndex === -1 ? 0 : selectedTabIndex]
  const isMobile = useIsMobile('xl')
  const modifiedTabs = tabs.map((tab) => ({ ...tab, headline: tab.title }))

  const selectTab = (e, index: number) => {
    setSelectedTabIndex(selectedTabIndex === index ? -1 : index)
    setTimeout(() => {
      e.target?.scrollIntoView()
    }, 300)
  }

  return isMobile && tabs.length > 1 ? (
    <div className={cn(styles.root, layoutMode === 'contained' ? 'container' : styles[`${layout}-container`])}>
      <div className={`spacing-${spacing}`}>
        {headline && (
          <div className={cn(styles.headlineContainer, 'default-grid')}>
            <h2 className={styles.headline}>{headline}</h2>
          </div>
        )}
      </div>
      <div>
        {modifiedTabs.map((tab, index) => (
          <div
            className={cn(styles.accordionItem, selectedTabIndex === index && styles.active)}
            key={tab.headline || index}
          >
            <div className={cn(styles.accordionContainer, 'col-span-full')}>
              <button
                type="button"
                className={cn(styles.accordionButton, selectedTabIndex === index && styles.active)}
                onClick={(e) => selectTab(e, index)}
              >
                {tab.headline}
                <span className={cn(styles.icon, selectedTabIndex === index && styles.active)} />
              </button>
            </div>
            <AnimateHeight
              duration={300}
              className={styles.accordionContent}
              height={selectedTabIndex === index ? 'auto' : 0}
            >
              {tab.gridItems.map((item, itemIndex) => (
                <GridItem
                  key={itemIndex}
                  layout={layout}
                  item={item}
                />
              ))}
            </AnimateHeight>
          </div>
        ))}
        <div className={cn('default-grid')}>
          <Button
            className={cn(styles.accordionCta)}
            link={cta}
          />
        </div>
      </div>
    </div>
  ) : (
    <div className={`spacing-${spacing}`}>
      {headline && (
        <div
          className={cn(
            styles.root,
            `container`,
            layoutMode === 'contained' ? 'container' : styles[`${layout}-container`],
          )}
        >
          <div className={cn(styles.headlineContainer, 'default-grid')}>
            <h2 className={styles.headline}>{headline}</h2>
          </div>
        </div>
      )}
      {tabs.length > 1 && (
        <div className={styles.tabs}>
          <Tabs
            tabs={modifiedTabs}
            cta={cta}
            selectedIndex={selectedTabIndex}
            onTabClick={(index) => setSelectedTabIndex(index)}
          />
        </div>
      )}
      <div
        className={cn(
          styles.root,
          layoutMode === 'contained' ? 'container' : styles[`${layout}-container`],
          isBlogLanding && styles.maxContainer,
        )}
      >
        <div className={cn('default-grid md:grid-cols-12')}>
          <div className={cn(styles.subGrid, isBlogLanding && styles.blogLanding)}>
            {selectedTab.gridItems?.map((item, itemIndex) => (
              <GridItem
                key={itemIndex}
                layout={layout}
                item={item}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlexMultiGridClient
