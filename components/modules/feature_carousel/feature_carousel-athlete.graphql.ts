import gql from 'graphql-tag'

export default gql`
  fragment AthleteModuleFeatureCarousel on Athlete_Athletelayout_PageBuilder_FeatureCarousel {
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
