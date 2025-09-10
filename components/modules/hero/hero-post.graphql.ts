import gql from 'graphql-tag'

export default gql`
  fragment PostModuleHero on Post_Postlayout_PageBuilder_Hero {
    fieldGroupName
    spacing
    secondaryHeadline
    eyebrow
    headline
    copy
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
