import gql from 'graphql-tag'

export default gql`
  fragment ModuleBanner on Page_Flexiblelayout_PageBuilder_Banner {
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
