'use client'

import React, { useState } from 'react'
import cn from 'classnames'
import { Page_Flexiblelayout_PageBuilder_Accordion } from 'interfaces/types'
import AnimateHeight from 'react-animate-height'
import styles from './accordion.module.scss'

export const typename = 'Flexiblelayout_PageBuilder_Accordion'

const AccordionModule: React.FunctionComponent<{ module: Page_Flexiblelayout_PageBuilder_Accordion }> = ({
  module,
}) => {
  const { headline, questions } = module

  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <div className={cn(styles.root, 'container')}>
      <div className="default-grid">
        <h2 className={cn(styles.headline)}>{headline}</h2>
        {questions && (
          <div className={cn(styles.questionContainer)}>
            {questions.map((question, index) => (
              <div
                key={question.question}
                className={styles.accordionItem}
              >
                <button
                  type="button"
                  className={cn(styles.accordionButton, 'group', activeIndex === index && styles.active)}
                  onClick={() => setActiveIndex(index === activeIndex ? null : index)}
                >
                  {question.question}
                  <span className={cn(styles.icon, activeIndex === index && styles.active)} />
                </button>
                <AnimateHeight
                  duration={300}
                  height={index === activeIndex ? 'auto' : 0}
                >
                  <div
                    className={styles.accordionContent}
                    dangerouslySetInnerHTML={{ __html: question.answer }}
                  />
                </AnimateHeight>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default AccordionModule
