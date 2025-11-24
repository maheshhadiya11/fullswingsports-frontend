import gql from 'graphql-tag'

export default gql`
  fragment ModuleAccordion on Page_Flexiblelayout_PageBuilder_Accordion {
    fieldGroupName
    spacing
    headline
    questions {
      question
      answer
    }
  }
`
