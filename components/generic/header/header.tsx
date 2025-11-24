import React from 'react'
import cn from 'classnames'
import gql from 'cms/client'
import { GlobalSettings } from 'interfaces/types'
import styles from './header.module.scss'
import HeaderNav from '../headerNav/headerNav'
import HeaderQuery from './header.query'

const getNav = async () => {
  return (await gql(HeaderQuery)).data.globalSettings
}

const HeaderBlock = async () => {
  const headerData: GlobalSettings = await getNav()
  if (!headerData) return null

  const global = headerData.glb
  const { logo, mainMenu, teamMembers, contactMenu, contactInformationMobile, cartLink } = global

  return (
    <header className={cn(styles.root, headerData.glb.showNotification && styles.activeNotification)}>
      <HeaderNav
        logo={logo}
        headerNav={mainMenu}
        athletes={teamMembers}
        contactMenu={contactMenu}
        mobileContacts={contactInformationMobile}
        cartLink={cartLink}
      />
    </header>
  )
}

export default HeaderBlock
