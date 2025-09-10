import gql from 'graphql-tag'

export default gql`
  fragment PostModuleTtac on Post_Postlayout_PageBuilder_Ttac {
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
