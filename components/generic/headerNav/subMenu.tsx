import React from 'react'
import cn from 'classnames'
import Link from 'next/link'
import {
  GlobalSettings_Glb_ContactInformationMobile,
  GlobalSettings_Glb_MainMenu_FeaturedProducts,
} from 'interfaces/types'
import ArrowRight from 'components/svg/ArrowRight'
import { usePathname } from 'next/navigation'
import WPImage from '../wordpress_image/wordpress_image'
import styles from './subMenu.module.scss'
import { SubMenuProps } from './headerNav'
import ContactMobile from './contactMobile'

const ProductCard = ({
  product,
  isActive,
  onClick,
}: {
  product: GlobalSettings_Glb_MainMenu_FeaturedProducts
  isActive: (url: string) => boolean
  onClick: () => void
}) =>
  product?.link?.url ? (
    <li>
      <Link
        href={product.link.url}
        className={cn(styles.product, isActive(product.link.url) && styles.productActive)}
        onClick={onClick}
      >
        <WPImage
          image={product.image}
          className={styles.productImage}
        />
        <div className={styles.productCopy}>
          <div className={styles.productHeadline}>{product.headline}</div>
          <div className={styles.productPrice}>{product.price}</div>
        </div>
      </Link>
    </li>
  ) : null

const SubMenu = ({
  menu,
  className,
  open,
  handleClose,
  mobileContacts,
}: {
  menu: SubMenuProps
  className?: string
  open: boolean
  handleClose: (full: boolean) => void
  mobileContacts: GlobalSettings_Glb_ContactInformationMobile
}) => {
  const { subMenu, featuredProducts } = menu

  const pathname = usePathname()

  const isActive = (url: string) => {
    const trim = url.charAt(url.length - 1) === '/' ? url.slice(0, -1) : url
    return pathname === trim
  }

  return (
    <div className={cn(styles.subMenu, className, open ? styles.open : styles.closed)}>
      <div className={styles.subBack}>
        <button
          type="button"
          onClick={() => handleClose(false)}
        >
          <ArrowRight />
          Back
        </button>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.products}>
          {featuredProducts.length > 0 && !!featuredProducts[0].link && (
            <ul>
              {featuredProducts.map((product) => (
                <ProductCard
                  key={`${menu.key}-${product.link.url}`}
                  product={product}
                  isActive={isActive}
                  onClick={() => handleClose(true)}
                />
              ))}
            </ul>
          )}
        </div>
        <div className={styles.subLinks}>
          {subMenu.length > 0 && !!subMenu[0].link && (
            <ul>
              {subMenu.map(
                (link) =>
                  link?.link?.url && (
                    <li key={`${menu.key}-${link.link.url}`}>
                      <Link
                        href={link.link.url}
                        target={link.link.target && '_blank'}
                        className={cn(styles.subLink, isActive(link.link.url) && styles.linkActive)}
                        onClick={() => handleClose(true)}
                      >
                        {link.link.title}
                      </Link>
                    </li>
                  ),
              )}
            </ul>
          )}
        </div>
      </div>
      <ContactMobile
        className="xl:hidden"
        menu={mobileContacts}
        handleClose={handleClose}
      />
    </div>
  )
}

export default SubMenu
