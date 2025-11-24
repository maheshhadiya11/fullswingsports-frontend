'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import styles from './footer.module.scss'

const A11yIcon = dynamic(() => import('components/svg/A11y'))

const AccesibilityButton = () => {
  const handleAccessibilityClick = () => {
    // Select all shadow host elements of type 'access-widget-ui'
    const shadowHosts = document.querySelectorAll('access-widget-ui')

    // Find the shadow host that contains a button with part="acsb-trigger"
    const shadowHostWithButton = Array.from(shadowHosts).find(
      (shadowHost) => shadowHost.shadowRoot && shadowHost.shadowRoot.querySelector('button[part="acsb-trigger"]'),
    )

    if (shadowHostWithButton && shadowHostWithButton.shadowRoot) {
      const triggerButton = shadowHostWithButton.shadowRoot.querySelector('button[part="acsb-trigger"]')

      if (triggerButton) {
        const clickEvent = new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          view: window,
        })
        triggerButton.dispatchEvent(clickEvent)
      }
    }
  }

  return (
    <button
      type="button"
      onClick={handleAccessibilityClick}
      className={styles.accessibilityAdjustmentsButton}
    >
      <span className="body-copy-2 font-medium whitespace-nowrap">Accessibility Adjustments</span>
      <span className={styles.accessibilityAdjustmentsIconWrapper}>
        <A11yIcon className={styles.accessibilityAdjustmentsIcon} />
      </span>
    </button>
  )
}

export default AccesibilityButton
