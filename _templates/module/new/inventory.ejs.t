---
to: cms/inventory.ts
before: HYGEN_START
inject: true
---
  {
    module: dynamic(() => import('../components/modules/<%= h.inflection.underscore(name) %>/<%= h.inflection.underscore(name) %>')),
    query: <%= h.inflection.camelize(name) %>ModuleQuery,
    typename: <%= h.inflection.camelize(name) %>ModuleTypename,
    extraQueries: <%= hasExtraQuery ? `${ h.inflection.camelize(name) }ModuleExtraQueries` : `undefined` %>,
  },
