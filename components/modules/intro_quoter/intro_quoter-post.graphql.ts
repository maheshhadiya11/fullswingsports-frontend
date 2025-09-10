import gql from 'graphql-tag'

export default gql`
  fragment PostModuleIntroQuoter on Post_Postlayout_PageBuilder_IntroQuoter {
    fieldGroupName
    spacing
    quote
    subline
    highlightonscroll
    layout
    isquoted
  }
`
