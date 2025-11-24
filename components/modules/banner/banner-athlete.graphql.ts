import gql from 'graphql-tag'

export default gql`
  fragment AthleteModuleBanner on Athlete_Athletelayout_PageBuilder_Banner {
    fieldGroupName
    spacing
    headline
    copy
    cta {
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
