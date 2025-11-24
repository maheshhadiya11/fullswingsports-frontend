---
to: cms/inventory.ts
before: HYGEN_IMPORT
inject: true
---
import { typename as <%= h.inflection.camelize(name) %>ModuleTypename } from '../components/modules/<%= h.inflection.underscore(name) %>/<%= h.inflection.underscore(name) %>'
import <%= h.inflection.camelize(name) %>ModuleQuery from '../components/modules/<%= h.inflection.underscore(name) %>/<%= h.inflection.underscore(name) %>.graphql'
<%- hasExtraQuery ? `import ${ h.inflection.camelize(name) }BlockExtraQueries from '../components/modules/${ h.inflection.underscore(name) }/${ h.inflection.underscore(name) }.extraqueries.graphql'` : '' %>
