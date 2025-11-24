import gql from 'graphql-tag'

export default gql`
  fragment ModuleIntroQuoter on Page_Flexiblelayout_PageBuilder_IntroQuoter {
    fieldGroupName
    spacing
    quote
    subline
    highlightonscroll
    layout
    isquoted
  }
`
