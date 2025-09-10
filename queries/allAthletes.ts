import gql from 'graphql-tag'

export default gql`
  query allAthletes {
    athletes(last: 500) {
      nodes {
        id
        slug
      }
    }
  }
`
