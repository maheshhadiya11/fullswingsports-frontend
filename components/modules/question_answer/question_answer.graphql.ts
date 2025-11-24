import gql from 'graphql-tag'

export default gql`
  fragment ModuleQuestionAnswer on Page_Flexiblelayout_PageBuilder_QuestionAnswer {
    fieldGroupName
    spacing
    rows {
      question
      answer
    }
  }
`
