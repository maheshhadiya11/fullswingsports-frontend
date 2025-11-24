import gql from 'graphql-tag'

export default gql`
  fragment ModuleAnchorMenu on Page_Flexiblelayout_PageBuilder_AnchorMenu {
    fieldGroupName
    title
    anchors {
      label
      link
    }
    cta {
      ...Link
    }
  }
`
