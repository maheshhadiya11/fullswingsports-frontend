import gql from 'graphql-tag'
import AssetFragment from './fragments/asset'

export default gql`
  ${AssetFragment}
  query filterPosts($category: String = "", $limit: Int = 6) {
    posts(first: $limit, where: { categoryName: $category }) {
      nodes {
        id
        slug
        uri
        title
        excerpt
        categories {
          nodes {
            name
          }
        }
        postLayout {
          postHero {
            media {
              mediaType
              image {
                ...Asset
              }
              videoId
            }
            copy
          }
        }
        featuredImage {
          cursor
          node {
            altText
            dataUrl
            mediaItemUrl
            mediaDetails {
              height
              width
            }
            focalPoint
            title
          }
        }
      }
    }
  }
`
