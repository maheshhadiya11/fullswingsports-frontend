import React, { FunctionComponent } from 'react'
import { Page_Flexiblelayout_PageBuilder_ContactForm } from 'interfaces/types'
import ContactFormClient from './contact_form_client'

export const typename = 'Flexiblelayout_PageBuilder_ContactForm'

const ContactFormModule: FunctionComponent<{ module: Page_Flexiblelayout_PageBuilder_ContactForm }> = ({ module }) => {
  const { spacing } = module
  return (
    <div className={`spacing-${spacing}`}>
      <ContactFormClient module={module} />
    </div>
  )
}

export default ContactFormModule
