import gql from 'graphql-tag'

export default gql`
  fragment Asset on MediaItem {
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
`
