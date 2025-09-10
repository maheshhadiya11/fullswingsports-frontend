import React, { FunctionComponent } from 'react'
import cn from 'classnames'
import { Athlete_Athletelayout_PageBuilder_TwoColText } from 'interfaces/types'
import parse from 'html-react-parser'
import styles from './two_col_text.module.scss'

export const typename = 'Flexiblelayout_PageBuilder_TwoColText'
const options = {
  replace: (domNode) => {
    if (domNode.type === 'tag' && domNode.name === 'br') {
      return <br />
    }
    return undefined
  },
}

const TwoColTextModule: FunctionComponent<{ module: Athlete_Athletelayout_PageBuilder_TwoColText }> = ({ module }) => {
  const { leftCol, rightCol, spacing } = module

  return (
    <div className={cn(styles.root, `container spacing-${spacing}`)}>
      <div className="default-grid">
        <div className={cn(styles.leftCol)}>{parse(leftCol.replace(/\r?\n/g, '<br />') || '', options)}</div>
        <div className={cn(styles.rightCol)}>{parse(rightCol.replace(/\r?\n/g, '<br />') || '', options)}</div>
      </div>
    </div>
  )
}

export default TwoColTextModule
