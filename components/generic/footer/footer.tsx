import React from 'react'
import cn from 'classnames'
import Link from 'next/link'
import gql from 'cms/client'
import { GlobalSettings } from 'interfaces/types'
import Script from 'next/script'
import parse from 'html-react-parser'
import styles from './footer.module.scss'
import FooterQuery from './footer.query'
import WPImage from '../wordpress_image/wordpress_image'
import PromoBlocks from '../promo_blocks/promo_blocks'
import accessibilityAdjustments from './scripts/accessibility_adjustments'
import AccessibilityButton from './accessibilityButton'

const getNav = async () => {
  return (await gql(FooterQuery)).data.globalSettings
}

const Footer = async () => {
  const footerData: GlobalSettings = await getNav()
  if (!footerData) return null

  const { promoBlocks, quoteBlock, footerLogo, footerMenu, logos, copyright, legalLinks, footerSocials } =
    footerData.glb

  return (
    <footer className={styles.root}>
      <div className={styles.content}>
        <div className={cn('container', 'md:default-grid', styles.contentGrid)}>
          {promoBlocks && (
            <div className={cn(styles.promoRow)}>
              <PromoBlocks blocks={promoBlocks} />
            </div>
          )}
          {quoteBlock && (
            <div className={styles.quoteRow}>
              <h3 className="headline-h3">“{quoteBlock.quote}”</h3>
              <h4 className="card-title mt-24">{quoteBlock.quoteAuthor}</h4>
            </div>
          )}
          <div className={styles.menuRow}>
            <div className={styles.footerLogoCol}>
              {footerLogo && (
                <WPImage
                  image={footerLogo}
                  className={styles.footerLogo}
                />
              )}
            </div>
            <ul className={styles.menuLinks}>
              {footerMenu.map((section, idx) => (
                <li
                  key={section.sectionTitle}
                  className={cn(styles.menuLink, (idx === 1 || idx === 0) && 'mb-40')}
                >
                  <div className={styles.menuLinkTitle}>{section.sectionTitle}</div>
                  <ul>
                    {section.subLinks
                      .filter((e) => !!e.link)
                      .map((subLink) => (
                        <li
                          key={subLink.link.title}
                          className={cn('body-copy-2', styles.subLink)}
                        >
                          <Link
                            href={subLink.link.url}
                            target={subLink.link.target && '_blank'}
                          >
                            {subLink.link.title}
                          </Link>
                        </li>
                      ))}
                  </ul>
                  {idx === footerMenu.length - 1 && (
                    <span
                      key={footerSocials.sectionTitle}
                      className={cn(styles.menuLink, styles.socialsSubItem)}
                    >
                      <div className={styles.menuLinkTitle}>{footerSocials.sectionTitle}</div>
                      <ul className={styles.socialLinks}>
                        {footerSocials.links.map((link) => (
                          <li
                            key={link.link.title}
                            className={cn('body-copy-2', styles.subLink)}
                          >
                            <Link
                              href={link.link.url}
                              title={link.link.title}
                              target={link.link.target && '_blank'}
                            >
                              <WPImage
                                className={styles.socialIcon}
                                image={{
                                  ...link.image,
                                  mediaDetails: {
                                    ...link.image.mediaDetails,
                                    width: link.image.mediaDetails.width || 24,
                                    height: link.image.mediaDetails.height || 24,
                                  },
                                }}
                              />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </span>
                  )}
                </li>
              ))}
              <li
                key={footerSocials.sectionTitle}
                className={cn(styles.menuLink, styles.socialsColumn)}
              >
                <div className={styles.menuLinkTitle}>{footerSocials.sectionTitle}</div>
                <ul className={styles.socialLinks}>
                  {footerSocials.links.map((link) => (
                    <li
                      key={link.link.title}
                      className={cn('body-copy-2', styles.subLink)}
                    >
                      <Link
                        href={link.link.url}
                        title={link.link.title}
                        target={link.link.target && '_blank'}
                      >
                        <WPImage
                          className={styles.socialIcon}
                          image={{
                            ...link.image,
                            mediaDetails: {
                              ...link.image.mediaDetails,
                              width: link.image.mediaDetails.width || 24,
                              height: link.image.mediaDetails.height || 24,
                            },
                          }}
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
          <div className={styles.logoRow}>
            {logos.map(
              (logo) =>
                logo?.image &&
                logo?.link &&
                logo?.copy &&
                logo?.link?.url &&
                logo?.link?.title && (
                  <Link
                    href={logo.link.url}
                    aria-label={logo.link.title}
                    target={logo.link.target}
                    className={styles.logoContainer}
                  >
                    <WPImage
                      image={logo.image}
                      imageProps={{
                        style: {
                          objectFit: 'contain',
                        },
                      }}
                    />
                    <span className={styles.logoCopy}>{parse(logo.copy || '')}</span>
                  </Link>
                ),
            )}
            <div className={styles.accessibilityAdjustmentsButtonWrapper}>
              <AccessibilityButton />
            </div>
          </div>
          <div className={styles.legalRow}>
            {copyright && <span className={styles.copyright}>{copyright}</span>}
            {legalLinks && (
              <ul className={styles.legalLinks}>
                {legalLinks.map(
                  (link) =>
                    link.link?.url && (
                      <li className={styles.legalLink}>
                        <Link
                          href={link.link.url}
                          target={link.link.target && '_blank'}
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
      </div>
      {/* <Script>{accessibilityAdjustments}</Script> */}
       <script> (function(){ var s = document.createElement('script'); var h = document.querySelector('head') || document.body; s.src = 'https://acsbapp.com/apps/app/dist/js/app.js'; s.async = true; s.onload = function(){ acsbJS.init(); }; h.appendChild(s); })(); </script> 
    </footer>
  )
}

export default Footer
