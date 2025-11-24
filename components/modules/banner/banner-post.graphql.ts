import gql from 'graphql-tag'

export default gql`
  fragment PostModuleBanner on Post_Postlayout_PageBuilder_Banner {
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
