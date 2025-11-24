import gql from 'graphql-tag'

export default gql`
  fragment AthleteModuleBentoBoxes on Athlete_Athletelayout_PageBuilder_BentoBoxes {
    fieldGroupName
    spacing
    configuration
    headline
    description
    cta {
      ...Link
    }
    boxes {
      icon
      headline
      copy
      backdrop
      media {
        mediaType
        image {
          ...Asset
        }
        videoId
      }
      cta {
        ...Link
      }
      openModal
      modal {
        modalType
        contactContent {
          spacing
          headline
          copy
          contactCards {
            icon
            headline
            copy
            link {
              ...Link
            }
          }
        }
        ttacContent {
          spacing
          headline
          copy
          media {
            mediaType
            image {
              ...Asset
            }
            videoId
          }
          ctas {
            cta {
              linkType
              link {
                ...Link
              }
              linkProduct {
                ...Product
                ...BundleProduct
              }
              variant
              icon
            }
          }
        }
        videoContent {
          videoId
        }
        galleryContent {
          spacing
          layout
          slides {
            media {
              mediaType
              image {
                ...Asset
              }
              videoId
            }
          }
        }
      }
    }
  }
`
