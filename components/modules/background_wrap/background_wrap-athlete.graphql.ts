import gql from 'graphql-tag'

export default gql`
  fragment AthleteModuleBackgroundWrap on Athlete_Athletelayout_PageBuilder_BackgroundWrap {
    fieldGroupName
    modules
    overlap
  }
`
