'use client'

import React, { FunctionComponent } from 'react'
import cn from 'classnames'
import { Page_Flexiblelayout_PageBuilder_ContactForm } from 'interfaces/types'
import { FormData } from 'components/generic/form/form.interface'
import Form from 'components/generic/form/form'
import Link from 'next/link'
import Icon, { IconOption } from 'components/generic/icon/icon'
import styles from './contact_form.module.scss'
import states from './states.json'

export const typename = 'Flexiblelayout_PageBuilder_ContactForm'

const installationTags = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
]
const hearTags = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
]

const ContactFormClient: FunctionComponent<{ module: Page_Flexiblelayout_PageBuilder_ContactForm }> = ({ module }) => {
  const { headline, copy, contactCards } = module

  return (
    <div className={cn(styles.root, 'container')}>
      <div className={cn('default-grid')}>
        {headline && <h2 className={cn(styles.heading)}>{headline}</h2>}
        {copy && <p className={cn(styles.subline)}>{copy}</p>}
        <div className={cn(styles.leftColumn)}>
          <div className={cn(styles.ctaContainer)}>
            {contactCards?.map((block) => {
              const Card = block?.link?.url ? Link : 'div'
              return (
                <Card
                  href={block?.link?.url}
                  className={cn(styles.ctaBox)}
                >
                  <div className={cn(styles.icon)}>
                    <Icon icon={block.icon as IconOption} />
                  </div>
                  <h3 className={cn(styles.ctaLabel)}>{block.headline}</h3>
                  <h4 className={cn(styles.ctaCopy)}>{block.copy}</h4>
                </Card>
              )
            })}
          </div>
        </div>
        {/* <Form
          onSubmit={handleSubmit}
          className={cn(styles.form)}
          countries={states}
          intallationTypes={installationTags}
          hearFromChoices={hearTags}
        /> */}
        <div className={cn(styles.form)}>
          <iframe
            className="focus:outline-none"
            src="https://www2.fullswinggolf.com/l/419982/2023-11-03/wdrfdy"
            width="100%"
            title="Contact Form"
            height="1167"
            frameBorder="0"
            style={{ border: 0 }}
          />
        </div>
      </div>
    </div>
  )
}

export default ContactFormClient
