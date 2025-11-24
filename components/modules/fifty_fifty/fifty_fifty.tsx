import React, { FunctionComponent } from 'react'
import cn from 'classnames'
import { Page_Flexiblelayout_PageBuilder_FiftyFifty } from 'interfaces/types'
import styles from './fifty_fifty.module.scss'
import FiftyFiftyCard from './fiftyFiftyCard'

export const typename = 'Flexiblelayout_PageBuilder_FiftyFifty'

const FiftyFiftyModule: FunctionComponent<{ module: Page_Flexiblelayout_PageBuilder_FiftyFifty }> = ({ module }) => {
  const { spacing, headline, cards, layout } = module

  const isFullWidth = layout === 'left'

  return (
    <div className={cn(styles.root, 'container', `spacing-${spacing}`)}>
      <div className="default-grid">
        {headline && <h2 className="top-headline">{headline}</h2>}
        {!!cards?.length &&
          cards.map((card, index) => {
            const isLeft = index === 0 && !isFullWidth
            return (
              <FiftyFiftyCard
                key={`${card.headline}${index}`}
                left={isLeft}
                fullWidth={isFullWidth}
                module={card}
              />
            )
          })}
      </div>
    </div>
  )
}

export default FiftyFiftyModule
