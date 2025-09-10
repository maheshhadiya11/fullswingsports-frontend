---
to: "<%= hasExtraQuery ? `components/modules/${ h.inflection.underscore(name) }/${ h.inflection.underscore(name) }.extraqueries.graphql.ts` : null %>"
---
import gql from 'graphql-tag'

export default [
//   gql`query Portfolio {
//     Set_Modules_Portfolio__sectors: terms(taxonomy: "sectors") {
//       data {
//         slug
//        title
//       }
//     }
//   }
// `
]

