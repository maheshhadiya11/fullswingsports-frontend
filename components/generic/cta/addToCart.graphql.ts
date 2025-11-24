import gql from 'graphql-tag'

export default gql`
  mutation AddProduct($input: AddToCartInput!) {
    addToCart(input: $input) {
      cart {
        total
      }
    }
  }
`
