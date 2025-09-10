import { DocumentNode } from 'graphql'

const convertGqlToString = (doc: DocumentNode): string => (doc.loc && doc.loc.source.body) || ''

export default convertGqlToString
