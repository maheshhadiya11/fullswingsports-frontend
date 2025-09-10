import gql from 'graphql-tag'

export default gql`
  fragment PostModuleGallerySlideshow on Post_Postlayout_PageBuilder_GallerySlideshow {
    fieldGroupName
    headline
    layout
    spacing
    slides {
      caption
      media {
        mediaType
        image {
          ...Asset
        }
        videoId
      }
    }
  }
`
