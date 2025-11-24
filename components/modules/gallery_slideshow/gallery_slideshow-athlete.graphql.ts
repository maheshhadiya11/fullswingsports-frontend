import gql from 'graphql-tag'

export default gql`
  fragment AthleteModuleGallerySlideshow on Athlete_Athletelayout_PageBuilder_GallerySlideshow {
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
