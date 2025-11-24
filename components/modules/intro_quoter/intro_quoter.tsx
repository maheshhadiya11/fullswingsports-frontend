import React, { FunctionComponent } from 'react'
import { Page_Flexiblelayout_PageBuilder_IntroQuoter } from 'interfaces/types'
import IntroQuoterClient from './intro_quoter_client'

export const typename = 'Flexiblelayout_PageBuilder_IntroQuoter'

const IntroQuoterModule: FunctionComponent<{ module: Page_Flexiblelayout_PageBuilder_IntroQuoter }> = ({ module }) => {
  const { spacing, quote, subline, highlightonscroll, layout, isquoted } = module

  return (
    <div className={`spacing-${spacing}`}>
      <IntroQuoterClient
        layout={layout}
        quote={quote}
        subline={subline}
        highlightonscroll={highlightonscroll}
        isquoted={isquoted}
      />
    </div>
  )
}

export default IntroQuoterModule
