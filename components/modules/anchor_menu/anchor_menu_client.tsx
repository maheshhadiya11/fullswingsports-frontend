'use client'

import React, { FunctionComponent, useEffect, useState } from 'react'
import cn from 'classnames'
import { Page_Flexiblelayout_PageBuilder_AnchorMenu } from 'interfaces/types'
import Filter from 'components/generic/filter/filter'
import Button from 'components/generic/button/button'
import styles from './anchor_menu.module.scss'

export const typename = 'Flexiblelayout_PageBuilder_AnchorMenu'

const toKebabCase = (str) => {
  return str
    ?.replace(/[ -]+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .toLowerCase()
}

const AnchorMenuClient: FunctionComponent<{ module: Page_Flexiblelayout_PageBuilder_AnchorMenu }> = ({ module }) => {
  const { title, anchors, cta } = module
  const [isFirstRender, setIsFirstRender] = useState(true)

  if (anchors.length < 1) return null

  const onChange = (idx: number) => {
    if (isFirstRender) return
    const element = document.getElementById(anchors[idx].link || toKebabCase(anchors[idx].label))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false)
    }
  }, [isFirstRender])

  return (
    <div className={cn(styles.root, 'container')}>
      <div className={cn(styles.flexContainer)}>
        <h5 className={cn(styles.title)}>{title}</h5>
        <Filter
          className={cn(styles.filter)}
          onChange={onChange}
          tags={anchors.map((a) => a.label)}
          dropdownMenuClassName={styles.menu}
        />
        <Button
          className={cn(styles.button)}
          link={cta}
        />
      </div>
    </div>
  )
}

export default AnchorMenuClient
