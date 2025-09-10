/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import cn from 'classnames'
import {
  GlobalSettings_Glb_ContactInformationMobile,
  GlobalSettings_Glb_ContactMenu,
  GlobalSettings_Glb_MainMenu,
  MediaItem,
} from 'interfaces/types'
import { useIsMobile } from 'utils/useIsMobile'
import ArrowRight from 'components/svg/ArrowRight'
import { usePathname } from 'next/navigation'
import styles from './headerNav.module.scss'
import BurgerToggle from './burger'
import SubMenu from './subMenu'
import TeamMenu, { TeamMemberCardProps } from './teamMenu'
import ContactMenu from './contactMenu'
import Button from '../button/button'
import WPImage from '../wordpress_image/wordpress_image'
import ContactMobile from './contactMobile'
import CartIcon from './cartIcon'

export interface SubMenuProps extends GlobalSettings_Glb_MainMenu {
  key: string
  hasSub: boolean
}

const NavBlock = ({
  logo,
  headerNav,
  athletes,
  contactMenu,
  mobileContacts,
  cartLink,
}: {
  logo: MediaItem
  headerNav: GlobalSettings_Glb_MainMenu[]
  athletes: TeamMemberCardProps[]
  contactMenu: GlobalSettings_Glb_ContactMenu
  mobileContacts: GlobalSettings_Glb_ContactInformationMobile
  cartLink: string
}) => {
  const [open, setOpen] = useState<boolean>(Boolean)
  const [menuActive, setMenuActive] = useState<boolean>(false)
  const [subOpen, setSubOpen] = useState<string | undefined>(undefined)
  const isMobile = useIsMobile('xl')

  const menus = headerNav
    ?.filter((menu) => !!menu?.link?.title)
    .map((menu) => {
      return {
        ...menu,
        key: menu.link.title,
        hasSub:
          (menu.subMenuType === 'default' && !!menu.subMenu?.length) ||
          (menu.subMenuType === 'team' && !!athletes?.length),
      }
    })

  const isSubOpen = (key: string, hasSub: boolean) => {
    return hasSub ? subOpen === key : false
  }

  const pathname = usePathname()

  const isActive = (url: string) => {
    const trim = url.charAt(url.length - 1) === '/' ? url.slice(0, -1) : url
    return pathname === trim
  }

  // const isSubActive = (url: string, menu) => {
  //   if (menu.hasSub) {
  //     if (menu.subMenuType === 'default') {
  //       return (
  //         menu.subMenu.some((link) => isActive(link.link.url)) ||
  //         menu.featuredProducts.some((product) => isActive(product.link.url))
  //       )
  //     }
  //     if (menu.subMenuType === 'team') {
  //       return pathname.includes('/athlete/')
  //     }
  //   }

  //   return isActive(url)
  // }

  const isSubActive = (url: string, menu) => {
  if (!menu) return false;

  if (menu.hasSub) {
    if (menu.subMenuType === 'default') {
      const hasActiveSub = Array.isArray(menu.subMenu)
        ? menu.subMenu.some((link) => link?.link?.url && isActive(link.link.url))
        : false

      const hasActiveFeatured = Array.isArray(menu.featuredProducts)
        ? menu.featuredProducts.some((product) => product?.link?.url && isActive(product.link.url))
        : false

      return hasActiveSub || hasActiveFeatured
    }

    if (menu.subMenuType === 'team') {
      return pathname.includes('/athlete/')
    }
  }

  return isActive(url)
}


  const handleToggle = (e: boolean) => {
    setOpen(e)
    setMenuActive(e)
  }

  const closeMenu = (full: boolean = true) => {
    setSubOpen(undefined)

    if (full) {
      setOpen(false)
      setMenuActive(false)
    }
  }

  let openTimeout

  const endMenuOpen = () => {
    clearTimeout(openTimeout)
    openTimeout = null
  }

  const handleHover = (key: string, hasSub: boolean) => {
    if (isMobile) return

    openTimeout = setTimeout(() => {
      setSubOpen(key)
      setMenuActive(hasSub)
    }, 300)
  }

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, key: string, hasSub: boolean) => {
    if (isMobile && hasSub) e.preventDefault()

    if (subOpen === key || !hasSub) {
      closeMenu(true)
    } else {
      setSubOpen(key)
      setMenuActive(hasSub)
    }
  }

  let timeout

  const startMenuClose = () => {
    timeout = setTimeout(() => {
      closeMenu(true)
    }, 400)
  }

  const endMenuClose = () => {
    clearTimeout(timeout)
    timeout = null
  }

  return (
    <>
      <div className={cn(styles.root, isMobile ? styles.mobile : styles.desktop)}>
        <Link
          href="/"
          className={cn(styles.logo)}
          title="Home"
          onClick={() => closeMenu(true)}
        >
          {logo && <WPImage image={logo} />}
        </Link>
        <div className={cn(styles.navBar, open ? styles.open : styles.closed)}>
          <ul className={cn(styles.navLinks, subOpen && styles.subOpen)}>
            {menus.map((menu) => (
              <li
                key={menu.key}
                className={cn(
                  styles.navLink,
                  isSubOpen(menu.key, menu.hasSub) && styles.subActive,
                  isSubActive(menu.link.url, menu) && styles.active,
                  menu.hasSub && styles.hasSub,
                )}
                onMouseEnter={() => handleHover(menu.key, menu.hasSub)}
                onMouseLeave={() => endMenuOpen()}
              >
                <Link
                  href={menu.link.url}
                  target={menu.link.target && '_blank'}
                  onClick={(e) => handleClick(e, menu.key, menu.hasSub)}
                >
                  <span>{menu.link.title}</span>
                  {menu.hasSub && isMobile && <ArrowRight />}
                </Link>
              </li>
            ))}
          </ul>
          <div className={cn(styles.subMenuWrap, subOpen && subOpen !== 'contact' && styles.subWrapOpen)}>
            {menus.map((menu) => {
              if (!menu.hasSub) return null
              return menu.subMenuType === 'default' ? (
                <SubMenu
                  key={`sub-${menu.key}`}
                  menu={menu}
                  mobileContacts={mobileContacts}
                  className={cn(styles.subMenu, subOpen === menu.key ? styles.open : styles.closed)}
                  open={subOpen === menu.key}
                  handleClose={(full) => closeMenu(full)}
                />
              ) : (
                menu.subMenuType === 'team' && (
                  <TeamMenu
                    key={`sub-${menu.key}`}
                    menu={athletes}
                    mobileContacts={mobileContacts}
                    className={cn(styles.subMenu, styles.teamMenu, subOpen === menu.key ? styles.open : styles.closed)}
                    handleClose={(full) => closeMenu(full)}
                  />
                )
              )
            })}
          </div>
          {isMobile && (
            <ContactMobile
              menu={mobileContacts}
              handleClose={(full) => closeMenu(full)}
            />
          )}
        </div>
        <CartIcon
          cartLink={cartLink}
          closeMenu={closeMenu}
        />
        {contactMenu && contactMenu.cta && (
          <Button
            link={contactMenu.cta}
            className={cn(styles.contactButton)}
            onMouseEnter={() => handleHover('contact', true)}
            onMouseLeave={() => endMenuOpen()}
          />
        )}
        {contactMenu && contactMenu.links && (
          <div className={cn(styles.subMenuWrap, subOpen === 'contact' && styles.subWrapOpen)}>
            <ContactMenu
              menu={contactMenu}
              className={cn(styles.subMenu, subOpen === 'contact' ? styles.open : styles.closed)}
              open={subOpen === 'contact'}
              handleClose={(full) => closeMenu(full)}
            />
          </div>
        )}
        <div className={styles.burger}>
          <BurgerToggle
            onToggle={handleToggle}
            toggled={open}
          />
        </div>
      </div>

      <button
        className={cn(styles.overlay, menuActive && styles.overlay__active)}
        type="button"
        aria-label="Menu Background"
        title="Close menu"
        onMouseEnter={() => startMenuClose()}
        onMouseLeave={() => endMenuClose()}
        onClick={() => closeMenu(true)}
      />
    </>
  )
}

export default NavBlock
