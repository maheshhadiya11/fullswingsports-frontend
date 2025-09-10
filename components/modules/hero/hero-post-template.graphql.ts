import gql from 'graphql-tag'

export default gql`
  fragment PostTemplateHero on Post_Postlayout_PostHero {
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
