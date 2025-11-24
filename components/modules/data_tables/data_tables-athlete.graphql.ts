import gql from 'graphql-tag'

export default gql`
  fragment AthleteModuleDataTables on Athlete_Athletelayout_PageBuilder_DataTables {
    fieldGroupName
    spacing
    headline
    copy
    headline1
    headline2
    headline3
    tableStyle
    link {
      ...Link
    }
    rows {
      label
      firstValue
      secondValue
      firstChecked
      secondChecked
    }
  }
`
