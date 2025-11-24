import React from 'react'
import cn from 'classnames'
import styles from './tabs.module.scss'
import TabsInterface from './tabs.interface'
import Button from '../button/button'

const Tabs = (props: TabsInterface) => {
  const { tabs, selectedIndex, cta, onTabClick = () => {} } = props

  return (
    <div className="overflow-auto">
      <div className="container default-grid">
        <div className={styles.root}>
          <div className={styles.tabsContainer}>
            {tabs.map((tab, index) => (
              <button
                type="button"
                onClick={() => onTabClick(index)}
                className={cn(styles.tabButton, selectedIndex === index && styles.selected)}
              >
                <span>{tab.headline}</span>
              </button>
            ))}
            {cta && (
              <div className={styles.primaryBtnContainer}>
                <Button
                  variant="primary"
                  link={cta}
                  layout="small"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tabs
