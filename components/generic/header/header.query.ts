import gqlTag from 'graphql-tag'
import Asset from 'queries/fragments/asset'
import Link from 'queries/fragments/link'

const HeaderQuery = gqlTag`
  ${Link}
  ${Asset}
  query MainMenu {
    globalSettings {
      glb {
        logo {
          ...Asset
        }
        mainMenu {
          link {
            ...Link
          }
          subMenuType
          subMenu {
            link {
              ...Link
            }
          }
          featuredProducts {
            headline
            price
            image {
              ...Asset
            }
            link {
              ...Link
            }
          }
        }
        showNotification
        contactInformationMobile {
          callLink {
            ...Link
          }
          links {
            icon
            link {
              ...Link
            }
          }
        }
        teamMembers {
          athlete {
            ... on Athlete {
              athleteId
              title
              uri
              slug
              athletesPage {
                shortDescription
                featuredImage {
                  ...Asset
                }
              }
            }
          }
        }
        contactMenu {
          cta {
            ...Link
          }
          ctaCards {
            icon
            headline
            copy
            link {
              ...Link
            }
          }
          links {
            link {
              ...Link
            }
          }
        }
        cartLink
      }
    }
  }
`

export default HeaderQuery
