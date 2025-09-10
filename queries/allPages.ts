import gql from 'graphql-tag'

export default gql`
  query allPages {
    pages(last: 500, where: { status: PUBLISH }) {
      nodes {
        id
        uri
        slug
      }
    }
  }
`
