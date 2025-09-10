import React, { FunctionComponent } from 'react'
import cn from 'classnames'
import { Page_Flexiblelayout_PageBuilder_LeftRight } from 'interfaces/types'
import Button from 'components/generic/button/button'
import CTA from 'components/generic/cta/cta'
import Media from 'components/generic/media/media'
import styles from './left_right.module.scss'

export const typename = 'Flexiblelayout_PageBuilder_LeftRight'

const LeftRightModule: FunctionComponent<{ module: Page_Flexiblelayout_PageBuilder_LeftRight }> = ({ module }) => {
  const { spacing, topHeadline, layout, eyebrow, headline, copy, cta, secondaryCta, media } = module
  const contentIsLeft = layout === 'left'

  return (
    <div className={cn(styles.root, `spacing-${spacing}`)}>
      <div className="container default-grid">
        {topHeadline && <h2 className="top-headline">{topHeadline}</h2>}
        <div className={styles.ContentWrapper}>
          <div className={cn(styles.ContentArea, contentIsLeft ? 'md:-order-1 ' : 'md:order-1', 'order-1')}>
            <div className="mt-auto">
              <div className={styles.TextWrapper}>
                {eyebrow && <h3 className="caption-label md:mb-0 mb-16">{eyebrow}</h3>}
                {headline && <h3 className="headline-h5">{headline}</h3>}
                {copy && <p className="body-copy-2">{copy}</p>}
              </div>
              {(cta || secondaryCta) && (
                <div className={styles.CtaWrapper}>
                  {cta && (
                    <CTA
                      cta={cta}
                      variant="secondary"
                    />
                  )}
                  {secondaryCta && (
                    <Button
                      link={secondaryCta}
                      variant="text"
                    />
                  )}
                </div>
              )}
            </div>
          </div>
          <div className={cn(styles.ImgArea, contentIsLeft ? 'm:order-1 ' : 'md:-order-1', '-order-1')}>
            {media && <Media media={media} />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftRightModule
