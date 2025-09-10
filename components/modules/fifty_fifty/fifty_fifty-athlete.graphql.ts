import gql from 'graphql-tag'

export default gql`
  fragment AthleteCard on Athlete_Athletelayout_PageBuilder_FiftyFifty_cards {
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

  fragment AthleteModuleFiftyFifty on Athlete_Athletelayout_PageBuilder_FiftyFifty {
    fieldGroupName
    spacing
    headline
    layout
    cards {
      ...AthleteCard
    }
  }
`
