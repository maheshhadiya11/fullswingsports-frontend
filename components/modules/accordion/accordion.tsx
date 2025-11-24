import React, { FunctionComponent } from 'react'
import { Page_Flexiblelayout_PageBuilder_Accordion } from 'interfaces/types'
import AccordionClient from './accordionClient'

export const typename = 'Flexiblelayout_PageBuilder_Accordion'

const AccordionModule: FunctionComponent<{ module: Page_Flexiblelayout_PageBuilder_Accordion }> = ({ module }) => {
  const { spacing } = module

  return (
    <div className={`spacing-${spacing}`}>
      <AccordionClient module={module} />
    </div>
  )
}

export default AccordionModule
