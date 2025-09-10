import React, { FunctionComponent } from 'react'
import { Page_Flexiblelayout_PageBuilder_FeatureCarousel } from 'interfaces/types'
import FeatureClient from './feature_carousel_client'

export const typename = 'Flexiblelayout_PageBuilder_FeatureCarousel'

const FeatureCarouselModule: FunctionComponent<{ module: Page_Flexiblelayout_PageBuilder_FeatureCarousel }> = (props) => {
  return <FeatureClient {...props} />
}

export default FeatureCarouselModule
