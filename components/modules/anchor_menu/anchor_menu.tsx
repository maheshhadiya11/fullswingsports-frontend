import React, { FunctionComponent } from 'react'
import { Page_Flexiblelayout_PageBuilder_AnchorMenu } from 'interfaces/types'
import AnchorMenuClient from './anchor_menu_client'

export const typename = 'Flexiblelayout_PageBuilder_AnchorMenu'

const AnchorMenuModule: FunctionComponent<{ module: Page_Flexiblelayout_PageBuilder_AnchorMenu }> = ({ module }) => (
  <AnchorMenuClient module={module} />
)

export default AnchorMenuModule
