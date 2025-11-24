import gql from 'graphql-tag'

export default gql`
  fragment PostModuleQuestionAnswer on Post_Postlayout_PageBuilder_QuestionAnswer {
    fieldGroupName
    spacing
    rows {
      question
      answer
    }
  }
`
