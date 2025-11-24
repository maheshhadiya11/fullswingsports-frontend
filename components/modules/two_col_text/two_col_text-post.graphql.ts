import gql from 'graphql-tag'

export default gql`
  fragment PostModuleTwoColText on Post_Postlayout_PageBuilder_TwoColText {
    fieldGroupName
    spacing
    leftCol
    rightCol
  }
`
