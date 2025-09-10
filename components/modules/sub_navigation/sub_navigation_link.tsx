'use client'

import React, { FunctionComponent } from 'react'
import cn from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { GlobalSettings_Glb_SubNavigationMenus_Links } from 'interfaces/types'
import styles from './sub_navigation.module.scss'

const SubNavigationLink: FunctionComponent<{ link: GlobalSettings_Glb_SubNavigationMenus_Links }> = ({ link }) => {
  const router = usePathname()

  const isActive = (url: string) => {
    const trim = url.charAt(url.length - 1) === '/' ? url.slice(0, -1) : url
    return router === trim
  }

  return (
    <Link
      href={link.link.url}
      target={link.link.target && '_blank'}
      className={cn(styles.navLink, isActive(link.link.url) && styles.active)}
    >
      {link.link.title}
    </Link>
  )
}

export default SubNavigationLink
