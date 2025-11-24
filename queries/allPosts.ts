import gql from 'graphql-tag'

export default gql`
  query allPosts {
    posts(last: 500, where: { status: PUBLISH }) {
      nodes {
        slug
      }
    }
  }
`
