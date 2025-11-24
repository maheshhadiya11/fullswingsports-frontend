import React, { FunctionComponent } from 'react'
import cn from 'classnames'
import { Page_Flexiblelayout_PageBuilder_Hero } from 'interfaces/types'
import CTA from 'components/generic/cta/cta'
import Media from 'components/generic/media/media'
import styles from './hero.module.scss'
import HeroAffirm from './hero_affirm'

export const typename = 'Flexiblelayout_PageBuilder_Hero'

interface HeroProps {
  module: Partial<Page_Flexiblelayout_PageBuilder_Hero>
  first?: boolean
  className?: string
}

const HeroModule: FunctionComponent<HeroProps> = ({ module, first = false, className }) => {
  const {
    secondaryHeadline,
    eyebrow,
    headline,
    copy,
    quote,
    quoteAuthor,
    cta,
    secondaryCta,
    media,
    color,
    layout,
    size,
    imageSize,
    spacing,
    showPaymentInfomation,
    showGradient,
    product,
  } = module

  const HeadlineTag = first ? 'h1' : 'h2'
  const SubheadTag = first ? 'h2' : 'h3'

  return (
    <div className={cn(styles.spacingRoot, spacing && `spacing-${spacing}`, className, size && styles[size])}>
      {secondaryHeadline && !first && (
        <div className="container default-grid">
          <h2 className="top-headline">{secondaryHeadline}</h2>
        </div>
      )}
      <div className={cn(styles.root, color && styles[color], layout && styles[layout], size && styles[size])}>
        {media && layout !== 'post' && (
          <div className={cn(styles.bg, imageSize && styles[`bg-${imageSize}`])}>
            <Media
              media={media}
              className={imageSize && styles[imageSize]}
            />
            {showGradient && <div className={cn(styles.bgGradient)} />}
          </div>
        )}
        <div className={styles.fg}>
          <div className={cn(styles.container, 'default-grid')}>
            <div className={styles.content}>
              {eyebrow && <div className={cn(styles.eyebrow, 'caption-label')}>{eyebrow}</div>}
              {headline && <HeadlineTag className={cn(styles.headline, 'headline-h1')}>{headline}</HeadlineTag>}
              {copy && <SubheadTag className={cn(styles.copy, 'body-copy-1')}>{copy}</SubheadTag>}
              {quote && <h3 className={cn(styles.quote, 'headline-h5')}>{quote}</h3>}
              {quoteAuthor && (
                <h4 className={cn(styles.quoteAuthor, 'body-copy-1')}>
                  {`— `}
                  {quoteAuthor}
                </h4>
              )}
              {(cta || secondaryCta) && (
                <div className={styles.buttonRow}>
                  {cta && <CTA cta={cta} />}
                  {secondaryCta && (
                    <CTA
                      variant="secondary"
                      cta={{ link: secondaryCta, linkType: 'link' }}
                    />
                  )}
                </div>
              )}
              {showPaymentInfomation && product && <HeroAffirm product={product} />}
            </div>
          </div>
        </div>
      </div>
      {media && (media.image?.mediaItemUrl || media?.videoId) && layout === 'post' && (
        <div className={cn(styles.popout, 'container default-grid')}>
          <div className={styles.image}>
            <Media media={media} />
          </div>
        </div>
      )}
    </div>
  )
}

export default HeroModule
