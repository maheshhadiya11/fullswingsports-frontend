import gql from 'graphql-tag'

export default gql`
  fragment Card on Page_Flexiblelayout_PageBuilder_FiftyFifty_cards {
    headline
    copy
    eyebrow
    media {
      mediaType
      image {
        ...Asset
      }
      videoId
    }
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
  }

  fragment ModuleFiftyFifty on Page_Flexiblelayout_PageBuilder_FiftyFifty {
    fieldGroupName
    spacing
    headline
    layout
    cards {
      ...Card
    }
  }
`
