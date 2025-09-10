/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\nquery GlobalFooter {\n  footerNav: nav(handle: \"footer\") {\n    tree {\n      page {\n        id\n        url\n        title\n      }\n      depth\n      children {\n        depth\n        page {\n          id\n          url\n          title\n        }\n      }\n    }\n  }\n}\n  ": types.GlobalFooterDocument,
    "\n    \n    query GlobalHeader {\n      headerNav: nav(handle: \"header\") {\n        tree {\n          page {\n            id\n            url\n            title\n          }\n          depth\n          children {\n            depth\n            page {\n              id\n              url\n              title\n            }\n          }\n        }\n      }\n      globalGeneric: globalSet(handle: \"generic\") {\n        handle\n        ... on GlobalSet_Generic {\n          logo {\n            ...CMSAsset\n          }\n        }\n      }\n      globalHeader: globalSet(handle: \"header\") {\n        ... on GlobalSet_Header {\n          handle\n        }\n      }\n    }\n  ": types.GlobalHeaderDocument,
    "\nfragment ModuleSample on Set_Replicator_ModuleSample {\n    type\n    left_image {\n      ...CMSAsset\n    }\n    headline\n    headline_h1\n    copy\n    buttons {\n      label\n      link\n      btn_type {\n        value\n      }\n    }\n    id\n}\n": types.ModuleSampleFragmentDoc,
    "\nfragment ModuleSpacer on Set_Replicator_ModuleSpacer {\n    type\n}\n": types.ModuleSpacerFragmentDoc,
    "\n  fragment CMSAsset on Asset_Assets {\n    id\n    placeholder\n    url\n    alt\n    permalink\n    extension\n    width\n    height\n    isImage: is_image\n    focusCss: focus_css\n  }\n": types.CmsAssetFragmentDoc,
    "\n  fragment SEO on seoMeta {\n    computed {\n      indexing\n      canonical\n      hreflang {\n        url\n        locale\n      }\n      locale\n      og_image {\n        ...CMSAsset\n      }\n      og_title\n      site_name\n      site_schema\n      title\n      twitter_handle\n      twitter_image {\n        ...CMSAsset\n      }\n      twitter_title\n    }\n    raw {\n      title\n      description\n      generate_social_images\n      og_title\n      og_description\n      twitter_title\n      twitter_description\n      canonical_custom\n      noindex\n      nofollow\n      sitemap_enabled\n      json_ld\n    }\n  }\n": types.SeoFragmentDoc,
    "\n  \n  \n  \n  query page($uri: String) {\n    entry(uri: $uri) {\n      id\n      title\n      slug\n      uri\n      seo {\n        ...SEO\n      }\n      ... on Entry_Pages_Pages {\n        replicator {\n          __typename\n          \n        }\n      }\n    }\n  }\n": types.PageDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery GlobalFooter {\n  footerNav: nav(handle: \"footer\") {\n    tree {\n      page {\n        id\n        url\n        title\n      }\n      depth\n      children {\n        depth\n        page {\n          id\n          url\n          title\n        }\n      }\n    }\n  }\n}\n  "): (typeof documents)["\nquery GlobalFooter {\n  footerNav: nav(handle: \"footer\") {\n    tree {\n      page {\n        id\n        url\n        title\n      }\n      depth\n      children {\n        depth\n        page {\n          id\n          url\n          title\n        }\n      }\n    }\n  }\n}\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    \n    query GlobalHeader {\n      headerNav: nav(handle: \"header\") {\n        tree {\n          page {\n            id\n            url\n            title\n          }\n          depth\n          children {\n            depth\n            page {\n              id\n              url\n              title\n            }\n          }\n        }\n      }\n      globalGeneric: globalSet(handle: \"generic\") {\n        handle\n        ... on GlobalSet_Generic {\n          logo {\n            ...CMSAsset\n          }\n        }\n      }\n      globalHeader: globalSet(handle: \"header\") {\n        ... on GlobalSet_Header {\n          handle\n        }\n      }\n    }\n  "): (typeof documents)["\n    \n    query GlobalHeader {\n      headerNav: nav(handle: \"header\") {\n        tree {\n          page {\n            id\n            url\n            title\n          }\n          depth\n          children {\n            depth\n            page {\n              id\n              url\n              title\n            }\n          }\n        }\n      }\n      globalGeneric: globalSet(handle: \"generic\") {\n        handle\n        ... on GlobalSet_Generic {\n          logo {\n            ...CMSAsset\n          }\n        }\n      }\n      globalHeader: globalSet(handle: \"header\") {\n        ... on GlobalSet_Header {\n          handle\n        }\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nfragment ModuleSample on Set_Replicator_ModuleSample {\n    type\n    left_image {\n      ...CMSAsset\n    }\n    headline\n    headline_h1\n    copy\n    buttons {\n      label\n      link\n      btn_type {\n        value\n      }\n    }\n    id\n}\n"): (typeof documents)["\nfragment ModuleSample on Set_Replicator_ModuleSample {\n    type\n    left_image {\n      ...CMSAsset\n    }\n    headline\n    headline_h1\n    copy\n    buttons {\n      label\n      link\n      btn_type {\n        value\n      }\n    }\n    id\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nfragment ModuleSpacer on Set_Replicator_ModuleSpacer {\n    type\n}\n"): (typeof documents)["\nfragment ModuleSpacer on Set_Replicator_ModuleSpacer {\n    type\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment CMSAsset on Asset_Assets {\n    id\n    placeholder\n    url\n    alt\n    permalink\n    extension\n    width\n    height\n    isImage: is_image\n    focusCss: focus_css\n  }\n"): (typeof documents)["\n  fragment CMSAsset on Asset_Assets {\n    id\n    placeholder\n    url\n    alt\n    permalink\n    extension\n    width\n    height\n    isImage: is_image\n    focusCss: focus_css\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment SEO on seoMeta {\n    computed {\n      indexing\n      canonical\n      hreflang {\n        url\n        locale\n      }\n      locale\n      og_image {\n        ...CMSAsset\n      }\n      og_title\n      site_name\n      site_schema\n      title\n      twitter_handle\n      twitter_image {\n        ...CMSAsset\n      }\n      twitter_title\n    }\n    raw {\n      title\n      description\n      generate_social_images\n      og_title\n      og_description\n      twitter_title\n      twitter_description\n      canonical_custom\n      noindex\n      nofollow\n      sitemap_enabled\n      json_ld\n    }\n  }\n"): (typeof documents)["\n  fragment SEO on seoMeta {\n    computed {\n      indexing\n      canonical\n      hreflang {\n        url\n        locale\n      }\n      locale\n      og_image {\n        ...CMSAsset\n      }\n      og_title\n      site_name\n      site_schema\n      title\n      twitter_handle\n      twitter_image {\n        ...CMSAsset\n      }\n      twitter_title\n    }\n    raw {\n      title\n      description\n      generate_social_images\n      og_title\n      og_description\n      twitter_title\n      twitter_description\n      canonical_custom\n      noindex\n      nofollow\n      sitemap_enabled\n      json_ld\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  \n  \n  \n  query page($uri: String) {\n    entry(uri: $uri) {\n      id\n      title\n      slug\n      uri\n      seo {\n        ...SEO\n      }\n      ... on Entry_Pages_Pages {\n        replicator {\n          __typename\n          \n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  \n  \n  \n  query page($uri: String) {\n    entry(uri: $uri) {\n      id\n      title\n      slug\n      uri\n      seo {\n        ...SEO\n      }\n      ... on Entry_Pages_Pages {\n        replicator {\n          __typename\n          \n        }\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;