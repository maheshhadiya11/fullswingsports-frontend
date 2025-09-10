---
to: components/modules/<%= h.inflection.underscore(name) %>/<%= h.inflection.underscore(name) %>.tsx
---
import React, { FunctionComponent } from 'react'
import cn from 'classnames'
import { Page_Flexiblelayout_PageBuilder_<%= h.inflection.camelize(name) %> } from 'interfaces/types'
import styles from './<%= h.inflection.underscore(name) %>.module.scss'

export const typename = 'Flexiblelayout_PageBuilder_<%= h.inflection.camelize(name) %>'

const <%= h.inflection.camelize(name) %>Module: FunctionComponent<{ module: Page_Flexiblelayout_PageBuilder_<%= h.inflection.camelize(name) %> }> = ({ module }) => (
  <div className={cn(styles.root, 'container')}>
    <%= h.inflection.humanize(name) %> Module:
    {module.fieldGroupName}
  </div>
)

export default <%= h.inflection.camelize(name) %>Module
