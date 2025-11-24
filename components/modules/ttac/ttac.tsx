import React, { FunctionComponent } from 'react'
import cn from 'classnames'
import {
  Page_Flexiblelayout_PageBuilder_BentoBoxes_Boxes_Modal_TtacContent,
  Post_Postlayout_PageBuilder_Ttac,
} from 'interfaces/types'
import Media from 'components/generic/media/media'
import RichText from 'components/generic/rich_text/rich_text'
import CTA from 'components/generic/cta/cta'
import styles from './ttac.module.scss'

export const typename = 'Flexiblelayout_PageBuilder_Ttac'

interface TtacProps {
  module: Post_Postlayout_PageBuilder_Ttac | Page_Flexiblelayout_PageBuilder_BentoBoxes_Boxes_Modal_TtacContent
}

const TtacModule: FunctionComponent<TtacProps> = ({ module }) => {
  const { spacing, headline, copy, ctas, media } = module

  return (
    <div className={cn(styles.root, 'container', `spacing-${spacing}`)}>
      <div className={cn('default-grid')}>
        {headline && <h2 className={cn(styles.headline)}>{headline}</h2>}
        {copy && (
          <RichText
            className={styles.richText}
            content={copy}
            variant="ttac"
          />
        )}
        {(media?.videoId || media?.image?.mediaItemUrl) && (
          <div className={cn(styles.image, 'bg-fsBlue-600')}>
            <Media media={media} />
          </div>
        )}
        {ctas?.length && (
          <div className={cn(styles.buttonContainer)}>
            {ctas.map((cta) => {
              return (
                <CTA
                  cta={cta.cta}
                  icon={cta.cta.icon}
                  variant={cta.cta.variant}
                />
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default TtacModule
