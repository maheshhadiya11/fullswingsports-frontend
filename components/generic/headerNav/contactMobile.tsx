import React from 'react'
import cn from 'classnames'
import { GlobalSettings_Glb_ContactInformationMobile } from 'interfaces/types'
import Link from 'next/link'
import styles from './contactMobile.module.scss'
import Icon, { IconOption } from '../icon/icon'
import Button from '../button/button'

export interface ContactMobileProps {
  menu: GlobalSettings_Glb_ContactInformationMobile
  className?: string
  handleClose: (full: boolean) => void
}

const ContactMobile = ({ menu, className, handleClose }: ContactMobileProps) => {
  const { callLink, links } = menu

  return (
    <div className={cn(styles.contactMobile, className)}>
      <div className={styles.buttonContainer}>
        {callLink && (
          <Button
            className={cn(styles.button)}
            link={callLink}
            icon="phone"
          />
        )}
        <Button
          link={{ url: '/contact-sales', title: 'Contact Sales', target: '' }}
          variant="secondary"
          onClick={() => handleClose(true)}
          className={cn(styles.button, 'mt-8 md:mt-0')}
        />
      </div>

      <div className={cn(styles.contactCards, 'mt-8')}>
        <ul className={styles.cards}>
          {!!links?.length &&
            links.map((linkItem) => {
              if (!linkItem?.link) return null
              return linkItem?.link ? (
                <li key={linkItem.link.url}>
                  <Link
                    href={linkItem.link.url}
                    title={linkItem.link.title}
                    target={linkItem.link.target && '_blank'}
                    onClick={() => handleClose(true)}
                    className={styles.card}
                  >
                    <Icon icon={linkItem.icon as IconOption} />
                    <span className="caption-label ml-8">{linkItem.link.title}</span>
                  </Link>
                </li>
              ) : (
                <li key={linkItem.link.title}>
                  <div className={styles.card}>
                    <Icon icon={linkItem.icon as IconOption} />
                    <span className="caption-label ml-8">{linkItem.link.title}</span>
                  </div>
                </li>
              )
            })}
        </ul>
      </div>
    </div>
  )
}

export default ContactMobile
