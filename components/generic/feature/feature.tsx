'use client'

import React, { FunctionComponent } from 'react'
import cn from 'classnames'
import { useIsMobile } from 'utils/useIsMobile'
import styles from './feature.module.scss'
import { FeatureInterface } from './feature.interface'
import Button from '../button/button'
import Media from '../media/media'
import CTA from '../cta/cta'

export const typename = 'Flexiblelayout_PageBuilder_Feature'

const FeatureModule: FunctionComponent<FeatureInterface> = (props) => {
  const { feature, className, mobileLayout, color } = props

  const isMobile = useIsMobile('md')
  const isBelowXXL = useIsMobile('xxl')

  return (
    <div className={cn(styles.root, className && className, 'relative', color === 'dark' && styles.desktopDark)}>
      <div className="relative">
        {feature?.media && (
          <Media
            media={feature.media}
            className={cn(styles.image, isMobile && mobileLayout === 'top' && styles.imageTopMobile)}
          />
        )}
        <div className={cn(styles.overlayTopMobile, (isMobile || mobileLayout === 'full') && 'hidden')} />
      </div>

      {!feature.hideGradient && <div className={cn(styles.overlay, isMobile && mobileLayout === 'top' && 'hidden')} />}

      <div
        className={cn(
          styles.textContainer,
          isMobile && mobileLayout === 'top' && styles.textContainerTopMobile,
          isMobile && color === 'light' && mobileLayout === 'top' && styles.textContainerColorDark,
        )}
      >
        <div>
          {feature.eyebrow && <h2 className={cn(styles.eyebrow)}>{feature.eyebrow}</h2>}
          {feature.headline && <h2 className={cn(styles.headline)}>{feature.headline}</h2>}
          {feature.copy && <p className={cn(styles.copy)}>{feature.copy}</p>}
          <div className={cn(styles.buttonContainer)}>
            {feature.cta && (
              <CTA
                cta={feature.cta}
                className={cn(styles.cta)}
              />
            )}
            {feature.secondaryCta && !isBelowXXL && (
              <Button
                link={feature.secondaryCta}
                variant="secondary"
                className={cn(styles.cta)}
              />
            )}
            {feature.secondaryCta && isBelowXXL && (
              <Button
                link={feature.secondaryCta}
                className={cn(styles.cta, styles.secondaryCta)}
                variant="text"
                layout="small"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeatureModule
