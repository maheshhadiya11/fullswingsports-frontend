import React, { FunctionComponent } from 'react'
import cn from 'classnames'
import { Page_Flexiblelayout_PageBuilder_Banner } from 'interfaces/types'
import Button from 'components/generic/button/button'
import Media from 'components/generic/media/media'
import Link from 'next/link'
import styles from './banner.module.scss'

export const typename = 'Flexiblelayout_PageBuilder_Banner'

const BannerModule: FunctionComponent<{ module: Page_Flexiblelayout_PageBuilder_Banner }> = ({ module }) => {
  const { spacing, media, headline, copy, cta } = module

  const ContainerType = cta?.url ? Link : 'div'

  return (
    <div className={cn(styles.root, spacing && `spacing-${spacing}`)}>
      <div className="container default-grid">
        <ContainerType
          href={cta?.url}
          className={styles.Wrapper}
        >
          <div className={cn(styles.ImgWrapper)}>{media && <Media media={media} />}</div>
          <div className={cn(styles.ContentWrapper)}>
            <div className={cn(styles.Content)}>
              {headline && <h3 className={cn(styles.Headline)}>{headline}</h3>}
              {copy && <p className={cn(styles.Copy)}>{copy}</p>}
              {cta && (
                <Button
                  className={styles.cta}
                  link={cta}
                  variant="text"
                />
              )}
            </div>
          </div>
        </ContainerType>
      </div>
    </div>
  )
}
export default BannerModule
