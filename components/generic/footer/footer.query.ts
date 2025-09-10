import gql from 'graphql-tag'
import Asset from 'queries/fragments/asset'
import Link from 'queries/fragments/link'

const FooterQuery = gql`
  ${Asset}
  ${Link}
  query GlobalFooter {
    globalSettings {
      glb {
        promoBlocks {
          icon
          headline
          copy
          link {
            ...Link
          }
        }
        quoteBlock {
          quote
          quoteAuthor
        }
        footerLogo {
          ...Asset
        }
        footerMenu {
          sectionTitle
          subLinks {
            link {
              ...Link
            }
          }
        }
        copyright
        footerSocials {
          sectionTitle
          links {
            image {
              ...Asset
            }
            link {
              ...Link
            }
          }
        }
        logos {
          copy
          image {
            ...Asset
          }
          link {
            ...Link
          }
        }
        legalLinks {
          link {
            ...Link
          }
        }
      }
    }
  }
`

export default FooterQuery
