import gql from 'graphql-tag'

export default gql`
  fragment Product on SimpleProduct {
    id
    title
    slug
    price
    productId
  }
`
