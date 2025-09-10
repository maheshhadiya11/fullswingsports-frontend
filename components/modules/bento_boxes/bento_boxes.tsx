import React, { FunctionComponent } from 'react'
import cn from 'classnames'
import { Page_Flexiblelayout_PageBuilder_BentoBoxes } from 'interfaces/types'
import Button from 'components/generic/button/button'
import styles from './bento_boxes.module.scss'
import BentoBoxesClient from './bento_boxes_client'

export const typename = 'Flexiblelayout_PageBuilder_BentoBoxes'

const BentoBoxesModule: FunctionComponent<{ module: Page_Flexiblelayout_PageBuilder_BentoBoxes }> = ({ module }) => {
  const { spacing, headline, description, cta, boxes, configuration } = module

  return (
    <div className={cn(styles.root, 'container', `spacing-${spacing}`)}>
      <div className={cn('default-grid')}>
        <div className={styles.headlineRow}>
          <div className={styles.headlineCopy}>
            {headline && <h2 className={cn('top-headline', styles.topHeadline)}>{headline}</h2>}
            {description && <p className={styles.description}>{description}</p>}
          </div>
          {cta && (
            <Button
              link={cta}
              variant="secondary"
              icon="plus"
            />
          )}
        </div>
        {boxes?.length && (
          <BentoBoxesClient
            boxes={boxes}
            configuration={configuration}
          />
        )}
      </div>
    </div>
  )
}

export default BentoBoxesModule
