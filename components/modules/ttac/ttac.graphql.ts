import gql from 'graphql-tag'

export default gql`
  fragment ModuleTtac on Page_Flexiblelayout_PageBuilder_Ttac {
    fieldGroupName
    spacing
    headline
    copy
    media {
      mediaType
      image {
        ...Asset
      }
      videoId
    }
    ctas {
      cta {
        linkType
        link {
          ...Link
        }
        linkProduct {
          ...Product
          ...BundleProduct
        }
        variant
        icon
      }
    }
  }
`
