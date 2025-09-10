import React, { FunctionComponent } from 'react'
import cn from 'classnames'
import { Page_Flexiblelayout_PageBuilder_AnchorPoint } from 'interfaces/types'
import styles from './anchor_point.module.scss'

export const typename = 'Flexiblelayout_PageBuilder_AnchorPoint'

const AnchorPointModule: FunctionComponent<{ module: Page_Flexiblelayout_PageBuilder_AnchorPoint }> = ({ module }) => (
  <span
    id={module.id}
    className={cn(styles.root)}
  />
)

export default AnchorPointModule
