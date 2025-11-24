import gql from 'graphql-tag'

export default gql`
  fragment ModuleLeftRight on Page_Flexiblelayout_PageBuilder_LeftRight {
    fieldGroupName
    topHeadline
    spacing
    layout
    eyebrow
    headline
    copy
    cta {
      linkType
      link {
        ...Link
      }
      linkProduct {
        ...Product
        ...BundleProduct
      }
    }
    secondaryCta {
      ...Link
    }
    media {
      mediaType
      image {
        ...Asset
      }
      videoId
    }
  }
`
