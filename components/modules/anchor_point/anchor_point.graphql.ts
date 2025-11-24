import gql from 'graphql-tag'

export default gql`
  fragment ModuleAnchorPoint on Page_Flexiblelayout_PageBuilder_AnchorPoint {
    fieldGroupName
    id
  }
`
