---
to: components/modules/<%= h.inflection.underscore(name) %>/<%= h.inflection.underscore(name) %>.graphql.ts
---
import gql from 'graphql-tag'

export default gql`
fragment Module<%= h.inflection.camelize(name) %> on Page_Flexiblelayout_PageBuilder_<%= h.inflection.camelize(name) %> {
    fieldGroupName
}
`
