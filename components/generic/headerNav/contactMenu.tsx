import React from 'react'
import cn from 'classnames'
import { GlobalSettings_Glb_ContactMenu } from 'interfaces/types'
import Link from 'next/link'
import styles from './contactMenu.module.scss'
import Icon, { IconOption } from '../icon/icon'

export interface ContactMenuProps {
  menu: GlobalSettings_Glb_ContactMenu
  className?: string
  open: boolean
  handleClose: (full: boolean) => void
}

const ContactMenu = ({ menu, className, open, handleClose }: ContactMenuProps) => {
  const { ctaCards, links } = menu

  return (
    <div className={cn(styles.contactMenu, className, open ? styles.open : styles.closed)}>
      <div className={styles.contactCards}>
        <ul className={styles.cards}>
          {ctaCards.map((card) =>
            card?.link ? (
              <li key={card.link.url}>
                <Link
                  href={card.link.url}
                  title={card.link.title}
                  target={card.link.target && '_blank'}
                  onClick={() => handleClose(true)}
                  className={styles.card}
                >
                  <Icon icon={card.icon as IconOption} />
                  <div className="card-title mt-auto">{card.headline}</div>
                  <div className="body-copy-2 mt-8">{card.copy}</div>
                </Link>
              </li>
            ) : (
              <li key={card.headline}>
                <div className={styles.card}>
                  <Icon icon={card.icon as IconOption} />
                  <div className="card-title mt-auto">{card.headline}</div>
                  <div className="body-copy-2 mt-8">{card.copy}</div>
                </div>
              </li>
            ),
          )}
        </ul>
      </div>
      <div className={styles.subLinks}>
        {links.length && (
          <ul>
            {links.map(
              (link) =>
                link?.link && (
                  <li key={link.link.title}>
                    <Link
                      href={link.link.url}
                      target={link.link.target && '_blank'}
                      className={styles.subLink}
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
  )
}

export default ContactMenu
