import gql from 'graphql-tag'

export default gql`
  fragment ModuleSubNavigation on GlobalSettings_Glb {
    subNavigationMenus {
      id
      title
      links {
        link {
          ...Link
        }
      }
      cta {
        ...Link
      }
    }
  }
`
