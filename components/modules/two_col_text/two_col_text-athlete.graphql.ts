import gql from 'graphql-tag'

export default gql`
  fragment AthleteModuleTwoColText on Athlete_Athletelayout_PageBuilder_TwoColText {
    fieldGroupName
    spacing
    leftCol
    rightCol
  }
`
