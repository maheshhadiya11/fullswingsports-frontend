import gql from 'graphql-tag'

export default gql`
  fragment AthleteTemplateHero on Athlete_Athletelayout_AthleteHero {
    fieldGroupName
    eyebrow
    headline
    copy
    media {
      mediaType
      image {
        ...Asset
      }
      videoId
    }
  }
`
