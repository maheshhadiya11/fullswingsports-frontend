import gql from 'graphql-tag'

export default gql`
  fragment ModuleTabbedFeature on Page_Flexiblelayout_PageBuilder_TabbedFeature {
    fieldGroupName
    spacing
    headline
    cta {
      ...Link
    }
    layout
    media {
      mediaType
      image {
        ...Asset
      }
      videoId
    }
    tabs {
      headline
      copy
      cta {
        ...Link
      }
      image {
        ...Asset
      }
    }
  }
`
