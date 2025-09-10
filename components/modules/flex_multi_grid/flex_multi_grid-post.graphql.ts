import gql from 'graphql-tag'

export default gql`
  fragment PostModuleFlexMultiGrid on Post_Postlayout_PageBuilder_FlexMultiGrid {
    fieldGroupName
    headline
    layout
    layoutMode
    spacing
    cta {
      ...Link
    }
    tabs {
      title
      gridItems {
        headline
        copy
        post {
          ... on Post {
            title
            slug
            excerpt
            postLayout {
              postHero {
                copy
                media {
                  mediaType
                  image {
                    ...Asset
                  }
                  videoId
                }
              }
            }
            featuredImage {
              node {
                ...Asset
              }
            }
          }
        }
        cta {
          ...Link
        }
        image {
          ...Asset
        }
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
`
