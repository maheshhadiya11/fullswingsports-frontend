import React, { FunctionComponent } from 'react'
import { GlobalSettings_Glb_SubNavigationMenus, Page_Flexiblelayout_PageBuilder_SubNavigation } from 'interfaces/types'
import SubNavigationClient from './sub_navigation_client'

export const typename = 'Flexiblelayout_PageBuilder_SubNavigation'

interface SubNavigationProps extends Page_Flexiblelayout_PageBuilder_SubNavigation {
  menu: GlobalSettings_Glb_SubNavigationMenus
}

const SubNavigationModule: FunctionComponent<{ module: SubNavigationProps }> = ({ module }) => {
  const { menu } = module

  return menu && <SubNavigationClient menu={menu} />
}

export default SubNavigationModule
