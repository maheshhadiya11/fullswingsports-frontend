import gql from 'graphql-tag'

export default gql`
  fragment TeamTout on GlobalSettings_Glb {
    fieldGroupName
    teamMembers {
      athlete {
        ... on Athlete {
          title
          link
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
  }
`
