import gql from 'graphql-tag'
import LinkFragment from './fragments/link'
import AssetFragment from './fragments/asset'

const BlogLandingQuery = gql`
  ${AssetFragment}
  ${LinkFragment}
  query BlogLandingQuery {
    globalSettings {
      glb {
        blogPostFallbackImage {
          ...Asset
        }
        blogLandingHeadline
        blogLandingCopy
        filterTags {
          name
        }
        featuredPosts {
          post {
            ... on Post {
              id
              title
              slug
              uri
              excerpt
              postLayout {
                fieldGroupName
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
        }

        eyebrow
        headline
        copy
        cta {
          link {
            ...Link
          }
        }
        media {
          mediaType
          image {
            ...Asset
          }
          videoId
        }
        secondaryCta {
          ...Link
        }
      }
    }
  }
`

export default BlogLandingQuery
