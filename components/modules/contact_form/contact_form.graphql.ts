import gql from 'graphql-tag'

export default gql`
  fragment ModuleContactForm on Page_Flexiblelayout_PageBuilder_ContactForm {
    fieldGroupName
    spacing
    headline
    copy
    contactCards {
      icon
      headline
      copy
      link {
        ...Link
      }
    }
  }
`
