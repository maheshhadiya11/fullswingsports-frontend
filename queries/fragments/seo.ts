import gql from 'graphql-tag'

export default gql`
  fragment SeoFragment on PostTypeSEO {
    title
    metaDesc
    opengraphDescription
    opengraphType
    opengraphTitle
    opengraphUrl
    opengraphSiteName
    opengraphModifiedTime
    twitterTitle
    opengraphImage {
      sourceUrl
    }
    schema {
      raw
      articleType
      pageType
    }
    twitterDescription
    twitterImage {
      sourceUrl
    }
    opengraphAuthor
    metaRobotsNoindex
    metaRobotsNofollow
    metaKeywords
    canonical
  }
`
