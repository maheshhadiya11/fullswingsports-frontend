import gql from 'graphql-tag'

export default gql`
  fragment AthleteModuleIntroQuoter on Athlete_Athletelayout_PageBuilder_IntroQuoter {
    fieldGroupName
    spacing
    quote
    subline
    highlightonscroll
    layout
    isquoted
  }
`
