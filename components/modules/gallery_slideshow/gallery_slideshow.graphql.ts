import gql from 'graphql-tag'

export default gql`
  fragment ModuleGallerySlideshow on Page_Flexiblelayout_PageBuilder_GallerySlideshow {
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
