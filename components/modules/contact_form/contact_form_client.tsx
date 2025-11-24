'use client'

import React, { FunctionComponent, useEffect, useRef } from 'react'
import cn from 'classnames'
import { Page_Flexiblelayout_PageBuilder_ContactForm } from 'interfaces/types'
import Link from 'next/link'
import Icon, { IconOption } from 'components/generic/icon/icon'
import styles from './contact_form.module.scss'

export const typename = 'Flexiblelayout_PageBuilder_ContactForm'

const ContactFormClient: FunctionComponent<{ module: Page_Flexiblelayout_PageBuilder_ContactForm }> = ({ module }) => {
  const { headline, copy, contactCards } = module
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    // Load JotForm embed handler script
    const script = document.createElement('script')
    script.src = 'https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js'
    script.async = true
    document.body.appendChild(script)

    script.onload = () => {
      // Initialize JotForm embed handler after script loads
      if (window.jotformEmbedHandler && iframeRef.current) {
        window.jotformEmbedHandler("iframe[id='JotFormIFrame-252875026101147']", 'https://form.jotform.com/')
      }
    }

    return () => {
      // Cleanup script on unmount
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  return (
    <div className={cn(styles.root, 'container')}>
      <div className={cn('default-grid')}>
        {headline && <h2 className={cn(styles.heading)}>{headline}</h2>}
        {copy && <p className={cn(styles.subline)}>{copy}</p>}
        <div className={cn(styles.leftColumn)}>
          <div className={cn(styles.ctaContainer)}>
            {contactCards?.map((block, index) => {
              const Card = block?.link?.url ? Link : 'div'
              return (
                <Card
                  key={index}
                  href={block?.link?.url || '#'}
                  className={cn(styles.ctaBox)}
                >
                  <div className={cn(styles.icon)}>
                    <Icon icon={block.icon as IconOption} />
                  </div>
                  <h3 className={cn(styles.ctaLabel)}>{block.headline}</h3>
                  <h4 className={cn(styles.ctaCopy)}>{block.copy}</h4>
                </Card>
              )
            })}
          </div>
        </div>
        <div className={cn(styles.form)}>
          <iframe
            ref={iframeRef}
            id="JotFormIFrame-252875026101147"
            title="Contact Sales Form"
            onLoad={() => window.parent.scrollTo(0, 0)}
            allow="geolocation; microphone; camera; fullscreen; payment"
            src="https://form.jotform.com/252875026101147"
            style={{
              minWidth: '100%',
              maxWidth: '100%',
              height: '539px',
              border: 'none',
            }}
            scrolling="no"
          />
        </div>
      </div>
    </div>
  )
}

// Type declaration for JotForm global
declare global {
  interface Window {
    jotformEmbedHandler: (selector: string, url: string) => void
  }
}

export default ContactFormClient
