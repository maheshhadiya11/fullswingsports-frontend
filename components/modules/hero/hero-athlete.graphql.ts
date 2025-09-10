import gql from 'graphql-tag'

export default gql`
  fragment AthleteModuleHero on Athlete_Athletelayout_PageBuilder_Hero {
    fieldGroupName
    spacing
    secondaryHeadline
    eyebrow
    headline
    copy
    showGradient
    quote
    quoteAuthor
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
    color
    size
    imageSize
    layout
    showPaymentInfomation
    product {
      ...Product
      ...BundleProduct
    }
  }
`
