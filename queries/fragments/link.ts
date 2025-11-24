import gql from 'graphql-tag'

export default gql`
  fragment Link on AcfLink {
    url
    title
    target
  }
`
