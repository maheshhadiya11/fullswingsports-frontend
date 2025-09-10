import React, { FunctionComponent } from 'react'
import cn from 'classnames'
import { Post_Postlayout_PageBuilder_Wysiwyg } from 'interfaces/types'
import RichText from 'components/generic/rich_text/rich_text'
import styles from './wysiwyg.module.scss'

export const typename = 'Flexiblelayout_PageBuilder_Wysiwyg'

const WysiwygModule: FunctionComponent<{ module: Post_Postlayout_PageBuilder_Wysiwyg }> = ({ module }) => {
  const { spacing, copy } = module
  return (
    <div className={cn(styles.root, 'container', `spacing-${spacing}`, 'default-grid')}>
      <RichText
        content={copy}
        className={styles.content}
      />
    </div>
  )
}

export default WysiwygModule
