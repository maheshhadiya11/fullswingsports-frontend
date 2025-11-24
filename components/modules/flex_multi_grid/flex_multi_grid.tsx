import React, { FunctionComponent } from 'react'
import { Page_Flexiblelayout_PageBuilder_FlexMultiGrid } from 'interfaces/types'
import FlexMultiGridClient from './flex_multi_grid_client'

export const typename = 'Flexiblelayout_PageBuilder_FlexMultiGrid'
const FlexMultiGridModule: FunctionComponent<{ module: Page_Flexiblelayout_PageBuilder_FlexMultiGrid }> = ({
  module,
}) => {
  return <FlexMultiGridClient module={module} />
}

export default FlexMultiGridModule
