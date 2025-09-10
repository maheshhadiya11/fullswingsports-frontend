import React from 'react'
import blockInventory from 'cms/inventory'
import {
  Athlete_Athletelayout_PageBuilder,
  GlobalSettings_Glb,
  GlobalSettings_Glb_SubNavigationMenus,
  Page_Flexiblelayout_PageBuilder,
  Post_Postlayout_PageBuilder,
} from 'interfaces/types'

type GlobalRepeater =
  | { prefix: 'Page'; modules: Page_Flexiblelayout_PageBuilder[]; global?: GlobalSettings_Glb }
  | { prefix: 'Post'; modules: Post_Postlayout_PageBuilder[] }
  | { prefix: 'Athlete'; modules: Athlete_Athletelayout_PageBuilder[] }

type Module = Page_Flexiblelayout_PageBuilder | Post_Postlayout_PageBuilder | Athlete_Athletelayout_PageBuilder

// @ts-ignore
const Repeater = ({ prefix, modules, global }: GlobalRepeater) => {
  const isSubNav = (module: Module) => {
    return ['Page_Flexiblelayout_PageBuilder_SubNavigation'].includes(module.fieldGroupName)
  }

  const isBackgroundWrap = (module: Module) => {
    return [
      'Page_Flexiblelayout_PageBuilder_BackgroundWrap',
      'Athlete_Athletelayout_PageBuilder_BackgroundWrap',
    ].includes(module.fieldGroupName)
  }

  const renderModule = (module: Module, index: number) => {
    if (!module?.fieldGroupName) {
      return null
    }
    const moduleType = module.fieldGroupName.replace(`${prefix}_`, '').replace(`${prefix}layout`, 'Flexiblelayout')
    const blockItem = Object.values(blockInventory).find((b) => b.typename === moduleType)
    const blockName = module.fieldGroupName.substring(
      module.fieldGroupName.lastIndexOf('_') + 1,
      module.fieldGroupName.length,
    )

    let subNav: GlobalSettings_Glb_SubNavigationMenus | undefined

    if (isSubNav(module)) {
      // @ts-ignore
      subNav = global.subNavigationMenus?.find((menu) => menu.id === module.id)
    }

    if (blockItem) {
      const key = blockName.charAt(0).toLowerCase() + blockName.slice(1)
      const props = subNav
        ? {
            module: {
              ...module,
              menu: subNav,
            },
            key: `module.${module.__typename}__${index}`,
          }
        : index === 0
        ? { module, first: true, key: `module.${module.__typename}__${index}` }
        : { module, key: `module.${module.__typename}__${index}` }

      if (key) {
        return React.createElement(blockItem.module, props, null)
      }
    }
    if (process.env.NODE_ENV !== 'development') return null
    return <div key={module.fieldGroupName}>Module {module.fieldGroupName}: not found</div>
  }

  let group = 0
  let end = modules.length

  const wrapSections = modules.reduce((wrapped: Module[][], module, index) => {
    if (isBackgroundWrap(module)) {
      if (index > 0 && wrapped[group]?.length) {
        group += 1
      }
      // @ts-ignore
      end = module.modules + index
    }

    if (!wrapped[group]) {
      wrapped.push([])
    }

    wrapped[group].push(module)

    if (index === end) {
      group += 1
    }

    return wrapped
  }, [])

  return (
    <React.Fragment key="modules">
      {wrapSections.map((section) =>
        isBackgroundWrap(section[0]) ? (
          <div
            // @ts-ignore
            className={`background-wrap overlap-${section[0].overlap} spacing-${
              // @ts-ignore
              section[1]?.spacing ? section[1].spacing : 'none'
            }`}
          >
            {section.map(renderModule)}
          </div>
        ) : (
          <>{section.map(renderModule)}</>
        ),
      )}
    </React.Fragment>
  )
}

export default Repeater
