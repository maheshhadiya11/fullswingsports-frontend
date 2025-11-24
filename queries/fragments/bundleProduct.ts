import gql from 'graphql-tag'

export default gql`
  fragment BundleProduct on BundleProduct {
    id
    title
    bundlePriceMin
    uri
  }
`
