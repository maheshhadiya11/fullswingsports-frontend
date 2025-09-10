import React, { FunctionComponent, Fragment } from 'react'
import cn from 'classnames'
import { Page_Flexiblelayout_PageBuilder_QuestionAnswer } from 'interfaces/types'
import parse from 'html-react-parser'
import styles from './question_answer.module.scss'

export const typename = 'Flexiblelayout_PageBuilder_QuestionAnswer'

const QuestionAnswerModule: FunctionComponent<{ module: Page_Flexiblelayout_PageBuilder_QuestionAnswer }> = ({
  module,
}) => {
  const { rows, spacing } = module
  return (
    <div className={cn(styles.root, 'container', `spacing-${spacing}`)}>
      <div className="default-grid">
        {!!rows.length &&
          rows.map((row) => (
            <Fragment key={row.question}>
              <span className={cn(styles.icon)}>Q.</span>
              <span className={cn(styles.questionText)}>{row.question}</span>
              <div className={cn(styles.separator)} />
              <span className={cn(styles.icon)}>A.</span>
              <span className={cn(styles.answerText)}>{parse(row.answer || '')}</span>
              <div className={cn(styles.separatorAfter)} />
            </Fragment>
          ))}
      </div>
    </div>
  )
}

export default QuestionAnswerModule
