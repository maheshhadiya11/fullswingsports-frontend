import React, { FunctionComponent } from 'react'
import cn from 'classnames'
import { Page_Flexiblelayout_PageBuilder_TabbedFeature } from 'interfaces/types'
import styles from './tabbed_feature.module.scss'
import TabbedFeatureVertical from './tabbed_feature_vertical'
import TabbedFeatureHorizontal from './tabbed_feature_horizontal'

export const typename = 'Flexiblelayout_PageBuilder_TabbedFeature'

const TabbedFeatureModule: FunctionComponent<{ module: Page_Flexiblelayout_PageBuilder_TabbedFeature }> = ({
  module,
}) => {
  const { layout, spacing } = module
  return (
    <div className={cn(styles.root, spacing && `spacing-${spacing}`)}>
      {layout === 'vertical' && <TabbedFeatureVertical module={module} />}
      {layout === 'horizontal' && <TabbedFeatureHorizontal module={module} />}
    </div>
  )
}

export default TabbedFeatureModule
