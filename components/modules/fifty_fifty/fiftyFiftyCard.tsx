import React, { FunctionComponent } from 'react'
import cn from 'classnames'
import { Page_Flexiblelayout_PageBuilder_FiftyFifty_Cards } from 'interfaces/types'
import Button from 'components/generic/button/button'
import Media from 'components/generic/media/media'
import CTA from 'components/generic/cta/cta'
import styles from './fifty_fifty.module.scss'

export const typename = 'Flexiblelayout_PageBuilder_FiftyFifty'

const FiftyFiftyCard: FunctionComponent<{
  module: Page_Flexiblelayout_PageBuilder_FiftyFifty_Cards
  left: boolean
  fullWidth: boolean
}> = ({ module, left, fullWidth }) => {
  const { media, eyebrow, headline, copy, cta, secondaryCta } = module

  return (
    <div
      className={cn(styles.card, left ? styles.left : styles.right, fullWidth ? styles.fullWidth : styles.leftRight)}
    >
      {media && (
        <Media
          className={cn(styles.media)}
          media={media}
        />
      )}
      <div className={cn(styles.content)}>
        {eyebrow && <h3 className={cn(styles.eyebrow)}>{eyebrow}</h3>}
        {headline && <h3 className={cn(styles.headline)}>{headline}</h3>}
        {copy && <p className={cn(styles.copy)}>{copy}</p>}
        <div className={styles.buttonContainer}>
          <CTA
            className={styles.primaryCta}
            cta={cta}
          />
          <Button
            variant="text"
            link={secondaryCta}
          />
        </div>
      </div>
    </div>
  )
}

export default FiftyFiftyCard
