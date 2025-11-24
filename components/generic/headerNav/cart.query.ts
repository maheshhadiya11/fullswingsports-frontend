import gqlTag from 'graphql-tag'

const CartQuery = gqlTag`
    query GetCart {
        cart {
            isEmpty
            contents {
                itemCount
                productCount
            }
            contentsTotal
        }
    }
`

export default CartQuery
