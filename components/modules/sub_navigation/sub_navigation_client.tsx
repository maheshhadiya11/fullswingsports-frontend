'use client'

import React, { FunctionComponent, useEffect, useState } from 'react'
import cn from 'classnames'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { GlobalSettings_Glb_SubNavigationMenus } from 'interfaces/types'
import Button from 'components/generic/button/button'
import Dropdown from 'components/generic/dropdown/dropdown'
import styles from './sub_navigation.module.scss'

const SubNavigationClient: FunctionComponent<{ menu: GlobalSettings_Glb_SubNavigationMenus }> = ({ menu }) => {
  const { title, links, cta } = menu

  const [linkIndex, setLinkIndex] = useState(-1)
  const router = usePathname()
  const push = useRouter()

  const isActive = (url: string) => {
    if (typeof window === 'undefined') {
      return false
    }

    const currentUrl = new URL(router, window.location.origin)
    const linkUrl = new URL(url, window.location.origin)

    const currentPath = currentUrl.pathname.endsWith('/') ? currentUrl.pathname.slice(0, -1) : currentUrl.pathname
    const linkPath = linkUrl.pathname.endsWith('/') ? linkUrl.pathname.slice(0, -1) : linkUrl.pathname

    return currentPath === linkPath
  }
  const tags = links?.map((link) => link.link.title)

  useEffect(() => {
    setLinkIndex(menu.links.findIndex((link) => isActive(link.link.url)))
  }, [router])

  const goLinkIndex = (idx: number) => {
    push.push(menu.links[idx].link.url)
  }

  return (
    menu && (
      <div className={cn(styles.root, 'container')}>
        <div className={cn(styles.navBar)}>
          <div className={styles.title}>{title}</div>
          <div className={styles.links}>
            {links.map((link, idx) => (
              <Link
                href={link.link.url}
                target={link.link.target && '_blank'}
                key={`${link.link.title}`}
                className={cn(styles.navLink, linkIndex === idx && styles.active)}
              >
                {link.link.title}
              </Link>
            ))}
          </div>
          <div className={cn(styles.mobileFilter)}>
            <Dropdown
              className={styles.dropdown}
              selectedIndex={linkIndex}
              setSelectedIndex={goLinkIndex}
              tags={tags}
            />
          </div>
          <div className={styles.cta}>
            {cta && (
              <Button
                link={cta}
                className={styles.button}
              />
            )}
          </div>
        </div>
      </div>
    )
  )
}

export default SubNavigationClient
