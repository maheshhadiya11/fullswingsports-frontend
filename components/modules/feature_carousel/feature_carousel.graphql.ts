import gql from 'graphql-tag'

export default gql`
  fragment ModuleFeatureCarousel on Page_Flexiblelayout_PageBuilder_FeatureCarousel {
    fieldGroupName
    spacing
    headline
    mobileLayout
    color
    features {
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
      eyebrow
      headline
      hideGradient
      media {
        mediaType
        image {
          ...Asset
        }
        videoId
      }
      secondaryCta {
        ...Link
      }
    }
  }
`
