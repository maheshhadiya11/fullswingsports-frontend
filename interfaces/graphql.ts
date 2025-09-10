/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Array: any;
  JsonArgument: any;
};

export type AssetContainer = {
  __typename?: 'AssetContainer';
  handle: Scalars['String'];
  title: Scalars['String'];
};

export type AssetInterface = {
  blueprint: Maybe<Scalars['String']>;
  container: AssetContainer;
  edit_url: Maybe<Scalars['String']>;
  extension: Scalars['String'];
  focus_css: Maybe<Scalars['String']>;
  folder: Maybe<Scalars['String']>;
  height: Maybe<Scalars['Float']>;
  id: Scalars['String'];
  is_audio: Maybe<Scalars['Boolean']>;
  is_image: Maybe<Scalars['Boolean']>;
  is_video: Maybe<Scalars['Boolean']>;
  last_modified: Maybe<Scalars['String']>;
  orientation: Maybe<Scalars['String']>;
  path: Scalars['String'];
  permalink: Maybe<Scalars['String']>;
  placeholder: Maybe<Scalars['String']>;
  ratio: Maybe<Scalars['Float']>;
  size: Maybe<Scalars['String']>;
  size_b: Maybe<Scalars['Int']>;
  size_bytes: Maybe<Scalars['Int']>;
  size_gb: Maybe<Scalars['Float']>;
  size_gigabytes: Maybe<Scalars['Float']>;
  size_kb: Maybe<Scalars['Float']>;
  size_kilobytes: Maybe<Scalars['Float']>;
  size_mb: Maybe<Scalars['Float']>;
  size_megabytes: Maybe<Scalars['Float']>;
  url: Maybe<Scalars['String']>;
  width: Maybe<Scalars['Float']>;
};

export type AssetInterfacePagination = {
  __typename?: 'AssetInterfacePagination';
  /** Current page of the cursor */
  current_page: Scalars['Int'];
  /** List of items on the current page */
  data: Maybe<Array<Maybe<AssetInterface>>>;
  /** Number of the first item returned */
  from: Maybe<Scalars['Int']>;
  /** Determines if cursor has more pages after the current page */
  has_more_pages: Scalars['Boolean'];
  /** The last page (number of pages) */
  last_page: Scalars['Int'];
  /** Number of items returned per page */
  per_page: Scalars['Int'];
  /** Number of the last item returned */
  to: Maybe<Scalars['Int']>;
  /** Number of total items selected by the query */
  total: Scalars['Int'];
};

export type Asset_Assets = AssetInterface & {
  __typename?: 'Asset_Assets';
  alt: Maybe<Scalars['String']>;
  blueprint: Maybe<Scalars['String']>;
  container: AssetContainer;
  edit_url: Maybe<Scalars['String']>;
  extension: Scalars['String'];
  focus_css: Maybe<Scalars['String']>;
  folder: Maybe<Scalars['String']>;
  height: Maybe<Scalars['Float']>;
  id: Scalars['String'];
  is_audio: Maybe<Scalars['Boolean']>;
  is_image: Maybe<Scalars['Boolean']>;
  is_video: Maybe<Scalars['Boolean']>;
  last_modified: Maybe<Scalars['String']>;
  orientation: Maybe<Scalars['String']>;
  path: Scalars['String'];
  permalink: Maybe<Scalars['String']>;
  placeholder: Maybe<Scalars['String']>;
  ratio: Maybe<Scalars['Float']>;
  size: Maybe<Scalars['String']>;
  size_b: Maybe<Scalars['Int']>;
  size_bytes: Maybe<Scalars['Int']>;
  size_gb: Maybe<Scalars['Float']>;
  size_gigabytes: Maybe<Scalars['Float']>;
  size_kb: Maybe<Scalars['Float']>;
  size_kilobytes: Maybe<Scalars['Float']>;
  size_mb: Maybe<Scalars['Float']>;
  size_megabytes: Maybe<Scalars['Float']>;
  url: Maybe<Scalars['String']>;
  width: Maybe<Scalars['Float']>;
};

export type BardText = {
  __typename?: 'BardText';
  text: Maybe<Scalars['String']>;
  type: Scalars['String'];
};

export type Code = {
  __typename?: 'Code';
  code: Scalars['String'];
  mode: Scalars['String'];
};

export type Collection = {
  __typename?: 'Collection';
  handle: Scalars['String'];
  structure: Maybe<CollectionStructure>;
  title: Scalars['String'];
};

export type CollectionStructure = {
  __typename?: 'CollectionStructure';
  expects_root: Scalars['Boolean'];
  handle: Scalars['String'];
  max_depth: Maybe<Scalars['Int']>;
  title: Scalars['String'];
  tree: Maybe<Array<Maybe<CollectionTreeBranch>>>;
};


export type CollectionStructureTreeArgs = {
  site: InputMaybe<Scalars['String']>;
};

export type CollectionTreeBranch = {
  __typename?: 'CollectionTreeBranch';
  children: Maybe<Array<Maybe<CollectionTreeBranch>>>;
  depth: Scalars['Int'];
  entry: Maybe<EntryInterface>;
  /** @deprecated Replaced by `entry` */
  page: Maybe<EntryInterface>;
};

export type DateRange = {
  __typename?: 'DateRange';
  end: Maybe<Scalars['String']>;
  start: Maybe<Scalars['String']>;
};


export type DateRangeEndArgs = {
  format: InputMaybe<Scalars['String']>;
};


export type DateRangeStartArgs = {
  format: InputMaybe<Scalars['String']>;
};

export type EntryInterface = {
  blueprint: Maybe<Scalars['String']>;
  collection: Collection;
  date: Maybe<Scalars['String']>;
  edit_url: Scalars['String'];
  id: Scalars['ID'];
  last_modified: Maybe<Scalars['String']>;
  locale: Scalars['String'];
  parent: Maybe<EntryInterface>;
  permalink: Maybe<Scalars['String']>;
  private: Scalars['Boolean'];
  published: Scalars['Boolean'];
  /** The Advanced SEO meta data */
  seo: Maybe<SeoMeta>;
  site: Site;
  slug: Scalars['String'];
  status: Scalars['String'];
  title: Scalars['String'];
  uri: Maybe<Scalars['String']>;
  url: Maybe<Scalars['String']>;
};


export type EntryInterfaceDateArgs = {
  format: InputMaybe<Scalars['String']>;
};


export type EntryInterfaceLast_ModifiedArgs = {
  format: InputMaybe<Scalars['String']>;
};

export type EntryInterfacePagination = {
  __typename?: 'EntryInterfacePagination';
  /** Current page of the cursor */
  current_page: Scalars['Int'];
  /** List of items on the current page */
  data: Maybe<Array<Maybe<EntryInterface>>>;
  /** Number of the first item returned */
  from: Maybe<Scalars['Int']>;
  /** Determines if cursor has more pages after the current page */
  has_more_pages: Scalars['Boolean'];
  /** The last page (number of pages) */
  last_page: Scalars['Int'];
  /** Number of items returned per page */
  per_page: Scalars['Int'];
  /** Number of the last item returned */
  to: Maybe<Scalars['Int']>;
  /** Number of total items selected by the query */
  total: Scalars['Int'];
};

export type Entry_Pages_Pages = EntryInterface & {
  __typename?: 'Entry_Pages_Pages';
  blueprint: Maybe<Scalars['String']>;
  collection: Collection;
  date: Maybe<Scalars['String']>;
  edit_url: Scalars['String'];
  id: Scalars['ID'];
  last_modified: Maybe<Scalars['String']>;
  locale: Scalars['String'];
  parent: Maybe<EntryInterface>;
  permalink: Maybe<Scalars['String']>;
  private: Scalars['Boolean'];
  published: Scalars['Boolean'];
  replicator: Maybe<Array<Maybe<Sets_Replicator>>>;
  /** The Advanced SEO meta data */
  seo: Maybe<SeoMeta>;
  seo_canonical_custom: Maybe<Scalars['String']>;
  seo_canonical_entry: Maybe<EntryInterface>;
  seo_canonical_type: Maybe<LabeledValue>;
  seo_description: Maybe<Scalars['String']>;
  seo_json_ld: Maybe<Scalars['String']>;
  seo_nofollow: Maybe<Scalars['Boolean']>;
  seo_noindex: Maybe<Scalars['Boolean']>;
  seo_og_description: Maybe<Scalars['String']>;
  seo_og_image: Maybe<AssetInterface>;
  seo_og_title: Maybe<Scalars['String']>;
  seo_section_canonical_url: Maybe<Scalars['String']>;
  seo_section_indexing: Maybe<Scalars['String']>;
  seo_section_json_ld: Maybe<Scalars['String']>;
  seo_section_og: Maybe<Scalars['String']>;
  seo_section_sitemap: Maybe<Scalars['String']>;
  seo_section_title_description: Maybe<Scalars['String']>;
  seo_section_twitter: Maybe<Scalars['String']>;
  seo_site_name_position: Maybe<LabeledValue>;
  seo_sitemap_change_frequency: Maybe<LabeledValue>;
  seo_sitemap_enabled: Maybe<Scalars['Boolean']>;
  seo_sitemap_priority: Maybe<LabeledValue>;
  seo_title: Maybe<Scalars['String']>;
  seo_twitter_card: Maybe<LabeledValue>;
  seo_twitter_description: Maybe<Scalars['String']>;
  seo_twitter_summary_image: Maybe<AssetInterface>;
  seo_twitter_summary_large_image: Maybe<AssetInterface>;
  seo_twitter_title: Maybe<Scalars['String']>;
  site: Site;
  slug: Scalars['String'];
  status: Scalars['String'];
  title: Scalars['String'];
  uri: Maybe<Scalars['String']>;
  url: Maybe<Scalars['String']>;
};


export type Entry_Pages_PagesDateArgs = {
  format: InputMaybe<Scalars['String']>;
};


export type Entry_Pages_PagesLast_ModifiedArgs = {
  format: InputMaybe<Scalars['String']>;
};

export type Field = {
  __typename?: 'Field';
  config: Maybe<Scalars['Array']>;
  display: Scalars['String'];
  handle: Scalars['String'];
  instructions: Maybe<Scalars['String']>;
  type: Scalars['String'];
  width: Maybe<Scalars['Int']>;
};

export type Form = {
  __typename?: 'Form';
  fields: Maybe<Array<Maybe<Field>>>;
  handle: Scalars['String'];
  honeypot: Maybe<Scalars['String']>;
  rules: Maybe<Scalars['Array']>;
  title: Scalars['String'];
};

export type GlobalSetInterface = {
  handle: Scalars['String'];
  site: Site;
  title: Scalars['String'];
};

export type GlobalSet_Generic = GlobalSetInterface & {
  __typename?: 'GlobalSet_Generic';
  handle: Scalars['String'];
  logo: AssetInterface;
  site: Site;
  title: Scalars['String'];
};

export type GlobalSet_Header = GlobalSetInterface & {
  __typename?: 'GlobalSet_Header';
  handle: Scalars['String'];
  site: Site;
  title: Scalars['String'];
};

export type GlobalSet_Redirects = GlobalSetInterface & {
  __typename?: 'GlobalSet_Redirects';
  handle: Scalars['String'];
  redirects: Maybe<Array<Maybe<GridItem_Redirects>>>;
  site: Site;
  title: Scalars['String'];
};

export type GridItem_Buttons = {
  __typename?: 'GridItem_Buttons';
  btn_type: Maybe<LabeledValue>;
  id: Maybe<Scalars['String']>;
  label: Scalars['String'];
  link: Maybe<Scalars['String']>;
};

export type GridItem_Redirects = {
  __typename?: 'GridItem_Redirects';
  id: Maybe<Scalars['String']>;
  permanent: Maybe<Scalars['Boolean']>;
  source: Scalars['String'];
  testination: Scalars['String'];
};

export type LabeledValue = {
  __typename?: 'LabeledValue';
  label: Maybe<Scalars['String']>;
  value: Maybe<Scalars['String']>;
};

export type NavBasicPage_Footer = NavPage_Footer & PageInterface & {
  __typename?: 'NavBasicPage_Footer';
  entry_id: Maybe<Scalars['ID']>;
  id: Scalars['ID'];
  permalink: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
  url: Maybe<Scalars['String']>;
};

export type NavBasicPage_Header = NavPage_Header & PageInterface & {
  __typename?: 'NavBasicPage_Header';
  entry_id: Maybe<Scalars['ID']>;
  id: Scalars['ID'];
  permalink: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
  url: Maybe<Scalars['String']>;
};

export type NavEntryPage_Footer_Pages_Pages = EntryInterface & NavPage_Footer & PageInterface & {
  __typename?: 'NavEntryPage_Footer_Pages_Pages';
  blueprint: Maybe<Scalars['String']>;
  collection: Collection;
  date: Maybe<Scalars['String']>;
  edit_url: Scalars['String'];
  entry_id: Maybe<Scalars['ID']>;
  id: Scalars['ID'];
  last_modified: Maybe<Scalars['String']>;
  locale: Scalars['String'];
  parent: Maybe<EntryInterface>;
  permalink: Maybe<Scalars['String']>;
  private: Scalars['Boolean'];
  published: Scalars['Boolean'];
  replicator: Maybe<Array<Maybe<Sets_Replicator>>>;
  /** The Advanced SEO meta data */
  seo: Maybe<SeoMeta>;
  seo_canonical_custom: Maybe<Scalars['String']>;
  seo_canonical_entry: Maybe<EntryInterface>;
  seo_canonical_type: Maybe<LabeledValue>;
  seo_description: Maybe<Scalars['String']>;
  seo_json_ld: Maybe<Scalars['String']>;
  seo_nofollow: Maybe<Scalars['Boolean']>;
  seo_noindex: Maybe<Scalars['Boolean']>;
  seo_og_description: Maybe<Scalars['String']>;
  seo_og_image: Maybe<AssetInterface>;
  seo_og_title: Maybe<Scalars['String']>;
  seo_section_canonical_url: Maybe<Scalars['String']>;
  seo_section_indexing: Maybe<Scalars['String']>;
  seo_section_json_ld: Maybe<Scalars['String']>;
  seo_section_og: Maybe<Scalars['String']>;
  seo_section_sitemap: Maybe<Scalars['String']>;
  seo_section_title_description: Maybe<Scalars['String']>;
  seo_section_twitter: Maybe<Scalars['String']>;
  seo_site_name_position: Maybe<LabeledValue>;
  seo_sitemap_change_frequency: Maybe<LabeledValue>;
  seo_sitemap_enabled: Maybe<Scalars['Boolean']>;
  seo_sitemap_priority: Maybe<LabeledValue>;
  seo_title: Maybe<Scalars['String']>;
  seo_twitter_card: Maybe<LabeledValue>;
  seo_twitter_description: Maybe<Scalars['String']>;
  seo_twitter_summary_image: Maybe<AssetInterface>;
  seo_twitter_summary_large_image: Maybe<AssetInterface>;
  seo_twitter_title: Maybe<Scalars['String']>;
  site: Site;
  slug: Scalars['String'];
  status: Scalars['String'];
  title: Scalars['String'];
  uri: Maybe<Scalars['String']>;
  url: Maybe<Scalars['String']>;
};


export type NavEntryPage_Footer_Pages_PagesDateArgs = {
  format: InputMaybe<Scalars['String']>;
};


export type NavEntryPage_Footer_Pages_PagesLast_ModifiedArgs = {
  format: InputMaybe<Scalars['String']>;
};

export type NavEntryPage_Header_Pages_Pages = EntryInterface & NavPage_Header & PageInterface & {
  __typename?: 'NavEntryPage_Header_Pages_Pages';
  blueprint: Maybe<Scalars['String']>;
  collection: Collection;
  date: Maybe<Scalars['String']>;
  edit_url: Scalars['String'];
  entry_id: Maybe<Scalars['ID']>;
  id: Scalars['ID'];
  last_modified: Maybe<Scalars['String']>;
  locale: Scalars['String'];
  parent: Maybe<EntryInterface>;
  permalink: Maybe<Scalars['String']>;
  private: Scalars['Boolean'];
  published: Scalars['Boolean'];
  replicator: Maybe<Array<Maybe<Sets_Replicator>>>;
  /** The Advanced SEO meta data */
  seo: Maybe<SeoMeta>;
  seo_canonical_custom: Maybe<Scalars['String']>;
  seo_canonical_entry: Maybe<EntryInterface>;
  seo_canonical_type: Maybe<LabeledValue>;
  seo_description: Maybe<Scalars['String']>;
  seo_json_ld: Maybe<Scalars['String']>;
  seo_nofollow: Maybe<Scalars['Boolean']>;
  seo_noindex: Maybe<Scalars['Boolean']>;
  seo_og_description: Maybe<Scalars['String']>;
  seo_og_image: Maybe<AssetInterface>;
  seo_og_title: Maybe<Scalars['String']>;
  seo_section_canonical_url: Maybe<Scalars['String']>;
  seo_section_indexing: Maybe<Scalars['String']>;
  seo_section_json_ld: Maybe<Scalars['String']>;
  seo_section_og: Maybe<Scalars['String']>;
  seo_section_sitemap: Maybe<Scalars['String']>;
  seo_section_title_description: Maybe<Scalars['String']>;
  seo_section_twitter: Maybe<Scalars['String']>;
  seo_site_name_position: Maybe<LabeledValue>;
  seo_sitemap_change_frequency: Maybe<LabeledValue>;
  seo_sitemap_enabled: Maybe<Scalars['Boolean']>;
  seo_sitemap_priority: Maybe<LabeledValue>;
  seo_title: Maybe<Scalars['String']>;
  seo_twitter_card: Maybe<LabeledValue>;
  seo_twitter_description: Maybe<Scalars['String']>;
  seo_twitter_summary_image: Maybe<AssetInterface>;
  seo_twitter_summary_large_image: Maybe<AssetInterface>;
  seo_twitter_title: Maybe<Scalars['String']>;
  site: Site;
  slug: Scalars['String'];
  status: Scalars['String'];
  title: Scalars['String'];
  uri: Maybe<Scalars['String']>;
  url: Maybe<Scalars['String']>;
};


export type NavEntryPage_Header_Pages_PagesDateArgs = {
  format: InputMaybe<Scalars['String']>;
};


export type NavEntryPage_Header_Pages_PagesLast_ModifiedArgs = {
  format: InputMaybe<Scalars['String']>;
};

export type NavPage_Footer = {
  title: Maybe<Scalars['String']>;
};

export type NavPage_Header = {
  title: Maybe<Scalars['String']>;
};

export type NavTreeBranch = {
  __typename?: 'NavTreeBranch';
  children: Maybe<Array<Maybe<NavTreeBranch>>>;
  depth: Scalars['Int'];
  page: Maybe<PageInterface>;
};

export type Navigation = {
  __typename?: 'Navigation';
  expects_root: Scalars['Boolean'];
  handle: Scalars['String'];
  max_depth: Maybe<Scalars['Int']>;
  title: Scalars['String'];
  tree: Maybe<Array<Maybe<NavTreeBranch>>>;
};


export type NavigationTreeArgs = {
  site: InputMaybe<Scalars['String']>;
};

export type PageInterface = {
  entry_id: Maybe<Scalars['ID']>;
  id: Scalars['ID'];
  permalink: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
  url: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  asset: Maybe<AssetInterface>;
  assetContainer: Maybe<AssetContainer>;
  assetContainers: Maybe<Array<Maybe<AssetContainer>>>;
  assets: Maybe<AssetInterfacePagination>;
  collection: Maybe<Collection>;
  collections: Maybe<Array<Maybe<Collection>>>;
  entries: Maybe<EntryInterfacePagination>;
  entry: Maybe<EntryInterface>;
  globalSet: Maybe<GlobalSetInterface>;
  globalSets: Maybe<Array<Maybe<GlobalSetInterface>>>;
  nav: Maybe<Navigation>;
  navs: Maybe<Array<Maybe<Navigation>>>;
  ping: Maybe<Scalars['String']>;
  /** The Advanced SEO site, collection, and taxonomy defaults */
  seoDefaults: Maybe<SeoDefaults>;
  /** The Advanced SEO meta data */
  seoMeta: Maybe<SeoMeta>;
  sites: Maybe<Array<Maybe<Site>>>;
  taxonomies: Maybe<Array<Maybe<Taxonomy>>>;
  taxonomy: Maybe<Taxonomy>;
  term: Maybe<TermInterface>;
  terms: Maybe<TermInterfacePagination>;
};


export type QueryAssetArgs = {
  container: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['String']>;
  path: InputMaybe<Scalars['String']>;
};


export type QueryAssetContainerArgs = {
  handle: Scalars['String'];
};


export type QueryAssetsArgs = {
  container: Scalars['String'];
  filter: InputMaybe<Scalars['JsonArgument']>;
  limit: InputMaybe<Scalars['Int']>;
  page: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCollectionArgs = {
  handle: InputMaybe<Scalars['String']>;
};


export type QueryEntriesArgs = {
  collection: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  filter: InputMaybe<Scalars['JsonArgument']>;
  limit: InputMaybe<Scalars['Int']>;
  page: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryEntryArgs = {
  collection: InputMaybe<Scalars['String']>;
  filter: InputMaybe<Scalars['JsonArgument']>;
  id: InputMaybe<Scalars['String']>;
  site: InputMaybe<Scalars['String']>;
  slug: InputMaybe<Scalars['String']>;
  uri: InputMaybe<Scalars['String']>;
};


export type QueryGlobalSetArgs = {
  handle: InputMaybe<Scalars['String']>;
  site: InputMaybe<Scalars['String']>;
};


export type QueryNavArgs = {
  handle: InputMaybe<Scalars['String']>;
};


export type QuerySeoMetaArgs = {
  id: InputMaybe<Scalars['String']>;
  site: InputMaybe<Scalars['String']>;
};


export type QueryTaxonomyArgs = {
  handle: InputMaybe<Scalars['String']>;
};


export type QueryTermArgs = {
  id: InputMaybe<Scalars['String']>;
};


export type QueryTermsArgs = {
  filter: InputMaybe<Scalars['JsonArgument']>;
  limit: InputMaybe<Scalars['Int']>;
  page: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  taxonomy: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Role = {
  __typename?: 'Role';
  handle: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
};

export type Set_Replicator_ModuleSample = {
  __typename?: 'Set_Replicator_ModuleSample';
  buttons: Maybe<Array<Maybe<GridItem_Buttons>>>;
  copy: Maybe<Scalars['String']>;
  headline: Maybe<Scalars['String']>;
  headline_h1: Maybe<Scalars['Boolean']>;
  id: Maybe<Scalars['String']>;
  left_image: Maybe<AssetInterface>;
  type: Scalars['String'];
};

export type Set_Replicator_ModuleSpacer = {
  __typename?: 'Set_Replicator_ModuleSpacer';
  id: Maybe<Scalars['String']>;
  sp_spacing: LabeledValue;
  type: Scalars['String'];
};

export type Sets_Copy = BardText;

export type Sets_Replicator = Set_Replicator_ModuleSample | Set_Replicator_ModuleSpacer;

export type Site = {
  __typename?: 'Site';
  handle: Scalars['String'];
  locale: Scalars['String'];
  name: Scalars['String'];
  short_locale: Scalars['String'];
  url: Scalars['String'];
};

export type TableRow = {
  __typename?: 'TableRow';
  cells: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Taxonomy = {
  __typename?: 'Taxonomy';
  handle: Scalars['String'];
  title: Scalars['String'];
};

export type TermInterface = {
  edit_url: Scalars['String'];
  id: Scalars['ID'];
  permalink: Maybe<Scalars['String']>;
  /** The Advanced SEO meta data */
  seo: Maybe<SeoMeta>;
  slug: Scalars['String'];
  taxonomy: Taxonomy;
  title: Scalars['String'];
  uri: Maybe<Scalars['String']>;
  url: Maybe<Scalars['String']>;
};

export type TermInterfacePagination = {
  __typename?: 'TermInterfacePagination';
  /** Current page of the cursor */
  current_page: Scalars['Int'];
  /** List of items on the current page */
  data: Maybe<Array<Maybe<TermInterface>>>;
  /** Number of the first item returned */
  from: Maybe<Scalars['Int']>;
  /** Determines if cursor has more pages after the current page */
  has_more_pages: Scalars['Boolean'];
  /** The last page (number of pages) */
  last_page: Scalars['Int'];
  /** Number of items returned per page */
  per_page: Scalars['Int'];
  /** Number of the last item returned */
  to: Maybe<Scalars['Int']>;
  /** Number of total items selected by the query */
  total: Scalars['Int'];
};

export type User = {
  __typename?: 'User';
  avatar: Maybe<AssetInterface>;
  edit_url: Maybe<Scalars['String']>;
  email: Maybe<Scalars['String']>;
  groups: Maybe<Array<Maybe<UserGroup>>>;
  id: Maybe<Scalars['String']>;
  initials: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  roles: Maybe<Array<Maybe<Role>>>;
};

export type UserGroup = {
  __typename?: 'UserGroup';
  handle: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
};

export type AnalyticsDefaults = {
  __typename?: 'analyticsDefaults';
  cloudflare_web_analytics: Maybe<Scalars['String']>;
  fathom_id: Maybe<Scalars['String']>;
  fathom_spa: Maybe<Scalars['Boolean']>;
  google_tag_manager: Maybe<Scalars['String']>;
  use_cloudflare_web_analytics: Maybe<Scalars['Boolean']>;
  use_fathom: Maybe<Scalars['Boolean']>;
  use_google_tag_manager: Maybe<Scalars['Boolean']>;
};

/** The Advanced SEO computed meta data */
export type ComputedMetaData = {
  __typename?: 'computedMetaData';
  breadcrumbs: Maybe<Scalars['String']>;
  canonical: Maybe<Scalars['String']>;
  hreflang: Maybe<Array<Maybe<Hreflang>>>;
  indexing: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
  og_image: Maybe<AssetInterface>;
  og_image_preset: Maybe<SocialImagePreset>;
  og_title: Maybe<Scalars['String']>;
  site_name: Maybe<Scalars['String']>;
  site_schema: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
  twitter_handle: Maybe<Scalars['String']>;
  twitter_image: Maybe<AssetInterface>;
  twitter_image_preset: Maybe<SocialImagePreset>;
  twitter_title: Maybe<Scalars['String']>;
};


/** The Advanced SEO computed meta data */
export type ComputedMetaDataBreadcrumbsArgs = {
  baseUrl: InputMaybe<Scalars['String']>;
};


/** The Advanced SEO computed meta data */
export type ComputedMetaDataCanonicalArgs = {
  baseUrl: InputMaybe<Scalars['String']>;
};


/** The Advanced SEO computed meta data */
export type ComputedMetaDataHreflangArgs = {
  baseUrl: InputMaybe<Scalars['String']>;
};


/** The Advanced SEO computed meta data */
export type ComputedMetaDataSite_SchemaArgs = {
  baseUrl: InputMaybe<Scalars['String']>;
};

/** The Advanced SEO collection and taxonomy defaults */
export type ContentDefaults = {
  __typename?: 'contentDefaults';
  canonical_custom: Maybe<Scalars['String']>;
  canonical_entry: Maybe<EntryInterface>;
  canonical_type: Maybe<LabeledValue>;
  description: Maybe<Scalars['String']>;
  generate_social_images: Maybe<Scalars['Boolean']>;
  json_ld: Maybe<Scalars['String']>;
  nofollow: Maybe<Scalars['Boolean']>;
  noindex: Maybe<Scalars['Boolean']>;
  og_description: Maybe<Scalars['String']>;
  og_image: Maybe<AssetInterface>;
  og_title: Maybe<Scalars['String']>;
  site_name_position: Maybe<LabeledValue>;
  sitemap_change_frequency: Maybe<LabeledValue>;
  sitemap_enabled: Maybe<Scalars['Boolean']>;
  sitemap_priority: Maybe<LabeledValue>;
  social_images_theme: Maybe<LabeledValue>;
  title: Maybe<Scalars['String']>;
  twitter_card: Maybe<LabeledValue>;
  twitter_description: Maybe<Scalars['String']>;
  twitter_summary_image: Maybe<AssetInterface>;
  twitter_summary_large_image: Maybe<AssetInterface>;
  twitter_title: Maybe<Scalars['String']>;
};

export type FaviconsDefaults = {
  __typename?: 'faviconsDefaults';
  favicon_svg: Maybe<AssetInterface>;
};

export type GeneralDefaults = {
  __typename?: 'generalDefaults';
  organization_logo: Maybe<AssetInterface>;
  organization_name: Maybe<Scalars['String']>;
  person_name: Maybe<Scalars['String']>;
  site_json_ld: Maybe<Scalars['String']>;
  site_json_ld_type: Maybe<LabeledValue>;
  site_name: Maybe<Scalars['String']>;
  title_separator: Maybe<LabeledValue>;
  use_breadcrumbs: Maybe<Scalars['Boolean']>;
};

export type Hreflang = {
  __typename?: 'hreflang';
  locale: Maybe<Scalars['String']>;
  url: Maybe<Scalars['String']>;
};

export type IndexingDefaults = {
  __typename?: 'indexingDefaults';
  bing_site_verification_code: Maybe<Scalars['String']>;
  excluded_collections: Maybe<Array<Maybe<Collection>>>;
  excluded_taxonomies: Maybe<Array<Maybe<Taxonomy>>>;
  google_site_verification_code: Maybe<Scalars['String']>;
  nofollow: Maybe<Scalars['Boolean']>;
  noindex: Maybe<Scalars['Boolean']>;
};

/** The Advanced SEO raw meta data */
export type RawMetaData = {
  __typename?: 'rawMetaData';
  canonical_custom: Maybe<Scalars['String']>;
  canonical_entry: Maybe<EntryInterface>;
  canonical_type: Maybe<LabeledValue>;
  description: Maybe<Scalars['String']>;
  generate_social_images: Maybe<Scalars['Boolean']>;
  generated_og_image: Maybe<AssetInterface>;
  generated_twitter_image: Maybe<AssetInterface>;
  json_ld: Maybe<Scalars['String']>;
  nofollow: Maybe<Scalars['Boolean']>;
  noindex: Maybe<Scalars['Boolean']>;
  og_description: Maybe<Scalars['String']>;
  og_image: Maybe<AssetInterface>;
  og_title: Maybe<Scalars['String']>;
  site_name_position: Maybe<LabeledValue>;
  sitemap_change_frequency: Maybe<LabeledValue>;
  sitemap_enabled: Maybe<Scalars['Boolean']>;
  sitemap_priority: Maybe<LabeledValue>;
  social_images_theme: Maybe<LabeledValue>;
  title: Maybe<Scalars['String']>;
  twitter_card: Maybe<LabeledValue>;
  twitter_description: Maybe<Scalars['String']>;
  twitter_summary_image: Maybe<AssetInterface>;
  twitter_summary_large_image: Maybe<AssetInterface>;
  twitter_title: Maybe<Scalars['String']>;
};

/** The rendered Advanced SEO `head` and `body` views. Only use this when your frontend is hosted on the same domain as Statamic, as the views contain a whole bunch of absolute URLs that won't make sense otherwise. */
export type RenderedViews = {
  __typename?: 'renderedViews';
  body: Maybe<Scalars['String']>;
  head: Maybe<Scalars['String']>;
};

/** The Advanced SEO site, collection, and taxonomy defaults */
export type SeoDefaults = {
  __typename?: 'seoDefaults';
  /** The Advanced SEO collection or taxonomy defaults */
  collection: Maybe<ContentDefaults>;
  /** The Advanced SEO site defaults */
  site: Maybe<SiteDefaults>;
  /** The Advanced SEO collection or taxonomy defaults */
  taxonomy: Maybe<ContentDefaults>;
};


/** The Advanced SEO site, collection, and taxonomy defaults */
export type SeoDefaultsCollectionArgs = {
  handle: InputMaybe<Scalars['String']>;
  site: InputMaybe<Scalars['String']>;
};


/** The Advanced SEO site, collection, and taxonomy defaults */
export type SeoDefaultsSiteArgs = {
  site: InputMaybe<Scalars['String']>;
};


/** The Advanced SEO site, collection, and taxonomy defaults */
export type SeoDefaultsTaxonomyArgs = {
  handle: InputMaybe<Scalars['String']>;
  site: InputMaybe<Scalars['String']>;
};

/** The Advanced SEO meta data of an entry or term */
export type SeoMeta = {
  __typename?: 'seoMeta';
  /** The Advanced SEO computed meta data */
  computed: Maybe<ComputedMetaData>;
  /** The Advanced SEO raw meta data */
  raw: Maybe<RawMetaData>;
  /** The rendered Advanced SEO `head` and `body` views. Only use this when your frontend is hosted on the same domain as Statamic, as the views contain a whole bunch of absolute URLs that won't make sense otherwise. */
  view: Maybe<RenderedViews>;
};

/** The Advanced SEO site defaults */
export type SiteDefaults = {
  __typename?: 'siteDefaults';
  analytics: Maybe<AnalyticsDefaults>;
  favicons: Maybe<FaviconsDefaults>;
  general: Maybe<GeneralDefaults>;
  indexing: Maybe<IndexingDefaults>;
  socialMedia: Maybe<SocialMediaDefaults>;
};

export type SocialImagePreset = {
  __typename?: 'socialImagePreset';
  height: Maybe<Scalars['String']>;
  width: Maybe<Scalars['String']>;
};

export type SocialMediaDefaults = {
  __typename?: 'socialMediaDefaults';
  og_image: Maybe<AssetInterface>;
  social_images_generator_collections: Maybe<Array<Maybe<Collection>>>;
  twitter_handle: Maybe<Scalars['String']>;
  twitter_summary_image: Maybe<AssetInterface>;
  twitter_summary_large_image: Maybe<AssetInterface>;
};

export type GlobalFooterQueryVariables = Exact<{ [key: string]: never; }>;


export type GlobalFooterQuery = { __typename?: 'Query', footerNav: { __typename?: 'Navigation', tree: Array<{ __typename?: 'NavTreeBranch', depth: number, page: { __typename?: 'NavBasicPage_Footer', id: string, url: string | null, title: string | null } | { __typename?: 'NavBasicPage_Header', id: string, url: string | null, title: string | null } | { __typename?: 'NavEntryPage_Footer_Pages_Pages', id: string, url: string | null, title: string } | { __typename?: 'NavEntryPage_Header_Pages_Pages', id: string, url: string | null, title: string } | null, children: Array<{ __typename?: 'NavTreeBranch', depth: number, page: { __typename?: 'NavBasicPage_Footer', id: string, url: string | null, title: string | null } | { __typename?: 'NavBasicPage_Header', id: string, url: string | null, title: string | null } | { __typename?: 'NavEntryPage_Footer_Pages_Pages', id: string, url: string | null, title: string } | { __typename?: 'NavEntryPage_Header_Pages_Pages', id: string, url: string | null, title: string } | null } | null> | null } | null> | null } | null };

export type GlobalHeaderQueryVariables = Exact<{ [key: string]: never; }>;


export type GlobalHeaderQuery = { __typename?: 'Query', headerNav: { __typename?: 'Navigation', tree: Array<{ __typename?: 'NavTreeBranch', depth: number, page: { __typename?: 'NavBasicPage_Footer', id: string, url: string | null, title: string | null } | { __typename?: 'NavBasicPage_Header', id: string, url: string | null, title: string | null } | { __typename?: 'NavEntryPage_Footer_Pages_Pages', id: string, url: string | null, title: string } | { __typename?: 'NavEntryPage_Header_Pages_Pages', id: string, url: string | null, title: string } | null, children: Array<{ __typename?: 'NavTreeBranch', depth: number, page: { __typename?: 'NavBasicPage_Footer', id: string, url: string | null, title: string | null } | { __typename?: 'NavBasicPage_Header', id: string, url: string | null, title: string | null } | { __typename?: 'NavEntryPage_Footer_Pages_Pages', id: string, url: string | null, title: string } | { __typename?: 'NavEntryPage_Header_Pages_Pages', id: string, url: string | null, title: string } | null } | null> | null } | null> | null } | null, globalGeneric: { __typename?: 'GlobalSet_Generic', handle: string, logo: { __typename?: 'Asset_Assets', id: string, placeholder: string | null, url: string | null, alt: string | null, permalink: string | null, extension: string, width: number | null, height: number | null, isImage: boolean | null, focusCss: string | null } } | { __typename?: 'GlobalSet_Header', handle: string } | { __typename?: 'GlobalSet_Redirects', handle: string } | null, globalHeader: { __typename?: 'GlobalSet_Generic' } | { __typename?: 'GlobalSet_Header', handle: string } | { __typename?: 'GlobalSet_Redirects' } | null };

export type ModuleSampleFragment = { __typename?: 'Set_Replicator_ModuleSample', type: string, headline: string | null, headline_h1: boolean | null, copy: string | null, id: string | null, left_image: { __typename?: 'Asset_Assets', id: string, placeholder: string | null, url: string | null, alt: string | null, permalink: string | null, extension: string, width: number | null, height: number | null, isImage: boolean | null, focusCss: string | null } | null, buttons: Array<{ __typename?: 'GridItem_Buttons', label: string, link: string | null, btn_type: { __typename?: 'LabeledValue', value: string | null } | null } | null> | null };

export type ModuleSpacerFragment = { __typename?: 'Set_Replicator_ModuleSpacer', type: string };

export type CmsAssetFragment = { __typename?: 'Asset_Assets', id: string, placeholder: string | null, url: string | null, alt: string | null, permalink: string | null, extension: string, width: number | null, height: number | null, isImage: boolean | null, focusCss: string | null };

export type SeoFragment = { __typename?: 'seoMeta', computed: { __typename?: 'computedMetaData', indexing: string | null, canonical: string | null, locale: string | null, og_title: string | null, site_name: string | null, site_schema: string | null, title: string | null, twitter_handle: string | null, twitter_title: string | null, hreflang: Array<{ __typename?: 'hreflang', url: string | null, locale: string | null } | null> | null, og_image: { __typename?: 'Asset_Assets', id: string, placeholder: string | null, url: string | null, alt: string | null, permalink: string | null, extension: string, width: number | null, height: number | null, isImage: boolean | null, focusCss: string | null } | null, twitter_image: { __typename?: 'Asset_Assets', id: string, placeholder: string | null, url: string | null, alt: string | null, permalink: string | null, extension: string, width: number | null, height: number | null, isImage: boolean | null, focusCss: string | null } | null } | null, raw: { __typename?: 'rawMetaData', title: string | null, description: string | null, generate_social_images: boolean | null, og_title: string | null, og_description: string | null, twitter_title: string | null, twitter_description: string | null, canonical_custom: string | null, noindex: boolean | null, nofollow: boolean | null, sitemap_enabled: boolean | null, json_ld: string | null } | null };

export type PageQueryVariables = Exact<{
  uri: InputMaybe<Scalars['String']>;
}>;


export type PageQuery = { __typename?: 'Query', entry: { __typename?: 'Entry_Pages_Pages', id: string, title: string, slug: string, uri: string | null, replicator: Array<{ __typename: 'Set_Replicator_ModuleSample' } | { __typename: 'Set_Replicator_ModuleSpacer' } | null> | null, seo: { __typename?: 'seoMeta', computed: { __typename?: 'computedMetaData', indexing: string | null, canonical: string | null, locale: string | null, og_title: string | null, site_name: string | null, site_schema: string | null, title: string | null, twitter_handle: string | null, twitter_title: string | null, hreflang: Array<{ __typename?: 'hreflang', url: string | null, locale: string | null } | null> | null, og_image: { __typename?: 'Asset_Assets', id: string, placeholder: string | null, url: string | null, alt: string | null, permalink: string | null, extension: string, width: number | null, height: number | null, isImage: boolean | null, focusCss: string | null } | null, twitter_image: { __typename?: 'Asset_Assets', id: string, placeholder: string | null, url: string | null, alt: string | null, permalink: string | null, extension: string, width: number | null, height: number | null, isImage: boolean | null, focusCss: string | null } | null } | null, raw: { __typename?: 'rawMetaData', title: string | null, description: string | null, generate_social_images: boolean | null, og_title: string | null, og_description: string | null, twitter_title: string | null, twitter_description: string | null, canonical_custom: string | null, noindex: boolean | null, nofollow: boolean | null, sitemap_enabled: boolean | null, json_ld: string | null } | null } | null } | { __typename?: 'NavEntryPage_Footer_Pages_Pages', id: string, title: string, slug: string, uri: string | null, seo: { __typename?: 'seoMeta', computed: { __typename?: 'computedMetaData', indexing: string | null, canonical: string | null, locale: string | null, og_title: string | null, site_name: string | null, site_schema: string | null, title: string | null, twitter_handle: string | null, twitter_title: string | null, hreflang: Array<{ __typename?: 'hreflang', url: string | null, locale: string | null } | null> | null, og_image: { __typename?: 'Asset_Assets', id: string, placeholder: string | null, url: string | null, alt: string | null, permalink: string | null, extension: string, width: number | null, height: number | null, isImage: boolean | null, focusCss: string | null } | null, twitter_image: { __typename?: 'Asset_Assets', id: string, placeholder: string | null, url: string | null, alt: string | null, permalink: string | null, extension: string, width: number | null, height: number | null, isImage: boolean | null, focusCss: string | null } | null } | null, raw: { __typename?: 'rawMetaData', title: string | null, description: string | null, generate_social_images: boolean | null, og_title: string | null, og_description: string | null, twitter_title: string | null, twitter_description: string | null, canonical_custom: string | null, noindex: boolean | null, nofollow: boolean | null, sitemap_enabled: boolean | null, json_ld: string | null } | null } | null } | { __typename?: 'NavEntryPage_Header_Pages_Pages', id: string, title: string, slug: string, uri: string | null, seo: { __typename?: 'seoMeta', computed: { __typename?: 'computedMetaData', indexing: string | null, canonical: string | null, locale: string | null, og_title: string | null, site_name: string | null, site_schema: string | null, title: string | null, twitter_handle: string | null, twitter_title: string | null, hreflang: Array<{ __typename?: 'hreflang', url: string | null, locale: string | null } | null> | null, og_image: { __typename?: 'Asset_Assets', id: string, placeholder: string | null, url: string | null, alt: string | null, permalink: string | null, extension: string, width: number | null, height: number | null, isImage: boolean | null, focusCss: string | null } | null, twitter_image: { __typename?: 'Asset_Assets', id: string, placeholder: string | null, url: string | null, alt: string | null, permalink: string | null, extension: string, width: number | null, height: number | null, isImage: boolean | null, focusCss: string | null } | null } | null, raw: { __typename?: 'rawMetaData', title: string | null, description: string | null, generate_social_images: boolean | null, og_title: string | null, og_description: string | null, twitter_title: string | null, twitter_description: string | null, canonical_custom: string | null, noindex: boolean | null, nofollow: boolean | null, sitemap_enabled: boolean | null, json_ld: string | null } | null } | null } | null };

export const CmsAssetFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CMSAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset_Assets"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"placeholder"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"permalink"}},{"kind":"Field","name":{"kind":"Name","value":"extension"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","alias":{"kind":"Name","value":"isImage"},"name":{"kind":"Name","value":"is_image"}},{"kind":"Field","alias":{"kind":"Name","value":"focusCss"},"name":{"kind":"Name","value":"focus_css"}}]}}]} as unknown as DocumentNode<CmsAssetFragment, unknown>;
export const ModuleSampleFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ModuleSample"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Set_Replicator_ModuleSample"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"left_image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CMSAsset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"headline"}},{"kind":"Field","name":{"kind":"Name","value":"headline_h1"}},{"kind":"Field","name":{"kind":"Name","value":"copy"}},{"kind":"Field","name":{"kind":"Name","value":"buttons"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"btn_type"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CMSAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset_Assets"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"placeholder"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"permalink"}},{"kind":"Field","name":{"kind":"Name","value":"extension"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","alias":{"kind":"Name","value":"isImage"},"name":{"kind":"Name","value":"is_image"}},{"kind":"Field","alias":{"kind":"Name","value":"focusCss"},"name":{"kind":"Name","value":"focus_css"}}]}}]} as unknown as DocumentNode<ModuleSampleFragment, unknown>;
export const ModuleSpacerFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ModuleSpacer"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Set_Replicator_ModuleSpacer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]} as unknown as DocumentNode<ModuleSpacerFragment, unknown>;
export const SeoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SEO"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"seoMeta"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"computed"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"indexing"}},{"kind":"Field","name":{"kind":"Name","value":"canonical"}},{"kind":"Field","name":{"kind":"Name","value":"hreflang"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}}]}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"og_image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CMSAsset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"og_title"}},{"kind":"Field","name":{"kind":"Name","value":"site_name"}},{"kind":"Field","name":{"kind":"Name","value":"site_schema"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"twitter_handle"}},{"kind":"Field","name":{"kind":"Name","value":"twitter_image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CMSAsset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"twitter_title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"raw"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"generate_social_images"}},{"kind":"Field","name":{"kind":"Name","value":"og_title"}},{"kind":"Field","name":{"kind":"Name","value":"og_description"}},{"kind":"Field","name":{"kind":"Name","value":"twitter_title"}},{"kind":"Field","name":{"kind":"Name","value":"twitter_description"}},{"kind":"Field","name":{"kind":"Name","value":"canonical_custom"}},{"kind":"Field","name":{"kind":"Name","value":"noindex"}},{"kind":"Field","name":{"kind":"Name","value":"nofollow"}},{"kind":"Field","name":{"kind":"Name","value":"sitemap_enabled"}},{"kind":"Field","name":{"kind":"Name","value":"json_ld"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CMSAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset_Assets"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"placeholder"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"permalink"}},{"kind":"Field","name":{"kind":"Name","value":"extension"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","alias":{"kind":"Name","value":"isImage"},"name":{"kind":"Name","value":"is_image"}},{"kind":"Field","alias":{"kind":"Name","value":"focusCss"},"name":{"kind":"Name","value":"focus_css"}}]}}]} as unknown as DocumentNode<SeoFragment, unknown>;
export const GlobalFooterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GlobalFooter"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"footerNav"},"name":{"kind":"Name","value":"nav"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"handle"},"value":{"kind":"StringValue","value":"footer","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tree"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"depth"}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"depth"}},{"kind":"Field","name":{"kind":"Name","value":"page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GlobalFooterQuery, GlobalFooterQueryVariables>;
export const GlobalHeaderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GlobalHeader"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"headerNav"},"name":{"kind":"Name","value":"nav"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"handle"},"value":{"kind":"StringValue","value":"header","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tree"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"depth"}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"depth"}},{"kind":"Field","name":{"kind":"Name","value":"page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"globalGeneric"},"name":{"kind":"Name","value":"globalSet"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"handle"},"value":{"kind":"StringValue","value":"generic","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"handle"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GlobalSet_Generic"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CMSAsset"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"globalHeader"},"name":{"kind":"Name","value":"globalSet"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"handle"},"value":{"kind":"StringValue","value":"header","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GlobalSet_Header"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"handle"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CMSAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset_Assets"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"placeholder"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"permalink"}},{"kind":"Field","name":{"kind":"Name","value":"extension"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","alias":{"kind":"Name","value":"isImage"},"name":{"kind":"Name","value":"is_image"}},{"kind":"Field","alias":{"kind":"Name","value":"focusCss"},"name":{"kind":"Name","value":"focus_css"}}]}}]} as unknown as DocumentNode<GlobalHeaderQuery, GlobalHeaderQueryVariables>;
export const PageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"page"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uri"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"entry"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"uri"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uri"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"seo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SEO"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Entry_Pages_Pages"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"replicator"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CMSAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset_Assets"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"placeholder"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"permalink"}},{"kind":"Field","name":{"kind":"Name","value":"extension"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","alias":{"kind":"Name","value":"isImage"},"name":{"kind":"Name","value":"is_image"}},{"kind":"Field","alias":{"kind":"Name","value":"focusCss"},"name":{"kind":"Name","value":"focus_css"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SEO"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"seoMeta"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"computed"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"indexing"}},{"kind":"Field","name":{"kind":"Name","value":"canonical"}},{"kind":"Field","name":{"kind":"Name","value":"hreflang"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}}]}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"og_image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CMSAsset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"og_title"}},{"kind":"Field","name":{"kind":"Name","value":"site_name"}},{"kind":"Field","name":{"kind":"Name","value":"site_schema"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"twitter_handle"}},{"kind":"Field","name":{"kind":"Name","value":"twitter_image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CMSAsset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"twitter_title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"raw"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"generate_social_images"}},{"kind":"Field","name":{"kind":"Name","value":"og_title"}},{"kind":"Field","name":{"kind":"Name","value":"og_description"}},{"kind":"Field","name":{"kind":"Name","value":"twitter_title"}},{"kind":"Field","name":{"kind":"Name","value":"twitter_description"}},{"kind":"Field","name":{"kind":"Name","value":"canonical_custom"}},{"kind":"Field","name":{"kind":"Name","value":"noindex"}},{"kind":"Field","name":{"kind":"Name","value":"nofollow"}},{"kind":"Field","name":{"kind":"Name","value":"sitemap_enabled"}},{"kind":"Field","name":{"kind":"Name","value":"json_ld"}}]}}]}}]} as unknown as DocumentNode<PageQuery, PageQueryVariables>;
