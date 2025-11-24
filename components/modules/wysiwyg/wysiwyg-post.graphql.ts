import gql from 'graphql-tag'

export default gql`
  fragment PostModuleWysiwyg on Post_Postlayout_PageBuilder_Wysiwyg {
    fieldGroupName
    spacing
    copy
  }
`
