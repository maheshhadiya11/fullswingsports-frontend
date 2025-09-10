import gql from 'graphql-tag'

export default gql`
  fragment ModuleBackgroundWrap on Page_Flexiblelayout_PageBuilder_BackgroundWrap {
    fieldGroupName
    modules
    overlap
  }
`
