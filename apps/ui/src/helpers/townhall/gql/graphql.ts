/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Text: { input: any; output: any; }
};

export type Alias = {
  _indexer: Scalars['String']['output'];
  address: Scalars['String']['output'];
  alias: Scalars['String']['output'];
  created: Scalars['Int']['output'];
  id: Scalars['String']['output'];
};

export type Alias_Filter = {
  _indexer?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _indexer_not?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  address?: InputMaybe<Scalars['String']['input']>;
  address_contains?: InputMaybe<Scalars['String']['input']>;
  address_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  address_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  address_not?: InputMaybe<Scalars['String']['input']>;
  address_not_contains?: InputMaybe<Scalars['String']['input']>;
  address_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  address_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  alias?: InputMaybe<Scalars['String']['input']>;
  alias_contains?: InputMaybe<Scalars['String']['input']>;
  alias_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  alias_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  alias_not?: InputMaybe<Scalars['String']['input']>;
  alias_not_contains?: InputMaybe<Scalars['String']['input']>;
  alias_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  alias_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  created?: InputMaybe<Scalars['Int']['input']>;
  created_gt?: InputMaybe<Scalars['Int']['input']>;
  created_gte?: InputMaybe<Scalars['Int']['input']>;
  created_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  created_lt?: InputMaybe<Scalars['Int']['input']>;
  created_lte?: InputMaybe<Scalars['Int']['input']>;
  created_not?: InputMaybe<Scalars['Int']['input']>;
  created_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Alias_OrderBy =
  | '_indexer'
  | 'address'
  | 'alias'
  | 'created'
  | 'id';

export type Category = {
  _indexer: Scalars['String']['output'];
  category_id: Scalars['Int']['output'];
  created: Scalars['Int']['output'];
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  parent_category: Maybe<Category>;
  parent_category_id: Scalars['Int']['output'];
  slug: Scalars['String']['output'];
  space: Space;
  topic_count: Scalars['Int']['output'];
};

export type Category_Category_Filter = {
  _indexer?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _indexer_not?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  category_id?: InputMaybe<Scalars['Int']['input']>;
  category_id_gt?: InputMaybe<Scalars['Int']['input']>;
  category_id_gte?: InputMaybe<Scalars['Int']['input']>;
  category_id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  category_id_lt?: InputMaybe<Scalars['Int']['input']>;
  category_id_lte?: InputMaybe<Scalars['Int']['input']>;
  category_id_not?: InputMaybe<Scalars['Int']['input']>;
  category_id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  created?: InputMaybe<Scalars['Int']['input']>;
  created_gt?: InputMaybe<Scalars['Int']['input']>;
  created_gte?: InputMaybe<Scalars['Int']['input']>;
  created_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  created_lt?: InputMaybe<Scalars['Int']['input']>;
  created_lte?: InputMaybe<Scalars['Int']['input']>;
  created_not?: InputMaybe<Scalars['Int']['input']>;
  created_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  parent_category?: InputMaybe<Scalars['String']['input']>;
  parent_category_contains?: InputMaybe<Scalars['String']['input']>;
  parent_category_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  parent_category_id?: InputMaybe<Scalars['Int']['input']>;
  parent_category_id_gt?: InputMaybe<Scalars['Int']['input']>;
  parent_category_id_gte?: InputMaybe<Scalars['Int']['input']>;
  parent_category_id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  parent_category_id_lt?: InputMaybe<Scalars['Int']['input']>;
  parent_category_id_lte?: InputMaybe<Scalars['Int']['input']>;
  parent_category_id_not?: InputMaybe<Scalars['Int']['input']>;
  parent_category_id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  parent_category_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  parent_category_not?: InputMaybe<Scalars['String']['input']>;
  parent_category_not_contains?: InputMaybe<Scalars['String']['input']>;
  parent_category_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  parent_category_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  space?: InputMaybe<Scalars['String']['input']>;
  space_contains?: InputMaybe<Scalars['String']['input']>;
  space_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  space_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  space_not?: InputMaybe<Scalars['String']['input']>;
  space_not_contains?: InputMaybe<Scalars['String']['input']>;
  space_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  space_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  topic_count?: InputMaybe<Scalars['Int']['input']>;
  topic_count_gt?: InputMaybe<Scalars['Int']['input']>;
  topic_count_gte?: InputMaybe<Scalars['Int']['input']>;
  topic_count_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  topic_count_lt?: InputMaybe<Scalars['Int']['input']>;
  topic_count_lte?: InputMaybe<Scalars['Int']['input']>;
  topic_count_not?: InputMaybe<Scalars['Int']['input']>;
  topic_count_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type Category_Space_Filter = {
  _indexer?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _indexer_not?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  created?: InputMaybe<Scalars['Int']['input']>;
  created_gt?: InputMaybe<Scalars['Int']['input']>;
  created_gte?: InputMaybe<Scalars['Int']['input']>;
  created_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  created_lt?: InputMaybe<Scalars['Int']['input']>;
  created_lte?: InputMaybe<Scalars['Int']['input']>;
  created_not?: InputMaybe<Scalars['Int']['input']>;
  created_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  owner?: InputMaybe<Scalars['String']['input']>;
  owner_contains?: InputMaybe<Scalars['String']['input']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  owner_not?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  space_id?: InputMaybe<Scalars['Int']['input']>;
  space_id_gt?: InputMaybe<Scalars['Int']['input']>;
  space_id_gte?: InputMaybe<Scalars['Int']['input']>;
  space_id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  space_id_lt?: InputMaybe<Scalars['Int']['input']>;
  space_id_lte?: InputMaybe<Scalars['Int']['input']>;
  space_id_not?: InputMaybe<Scalars['Int']['input']>;
  space_id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  topic_count?: InputMaybe<Scalars['Int']['input']>;
  topic_count_gt?: InputMaybe<Scalars['Int']['input']>;
  topic_count_gte?: InputMaybe<Scalars['Int']['input']>;
  topic_count_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  topic_count_lt?: InputMaybe<Scalars['Int']['input']>;
  topic_count_lte?: InputMaybe<Scalars['Int']['input']>;
  topic_count_not?: InputMaybe<Scalars['Int']['input']>;
  topic_count_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  vote_count?: InputMaybe<Scalars['Int']['input']>;
  vote_count_gt?: InputMaybe<Scalars['Int']['input']>;
  vote_count_gte?: InputMaybe<Scalars['Int']['input']>;
  vote_count_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  vote_count_lt?: InputMaybe<Scalars['Int']['input']>;
  vote_count_lte?: InputMaybe<Scalars['Int']['input']>;
  vote_count_not?: InputMaybe<Scalars['Int']['input']>;
  vote_count_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type Category_Filter = {
  _indexer?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _indexer_not?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  category_id?: InputMaybe<Scalars['Int']['input']>;
  category_id_gt?: InputMaybe<Scalars['Int']['input']>;
  category_id_gte?: InputMaybe<Scalars['Int']['input']>;
  category_id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  category_id_lt?: InputMaybe<Scalars['Int']['input']>;
  category_id_lte?: InputMaybe<Scalars['Int']['input']>;
  category_id_not?: InputMaybe<Scalars['Int']['input']>;
  category_id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  created?: InputMaybe<Scalars['Int']['input']>;
  created_gt?: InputMaybe<Scalars['Int']['input']>;
  created_gte?: InputMaybe<Scalars['Int']['input']>;
  created_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  created_lt?: InputMaybe<Scalars['Int']['input']>;
  created_lte?: InputMaybe<Scalars['Int']['input']>;
  created_not?: InputMaybe<Scalars['Int']['input']>;
  created_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  parent_category?: InputMaybe<Scalars['String']['input']>;
  parent_category_?: InputMaybe<Category_Category_Filter>;
  parent_category_contains?: InputMaybe<Scalars['String']['input']>;
  parent_category_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  parent_category_id?: InputMaybe<Scalars['Int']['input']>;
  parent_category_id_gt?: InputMaybe<Scalars['Int']['input']>;
  parent_category_id_gte?: InputMaybe<Scalars['Int']['input']>;
  parent_category_id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  parent_category_id_lt?: InputMaybe<Scalars['Int']['input']>;
  parent_category_id_lte?: InputMaybe<Scalars['Int']['input']>;
  parent_category_id_not?: InputMaybe<Scalars['Int']['input']>;
  parent_category_id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  parent_category_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  parent_category_not?: InputMaybe<Scalars['String']['input']>;
  parent_category_not_contains?: InputMaybe<Scalars['String']['input']>;
  parent_category_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  parent_category_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  space?: InputMaybe<Scalars['String']['input']>;
  space_?: InputMaybe<Category_Space_Filter>;
  space_contains?: InputMaybe<Scalars['String']['input']>;
  space_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  space_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  space_not?: InputMaybe<Scalars['String']['input']>;
  space_not_contains?: InputMaybe<Scalars['String']['input']>;
  space_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  space_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  topic_count?: InputMaybe<Scalars['Int']['input']>;
  topic_count_gt?: InputMaybe<Scalars['Int']['input']>;
  topic_count_gte?: InputMaybe<Scalars['Int']['input']>;
  topic_count_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  topic_count_lt?: InputMaybe<Scalars['Int']['input']>;
  topic_count_lte?: InputMaybe<Scalars['Int']['input']>;
  topic_count_not?: InputMaybe<Scalars['Int']['input']>;
  topic_count_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type Category_OrderBy =
  | '_indexer'
  | 'category_id'
  | 'created'
  | 'description'
  | 'id'
  | 'name'
  | 'parent_category'
  | 'parent_category_id'
  | 'slug'
  | 'space'
  | 'topic_count';

export type OrderDirection =
  | 'asc'
  | 'desc';

export type Post = {
  _indexer: Scalars['String']['output'];
  author: Scalars['String']['output'];
  body: Scalars['Text']['output'];
  created: Scalars['Int']['output'];
  hidden: Scalars['Boolean']['output'];
  id: Scalars['String']['output'];
  pinned: Scalars['Boolean']['output'];
  post_id: Scalars['Int']['output'];
  scores_1: Scalars['Int']['output'];
  scores_2: Scalars['Int']['output'];
  scores_3: Scalars['Int']['output'];
  space: Space;
  topic: Topic;
  topic_id: Scalars['Int']['output'];
  vote_count: Scalars['Int']['output'];
  votes: Array<Vote>;
};

export type Post_Space_Filter = {
  _indexer?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _indexer_not?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  created?: InputMaybe<Scalars['Int']['input']>;
  created_gt?: InputMaybe<Scalars['Int']['input']>;
  created_gte?: InputMaybe<Scalars['Int']['input']>;
  created_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  created_lt?: InputMaybe<Scalars['Int']['input']>;
  created_lte?: InputMaybe<Scalars['Int']['input']>;
  created_not?: InputMaybe<Scalars['Int']['input']>;
  created_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  owner?: InputMaybe<Scalars['String']['input']>;
  owner_contains?: InputMaybe<Scalars['String']['input']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  owner_not?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  space_id?: InputMaybe<Scalars['Int']['input']>;
  space_id_gt?: InputMaybe<Scalars['Int']['input']>;
  space_id_gte?: InputMaybe<Scalars['Int']['input']>;
  space_id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  space_id_lt?: InputMaybe<Scalars['Int']['input']>;
  space_id_lte?: InputMaybe<Scalars['Int']['input']>;
  space_id_not?: InputMaybe<Scalars['Int']['input']>;
  space_id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  topic_count?: InputMaybe<Scalars['Int']['input']>;
  topic_count_gt?: InputMaybe<Scalars['Int']['input']>;
  topic_count_gte?: InputMaybe<Scalars['Int']['input']>;
  topic_count_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  topic_count_lt?: InputMaybe<Scalars['Int']['input']>;
  topic_count_lte?: InputMaybe<Scalars['Int']['input']>;
  topic_count_not?: InputMaybe<Scalars['Int']['input']>;
  topic_count_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  vote_count?: InputMaybe<Scalars['Int']['input']>;
  vote_count_gt?: InputMaybe<Scalars['Int']['input']>;
  vote_count_gte?: InputMaybe<Scalars['Int']['input']>;
  vote_count_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  vote_count_lt?: InputMaybe<Scalars['Int']['input']>;
  vote_count_lte?: InputMaybe<Scalars['Int']['input']>;
  vote_count_not?: InputMaybe<Scalars['Int']['input']>;
  vote_count_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type Post_Topic_Filter = {
  _indexer?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _indexer_not?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  author?: InputMaybe<Scalars['String']['input']>;
  author_contains?: InputMaybe<Scalars['String']['input']>;
  author_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  author_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  author_not?: InputMaybe<Scalars['String']['input']>;
  author_not_contains?: InputMaybe<Scalars['String']['input']>;
  author_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  author_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  body_contains?: InputMaybe<Scalars['String']['input']>;
  body_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  body_not_contains?: InputMaybe<Scalars['String']['input']>;
  body_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  category_contains?: InputMaybe<Scalars['String']['input']>;
  category_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  category_id?: InputMaybe<Scalars['Int']['input']>;
  category_id_gt?: InputMaybe<Scalars['Int']['input']>;
  category_id_gte?: InputMaybe<Scalars['Int']['input']>;
  category_id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  category_id_lt?: InputMaybe<Scalars['Int']['input']>;
  category_id_lte?: InputMaybe<Scalars['Int']['input']>;
  category_id_not?: InputMaybe<Scalars['Int']['input']>;
  category_id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  category_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  category_not?: InputMaybe<Scalars['String']['input']>;
  category_not_contains?: InputMaybe<Scalars['String']['input']>;
  category_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  category_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  closed?: InputMaybe<Scalars['Boolean']['input']>;
  closed_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  closed_not?: InputMaybe<Scalars['Boolean']['input']>;
  closed_not_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  created?: InputMaybe<Scalars['Int']['input']>;
  created_gt?: InputMaybe<Scalars['Int']['input']>;
  created_gte?: InputMaybe<Scalars['Int']['input']>;
  created_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  created_lt?: InputMaybe<Scalars['Int']['input']>;
  created_lte?: InputMaybe<Scalars['Int']['input']>;
  created_not?: InputMaybe<Scalars['Int']['input']>;
  created_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  discussion_url?: InputMaybe<Scalars['String']['input']>;
  discussion_url_contains?: InputMaybe<Scalars['String']['input']>;
  discussion_url_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  discussion_url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  discussion_url_not?: InputMaybe<Scalars['String']['input']>;
  discussion_url_not_contains?: InputMaybe<Scalars['String']['input']>;
  discussion_url_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  discussion_url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  post_count?: InputMaybe<Scalars['Int']['input']>;
  post_count_gt?: InputMaybe<Scalars['Int']['input']>;
  post_count_gte?: InputMaybe<Scalars['Int']['input']>;
  post_count_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  post_count_lt?: InputMaybe<Scalars['Int']['input']>;
  post_count_lte?: InputMaybe<Scalars['Int']['input']>;
  post_count_not?: InputMaybe<Scalars['Int']['input']>;
  post_count_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  space?: InputMaybe<Scalars['String']['input']>;
  space_contains?: InputMaybe<Scalars['String']['input']>;
  space_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  space_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  space_not?: InputMaybe<Scalars['String']['input']>;
  space_not_contains?: InputMaybe<Scalars['String']['input']>;
  space_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  space_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  topic_id?: InputMaybe<Scalars['Int']['input']>;
  topic_id_gt?: InputMaybe<Scalars['Int']['input']>;
  topic_id_gte?: InputMaybe<Scalars['Int']['input']>;
  topic_id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  topic_id_lt?: InputMaybe<Scalars['Int']['input']>;
  topic_id_lte?: InputMaybe<Scalars['Int']['input']>;
  topic_id_not?: InputMaybe<Scalars['Int']['input']>;
  topic_id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  vote_count?: InputMaybe<Scalars['Int']['input']>;
  vote_count_gt?: InputMaybe<Scalars['Int']['input']>;
  vote_count_gte?: InputMaybe<Scalars['Int']['input']>;
  vote_count_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  vote_count_lt?: InputMaybe<Scalars['Int']['input']>;
  vote_count_lte?: InputMaybe<Scalars['Int']['input']>;
  vote_count_not?: InputMaybe<Scalars['Int']['input']>;
  vote_count_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type Post_Filter = {
  _indexer?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _indexer_not?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  author?: InputMaybe<Scalars['String']['input']>;
  author_contains?: InputMaybe<Scalars['String']['input']>;
  author_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  author_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  author_not?: InputMaybe<Scalars['String']['input']>;
  author_not_contains?: InputMaybe<Scalars['String']['input']>;
  author_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  author_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  body_contains?: InputMaybe<Scalars['String']['input']>;
  body_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  body_not_contains?: InputMaybe<Scalars['String']['input']>;
  body_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['Int']['input']>;
  created_gt?: InputMaybe<Scalars['Int']['input']>;
  created_gte?: InputMaybe<Scalars['Int']['input']>;
  created_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  created_lt?: InputMaybe<Scalars['Int']['input']>;
  created_lte?: InputMaybe<Scalars['Int']['input']>;
  created_not?: InputMaybe<Scalars['Int']['input']>;
  created_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  hidden?: InputMaybe<Scalars['Boolean']['input']>;
  hidden_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  hidden_not?: InputMaybe<Scalars['Boolean']['input']>;
  hidden_not_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pinned?: InputMaybe<Scalars['Boolean']['input']>;
  pinned_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  pinned_not?: InputMaybe<Scalars['Boolean']['input']>;
  pinned_not_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  post_id?: InputMaybe<Scalars['Int']['input']>;
  post_id_gt?: InputMaybe<Scalars['Int']['input']>;
  post_id_gte?: InputMaybe<Scalars['Int']['input']>;
  post_id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  post_id_lt?: InputMaybe<Scalars['Int']['input']>;
  post_id_lte?: InputMaybe<Scalars['Int']['input']>;
  post_id_not?: InputMaybe<Scalars['Int']['input']>;
  post_id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  scores_1?: InputMaybe<Scalars['Int']['input']>;
  scores_1_gt?: InputMaybe<Scalars['Int']['input']>;
  scores_1_gte?: InputMaybe<Scalars['Int']['input']>;
  scores_1_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  scores_1_lt?: InputMaybe<Scalars['Int']['input']>;
  scores_1_lte?: InputMaybe<Scalars['Int']['input']>;
  scores_1_not?: InputMaybe<Scalars['Int']['input']>;
  scores_1_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  scores_2?: InputMaybe<Scalars['Int']['input']>;
  scores_2_gt?: InputMaybe<Scalars['Int']['input']>;
  scores_2_gte?: InputMaybe<Scalars['Int']['input']>;
  scores_2_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  scores_2_lt?: InputMaybe<Scalars['Int']['input']>;
  scores_2_lte?: InputMaybe<Scalars['Int']['input']>;
  scores_2_not?: InputMaybe<Scalars['Int']['input']>;
  scores_2_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  scores_3?: InputMaybe<Scalars['Int']['input']>;
  scores_3_gt?: InputMaybe<Scalars['Int']['input']>;
  scores_3_gte?: InputMaybe<Scalars['Int']['input']>;
  scores_3_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  scores_3_lt?: InputMaybe<Scalars['Int']['input']>;
  scores_3_lte?: InputMaybe<Scalars['Int']['input']>;
  scores_3_not?: InputMaybe<Scalars['Int']['input']>;
  scores_3_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  space?: InputMaybe<Scalars['String']['input']>;
  space_?: InputMaybe<Post_Space_Filter>;
  space_contains?: InputMaybe<Scalars['String']['input']>;
  space_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  space_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  space_not?: InputMaybe<Scalars['String']['input']>;
  space_not_contains?: InputMaybe<Scalars['String']['input']>;
  space_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  space_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  topic?: InputMaybe<Scalars['String']['input']>;
  topic_?: InputMaybe<Post_Topic_Filter>;
  topic_contains?: InputMaybe<Scalars['String']['input']>;
  topic_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  topic_id?: InputMaybe<Scalars['Int']['input']>;
  topic_id_gt?: InputMaybe<Scalars['Int']['input']>;
  topic_id_gte?: InputMaybe<Scalars['Int']['input']>;
  topic_id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  topic_id_lt?: InputMaybe<Scalars['Int']['input']>;
  topic_id_lte?: InputMaybe<Scalars['Int']['input']>;
  topic_id_not?: InputMaybe<Scalars['Int']['input']>;
  topic_id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  topic_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  topic_not?: InputMaybe<Scalars['String']['input']>;
  topic_not_contains?: InputMaybe<Scalars['String']['input']>;
  topic_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  topic_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  vote_count?: InputMaybe<Scalars['Int']['input']>;
  vote_count_gt?: InputMaybe<Scalars['Int']['input']>;
  vote_count_gte?: InputMaybe<Scalars['Int']['input']>;
  vote_count_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  vote_count_lt?: InputMaybe<Scalars['Int']['input']>;
  vote_count_lte?: InputMaybe<Scalars['Int']['input']>;
  vote_count_not?: InputMaybe<Scalars['Int']['input']>;
  vote_count_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type Post_OrderBy =
  | '_indexer'
  | 'author'
  | 'body'
  | 'created'
  | 'hidden'
  | 'id'
  | 'pinned'
  | 'post_id'
  | 'scores_1'
  | 'scores_2'
  | 'scores_3'
  | 'space'
  | 'topic'
  | 'topic_id'
  | 'vote_count';

export type Query = {
  _checkpoint: Maybe<_Checkpoint>;
  _checkpoints: Array<_Checkpoint>;
  _metadata: Maybe<_Metadata>;
  _metadatas: Array<_Metadata>;
  alias: Maybe<Alias>;
  aliases: Array<Alias>;
  categories: Array<Category>;
  category: Maybe<Category>;
  post: Maybe<Post>;
  posts: Array<Post>;
  role: Maybe<Role>;
  roles: Array<Role>;
  space: Maybe<Space>;
  spaces: Array<Space>;
  topic: Maybe<Topic>;
  topics: Array<Topic>;
  user: Maybe<User>;
  userrole: Maybe<UserRole>;
  userroles: Array<UserRole>;
  users: Array<User>;
  vote: Maybe<Vote>;
  votes: Array<Vote>;
};


export type Query_CheckpointArgs = {
  block?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  indexer?: InputMaybe<Scalars['String']['input']>;
};


export type Query_CheckpointsArgs = {
  block?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  indexer?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<_Checkpoint_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<_Checkpoint_Filter>;
};


export type Query_MetadataArgs = {
  block?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  indexer?: InputMaybe<Scalars['String']['input']>;
};


export type Query_MetadatasArgs = {
  block?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  indexer?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<_Metadata_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<_Metadata_Filter>;
};


export type QueryAliasArgs = {
  block?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['String']['input'];
  indexer?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAliasesArgs = {
  block?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  indexer?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<Alias_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Alias_Filter>;
};


export type QueryCategoriesArgs = {
  block?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  indexer?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<Category_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Category_Filter>;
};


export type QueryCategoryArgs = {
  block?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['String']['input'];
  indexer?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPostArgs = {
  block?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['String']['input'];
  indexer?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPostsArgs = {
  block?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  indexer?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<Post_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Post_Filter>;
};


export type QueryRoleArgs = {
  block?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['String']['input'];
  indexer?: InputMaybe<Scalars['String']['input']>;
};


export type QueryRolesArgs = {
  block?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  indexer?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<Role_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Role_Filter>;
};


export type QuerySpaceArgs = {
  block?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['String']['input'];
  indexer?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySpacesArgs = {
  block?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  indexer?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<Space_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Space_Filter>;
};


export type QueryTopicArgs = {
  block?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['String']['input'];
  indexer?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTopicsArgs = {
  block?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  indexer?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<Topic_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Topic_Filter>;
};


export type QueryUserArgs = {
  block?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['String']['input'];
  indexer?: InputMaybe<Scalars['String']['input']>;
};


export type QueryUserroleArgs = {
  block?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['String']['input'];
  indexer?: InputMaybe<Scalars['String']['input']>;
};


export type QueryUserrolesArgs = {
  block?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  indexer?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<UserRole_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserRole_Filter>;
};


export type QueryUsersArgs = {
  block?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  indexer?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<User_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<User_Filter>;
};


export type QueryVoteArgs = {
  block?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['String']['input'];
  indexer?: InputMaybe<Scalars['String']['input']>;
};


export type QueryVotesArgs = {
  block?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  indexer?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<Vote_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Vote_Filter>;
};

export type Role = {
  _indexer: Scalars['String']['output'];
  color: Scalars['String']['output'];
  created: Scalars['Int']['output'];
  deleted: Scalars['Boolean']['output'];
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  isAdmin: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  space: Space;
};

export type Role_Space_Filter = {
  _indexer?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _indexer_not?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  created?: InputMaybe<Scalars['Int']['input']>;
  created_gt?: InputMaybe<Scalars['Int']['input']>;
  created_gte?: InputMaybe<Scalars['Int']['input']>;
  created_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  created_lt?: InputMaybe<Scalars['Int']['input']>;
  created_lte?: InputMaybe<Scalars['Int']['input']>;
  created_not?: InputMaybe<Scalars['Int']['input']>;
  created_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  owner?: InputMaybe<Scalars['String']['input']>;
  owner_contains?: InputMaybe<Scalars['String']['input']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  owner_not?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  space_id?: InputMaybe<Scalars['Int']['input']>;
  space_id_gt?: InputMaybe<Scalars['Int']['input']>;
  space_id_gte?: InputMaybe<Scalars['Int']['input']>;
  space_id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  space_id_lt?: InputMaybe<Scalars['Int']['input']>;
  space_id_lte?: InputMaybe<Scalars['Int']['input']>;
  space_id_not?: InputMaybe<Scalars['Int']['input']>;
  space_id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  topic_count?: InputMaybe<Scalars['Int']['input']>;
  topic_count_gt?: InputMaybe<Scalars['Int']['input']>;
  topic_count_gte?: InputMaybe<Scalars['Int']['input']>;
  topic_count_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  topic_count_lt?: InputMaybe<Scalars['Int']['input']>;
  topic_count_lte?: InputMaybe<Scalars['Int']['input']>;
  topic_count_not?: InputMaybe<Scalars['Int']['input']>;
  topic_count_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  vote_count?: InputMaybe<Scalars['Int']['input']>;
  vote_count_gt?: InputMaybe<Scalars['Int']['input']>;
  vote_count_gte?: InputMaybe<Scalars['Int']['input']>;
  vote_count_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  vote_count_lt?: InputMaybe<Scalars['Int']['input']>;
  vote_count_lte?: InputMaybe<Scalars['Int']['input']>;
  vote_count_not?: InputMaybe<Scalars['Int']['input']>;
  vote_count_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type Role_Filter = {
  _indexer?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _indexer_not?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  color?: InputMaybe<Scalars['String']['input']>;
  color_contains?: InputMaybe<Scalars['String']['input']>;
  color_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  color_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  color_not?: InputMaybe<Scalars['String']['input']>;
  color_not_contains?: InputMaybe<Scalars['String']['input']>;
  color_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  color_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  created?: InputMaybe<Scalars['Int']['input']>;
  created_gt?: InputMaybe<Scalars['Int']['input']>;
  created_gte?: InputMaybe<Scalars['Int']['input']>;
  created_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  created_lt?: InputMaybe<Scalars['Int']['input']>;
  created_lte?: InputMaybe<Scalars['Int']['input']>;
  created_not?: InputMaybe<Scalars['Int']['input']>;
  created_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  deleted_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  deleted_not?: InputMaybe<Scalars['Boolean']['input']>;
  deleted_not_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  isAdmin_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  isAdmin_not?: InputMaybe<Scalars['Boolean']['input']>;
  isAdmin_not_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  space?: InputMaybe<Scalars['String']['input']>;
  space_?: InputMaybe<Role_Space_Filter>;
  space_contains?: InputMaybe<Scalars['String']['input']>;
  space_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  space_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  space_not?: InputMaybe<Scalars['String']['input']>;
  space_not_contains?: InputMaybe<Scalars['String']['input']>;
  space_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  space_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Role_OrderBy =
  | '_indexer'
  | 'color'
  | 'created'
  | 'deleted'
  | 'description'
  | 'id'
  | 'isAdmin'
  | 'name'
  | 'space';

export type Space = {
  _indexer: Scalars['String']['output'];
  created: Scalars['Int']['output'];
  id: Scalars['String']['output'];
  owner: Scalars['String']['output'];
  space_id: Scalars['Int']['output'];
  topic_count: Scalars['Int']['output'];
  vote_count: Scalars['Int']['output'];
};

export type Space_Filter = {
  _indexer?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _indexer_not?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  created?: InputMaybe<Scalars['Int']['input']>;
  created_gt?: InputMaybe<Scalars['Int']['input']>;
  created_gte?: InputMaybe<Scalars['Int']['input']>;
  created_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  created_lt?: InputMaybe<Scalars['Int']['input']>;
  created_lte?: InputMaybe<Scalars['Int']['input']>;
  created_not?: InputMaybe<Scalars['Int']['input']>;
  created_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  owner?: InputMaybe<Scalars['String']['input']>;
  owner_contains?: InputMaybe<Scalars['String']['input']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  owner_not?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  space_id?: InputMaybe<Scalars['Int']['input']>;
  space_id_gt?: InputMaybe<Scalars['Int']['input']>;
  space_id_gte?: InputMaybe<Scalars['Int']['input']>;
  space_id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  space_id_lt?: InputMaybe<Scalars['Int']['input']>;
  space_id_lte?: InputMaybe<Scalars['Int']['input']>;
  space_id_not?: InputMaybe<Scalars['Int']['input']>;
  space_id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  topic_count?: InputMaybe<Scalars['Int']['input']>;
  topic_count_gt?: InputMaybe<Scalars['Int']['input']>;
  topic_count_gte?: InputMaybe<Scalars['Int']['input']>;
  topic_count_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  topic_count_lt?: InputMaybe<Scalars['Int']['input']>;
  topic_count_lte?: InputMaybe<Scalars['Int']['input']>;
  topic_count_not?: InputMaybe<Scalars['Int']['input']>;
  topic_count_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  vote_count?: InputMaybe<Scalars['Int']['input']>;
  vote_count_gt?: InputMaybe<Scalars['Int']['input']>;
  vote_count_gte?: InputMaybe<Scalars['Int']['input']>;
  vote_count_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  vote_count_lt?: InputMaybe<Scalars['Int']['input']>;
  vote_count_lte?: InputMaybe<Scalars['Int']['input']>;
  vote_count_not?: InputMaybe<Scalars['Int']['input']>;
  vote_count_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type Space_OrderBy =
  | '_indexer'
  | 'created'
  | 'id'
  | 'owner'
  | 'space_id'
  | 'topic_count'
  | 'vote_count';

export type Topic = {
  _indexer: Scalars['String']['output'];
  author: Scalars['String']['output'];
  body: Scalars['Text']['output'];
  category: Maybe<Category>;
  category_id: Scalars['Int']['output'];
  closed: Scalars['Boolean']['output'];
  created: Scalars['Int']['output'];
  discussion_url: Scalars['String']['output'];
  id: Scalars['String']['output'];
  post_count: Scalars['Int']['output'];
  posts: Array<Post>;
  space: Space;
  title: Scalars['String']['output'];
  topic_id: Scalars['Int']['output'];
  vote_count: Scalars['Int']['output'];
  votes: Array<Vote>;
};

export type Topic_Category_Filter = {
  _indexer?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _indexer_not?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  category_id?: InputMaybe<Scalars['Int']['input']>;
  category_id_gt?: InputMaybe<Scalars['Int']['input']>;
  category_id_gte?: InputMaybe<Scalars['Int']['input']>;
  category_id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  category_id_lt?: InputMaybe<Scalars['Int']['input']>;
  category_id_lte?: InputMaybe<Scalars['Int']['input']>;
  category_id_not?: InputMaybe<Scalars['Int']['input']>;
  category_id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  created?: InputMaybe<Scalars['Int']['input']>;
  created_gt?: InputMaybe<Scalars['Int']['input']>;
  created_gte?: InputMaybe<Scalars['Int']['input']>;
  created_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  created_lt?: InputMaybe<Scalars['Int']['input']>;
  created_lte?: InputMaybe<Scalars['Int']['input']>;
  created_not?: InputMaybe<Scalars['Int']['input']>;
  created_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  parent_category?: InputMaybe<Scalars['String']['input']>;
  parent_category_contains?: InputMaybe<Scalars['String']['input']>;
  parent_category_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  parent_category_id?: InputMaybe<Scalars['Int']['input']>;
  parent_category_id_gt?: InputMaybe<Scalars['Int']['input']>;
  parent_category_id_gte?: InputMaybe<Scalars['Int']['input']>;
  parent_category_id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  parent_category_id_lt?: InputMaybe<Scalars['Int']['input']>;
  parent_category_id_lte?: InputMaybe<Scalars['Int']['input']>;
  parent_category_id_not?: InputMaybe<Scalars['Int']['input']>;
  parent_category_id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  parent_category_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  parent_category_not?: InputMaybe<Scalars['String']['input']>;
  parent_category_not_contains?: InputMaybe<Scalars['String']['input']>;
  parent_category_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  parent_category_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  space?: InputMaybe<Scalars['String']['input']>;
  space_contains?: InputMaybe<Scalars['String']['input']>;
  space_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  space_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  space_not?: InputMaybe<Scalars['String']['input']>;
  space_not_contains?: InputMaybe<Scalars['String']['input']>;
  space_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  space_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  topic_count?: InputMaybe<Scalars['Int']['input']>;
  topic_count_gt?: InputMaybe<Scalars['Int']['input']>;
  topic_count_gte?: InputMaybe<Scalars['Int']['input']>;
  topic_count_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  topic_count_lt?: InputMaybe<Scalars['Int']['input']>;
  topic_count_lte?: InputMaybe<Scalars['Int']['input']>;
  topic_count_not?: InputMaybe<Scalars['Int']['input']>;
  topic_count_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type Topic_Space_Filter = {
  _indexer?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _indexer_not?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  created?: InputMaybe<Scalars['Int']['input']>;
  created_gt?: InputMaybe<Scalars['Int']['input']>;
  created_gte?: InputMaybe<Scalars['Int']['input']>;
  created_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  created_lt?: InputMaybe<Scalars['Int']['input']>;
  created_lte?: InputMaybe<Scalars['Int']['input']>;
  created_not?: InputMaybe<Scalars['Int']['input']>;
  created_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  owner?: InputMaybe<Scalars['String']['input']>;
  owner_contains?: InputMaybe<Scalars['String']['input']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  owner_not?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  space_id?: InputMaybe<Scalars['Int']['input']>;
  space_id_gt?: InputMaybe<Scalars['Int']['input']>;
  space_id_gte?: InputMaybe<Scalars['Int']['input']>;
  space_id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  space_id_lt?: InputMaybe<Scalars['Int']['input']>;
  space_id_lte?: InputMaybe<Scalars['Int']['input']>;
  space_id_not?: InputMaybe<Scalars['Int']['input']>;
  space_id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  topic_count?: InputMaybe<Scalars['Int']['input']>;
  topic_count_gt?: InputMaybe<Scalars['Int']['input']>;
  topic_count_gte?: InputMaybe<Scalars['Int']['input']>;
  topic_count_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  topic_count_lt?: InputMaybe<Scalars['Int']['input']>;
  topic_count_lte?: InputMaybe<Scalars['Int']['input']>;
  topic_count_not?: InputMaybe<Scalars['Int']['input']>;
  topic_count_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  vote_count?: InputMaybe<Scalars['Int']['input']>;
  vote_count_gt?: InputMaybe<Scalars['Int']['input']>;
  vote_count_gte?: InputMaybe<Scalars['Int']['input']>;
  vote_count_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  vote_count_lt?: InputMaybe<Scalars['Int']['input']>;
  vote_count_lte?: InputMaybe<Scalars['Int']['input']>;
  vote_count_not?: InputMaybe<Scalars['Int']['input']>;
  vote_count_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type Topic_Filter = {
  _indexer?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _indexer_not?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  author?: InputMaybe<Scalars['String']['input']>;
  author_contains?: InputMaybe<Scalars['String']['input']>;
  author_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  author_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  author_not?: InputMaybe<Scalars['String']['input']>;
  author_not_contains?: InputMaybe<Scalars['String']['input']>;
  author_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  author_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  body_contains?: InputMaybe<Scalars['String']['input']>;
  body_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  body_not_contains?: InputMaybe<Scalars['String']['input']>;
  body_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  category_?: InputMaybe<Topic_Category_Filter>;
  category_contains?: InputMaybe<Scalars['String']['input']>;
  category_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  category_id?: InputMaybe<Scalars['Int']['input']>;
  category_id_gt?: InputMaybe<Scalars['Int']['input']>;
  category_id_gte?: InputMaybe<Scalars['Int']['input']>;
  category_id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  category_id_lt?: InputMaybe<Scalars['Int']['input']>;
  category_id_lte?: InputMaybe<Scalars['Int']['input']>;
  category_id_not?: InputMaybe<Scalars['Int']['input']>;
  category_id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  category_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  category_not?: InputMaybe<Scalars['String']['input']>;
  category_not_contains?: InputMaybe<Scalars['String']['input']>;
  category_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  category_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  closed?: InputMaybe<Scalars['Boolean']['input']>;
  closed_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  closed_not?: InputMaybe<Scalars['Boolean']['input']>;
  closed_not_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  created?: InputMaybe<Scalars['Int']['input']>;
  created_gt?: InputMaybe<Scalars['Int']['input']>;
  created_gte?: InputMaybe<Scalars['Int']['input']>;
  created_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  created_lt?: InputMaybe<Scalars['Int']['input']>;
  created_lte?: InputMaybe<Scalars['Int']['input']>;
  created_not?: InputMaybe<Scalars['Int']['input']>;
  created_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  discussion_url?: InputMaybe<Scalars['String']['input']>;
  discussion_url_contains?: InputMaybe<Scalars['String']['input']>;
  discussion_url_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  discussion_url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  discussion_url_not?: InputMaybe<Scalars['String']['input']>;
  discussion_url_not_contains?: InputMaybe<Scalars['String']['input']>;
  discussion_url_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  discussion_url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  post_count?: InputMaybe<Scalars['Int']['input']>;
  post_count_gt?: InputMaybe<Scalars['Int']['input']>;
  post_count_gte?: InputMaybe<Scalars['Int']['input']>;
  post_count_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  post_count_lt?: InputMaybe<Scalars['Int']['input']>;
  post_count_lte?: InputMaybe<Scalars['Int']['input']>;
  post_count_not?: InputMaybe<Scalars['Int']['input']>;
  post_count_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  space?: InputMaybe<Scalars['String']['input']>;
  space_?: InputMaybe<Topic_Space_Filter>;
  space_contains?: InputMaybe<Scalars['String']['input']>;
  space_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  space_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  space_not?: InputMaybe<Scalars['String']['input']>;
  space_not_contains?: InputMaybe<Scalars['String']['input']>;
  space_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  space_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  topic_id?: InputMaybe<Scalars['Int']['input']>;
  topic_id_gt?: InputMaybe<Scalars['Int']['input']>;
  topic_id_gte?: InputMaybe<Scalars['Int']['input']>;
  topic_id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  topic_id_lt?: InputMaybe<Scalars['Int']['input']>;
  topic_id_lte?: InputMaybe<Scalars['Int']['input']>;
  topic_id_not?: InputMaybe<Scalars['Int']['input']>;
  topic_id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  vote_count?: InputMaybe<Scalars['Int']['input']>;
  vote_count_gt?: InputMaybe<Scalars['Int']['input']>;
  vote_count_gte?: InputMaybe<Scalars['Int']['input']>;
  vote_count_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  vote_count_lt?: InputMaybe<Scalars['Int']['input']>;
  vote_count_lte?: InputMaybe<Scalars['Int']['input']>;
  vote_count_not?: InputMaybe<Scalars['Int']['input']>;
  vote_count_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type Topic_OrderBy =
  | '_indexer'
  | 'author'
  | 'body'
  | 'category'
  | 'category_id'
  | 'closed'
  | 'created'
  | 'discussion_url'
  | 'id'
  | 'post_count'
  | 'space'
  | 'title'
  | 'topic_id'
  | 'vote_count';

export type User = {
  _indexer: Scalars['String']['output'];
  id: Scalars['String']['output'];
  roles: Array<UserRole>;
};

export type UserRole = {
  _indexer: Scalars['String']['output'];
  id: Scalars['String']['output'];
  role: Role;
  user: User;
};

export type UserRole_Role_Filter = {
  _indexer?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _indexer_not?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  color?: InputMaybe<Scalars['String']['input']>;
  color_contains?: InputMaybe<Scalars['String']['input']>;
  color_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  color_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  color_not?: InputMaybe<Scalars['String']['input']>;
  color_not_contains?: InputMaybe<Scalars['String']['input']>;
  color_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  color_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  created?: InputMaybe<Scalars['Int']['input']>;
  created_gt?: InputMaybe<Scalars['Int']['input']>;
  created_gte?: InputMaybe<Scalars['Int']['input']>;
  created_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  created_lt?: InputMaybe<Scalars['Int']['input']>;
  created_lte?: InputMaybe<Scalars['Int']['input']>;
  created_not?: InputMaybe<Scalars['Int']['input']>;
  created_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  deleted_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  deleted_not?: InputMaybe<Scalars['Boolean']['input']>;
  deleted_not_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  isAdmin_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  isAdmin_not?: InputMaybe<Scalars['Boolean']['input']>;
  isAdmin_not_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  space?: InputMaybe<Scalars['String']['input']>;
  space_contains?: InputMaybe<Scalars['String']['input']>;
  space_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  space_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  space_not?: InputMaybe<Scalars['String']['input']>;
  space_not_contains?: InputMaybe<Scalars['String']['input']>;
  space_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  space_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UserRole_User_Filter = {
  _indexer?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _indexer_not?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UserRole_Filter = {
  _indexer?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _indexer_not?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  role?: InputMaybe<Scalars['String']['input']>;
  role_?: InputMaybe<UserRole_Role_Filter>;
  role_contains?: InputMaybe<Scalars['String']['input']>;
  role_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  role_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  role_not?: InputMaybe<Scalars['String']['input']>;
  role_not_contains?: InputMaybe<Scalars['String']['input']>;
  role_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  role_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  user?: InputMaybe<Scalars['String']['input']>;
  user_?: InputMaybe<UserRole_User_Filter>;
  user_contains?: InputMaybe<Scalars['String']['input']>;
  user_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  user_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  user_not?: InputMaybe<Scalars['String']['input']>;
  user_not_contains?: InputMaybe<Scalars['String']['input']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UserRole_OrderBy =
  | '_indexer'
  | 'id'
  | 'role'
  | 'user';

export type User_Filter = {
  _indexer?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _indexer_not?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type User_OrderBy =
  | '_indexer'
  | 'id';

export type Vote = {
  _indexer: Scalars['String']['output'];
  choice: Scalars['Int']['output'];
  created: Scalars['Int']['output'];
  id: Scalars['String']['output'];
  post: Post;
  post_id: Scalars['Int']['output'];
  space: Space;
  topic: Topic;
  topic_id: Scalars['Int']['output'];
  voter: Scalars['String']['output'];
};

export type Vote_Post_Filter = {
  _indexer?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _indexer_not?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  author?: InputMaybe<Scalars['String']['input']>;
  author_contains?: InputMaybe<Scalars['String']['input']>;
  author_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  author_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  author_not?: InputMaybe<Scalars['String']['input']>;
  author_not_contains?: InputMaybe<Scalars['String']['input']>;
  author_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  author_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  body_contains?: InputMaybe<Scalars['String']['input']>;
  body_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  body_not_contains?: InputMaybe<Scalars['String']['input']>;
  body_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['Int']['input']>;
  created_gt?: InputMaybe<Scalars['Int']['input']>;
  created_gte?: InputMaybe<Scalars['Int']['input']>;
  created_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  created_lt?: InputMaybe<Scalars['Int']['input']>;
  created_lte?: InputMaybe<Scalars['Int']['input']>;
  created_not?: InputMaybe<Scalars['Int']['input']>;
  created_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  hidden?: InputMaybe<Scalars['Boolean']['input']>;
  hidden_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  hidden_not?: InputMaybe<Scalars['Boolean']['input']>;
  hidden_not_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pinned?: InputMaybe<Scalars['Boolean']['input']>;
  pinned_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  pinned_not?: InputMaybe<Scalars['Boolean']['input']>;
  pinned_not_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  post_id?: InputMaybe<Scalars['Int']['input']>;
  post_id_gt?: InputMaybe<Scalars['Int']['input']>;
  post_id_gte?: InputMaybe<Scalars['Int']['input']>;
  post_id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  post_id_lt?: InputMaybe<Scalars['Int']['input']>;
  post_id_lte?: InputMaybe<Scalars['Int']['input']>;
  post_id_not?: InputMaybe<Scalars['Int']['input']>;
  post_id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  scores_1?: InputMaybe<Scalars['Int']['input']>;
  scores_1_gt?: InputMaybe<Scalars['Int']['input']>;
  scores_1_gte?: InputMaybe<Scalars['Int']['input']>;
  scores_1_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  scores_1_lt?: InputMaybe<Scalars['Int']['input']>;
  scores_1_lte?: InputMaybe<Scalars['Int']['input']>;
  scores_1_not?: InputMaybe<Scalars['Int']['input']>;
  scores_1_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  scores_2?: InputMaybe<Scalars['Int']['input']>;
  scores_2_gt?: InputMaybe<Scalars['Int']['input']>;
  scores_2_gte?: InputMaybe<Scalars['Int']['input']>;
  scores_2_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  scores_2_lt?: InputMaybe<Scalars['Int']['input']>;
  scores_2_lte?: InputMaybe<Scalars['Int']['input']>;
  scores_2_not?: InputMaybe<Scalars['Int']['input']>;
  scores_2_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  scores_3?: InputMaybe<Scalars['Int']['input']>;
  scores_3_gt?: InputMaybe<Scalars['Int']['input']>;
  scores_3_gte?: InputMaybe<Scalars['Int']['input']>;
  scores_3_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  scores_3_lt?: InputMaybe<Scalars['Int']['input']>;
  scores_3_lte?: InputMaybe<Scalars['Int']['input']>;
  scores_3_not?: InputMaybe<Scalars['Int']['input']>;
  scores_3_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  space?: InputMaybe<Scalars['String']['input']>;
  space_contains?: InputMaybe<Scalars['String']['input']>;
  space_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  space_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  space_not?: InputMaybe<Scalars['String']['input']>;
  space_not_contains?: InputMaybe<Scalars['String']['input']>;
  space_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  space_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  topic?: InputMaybe<Scalars['String']['input']>;
  topic_contains?: InputMaybe<Scalars['String']['input']>;
  topic_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  topic_id?: InputMaybe<Scalars['Int']['input']>;
  topic_id_gt?: InputMaybe<Scalars['Int']['input']>;
  topic_id_gte?: InputMaybe<Scalars['Int']['input']>;
  topic_id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  topic_id_lt?: InputMaybe<Scalars['Int']['input']>;
  topic_id_lte?: InputMaybe<Scalars['Int']['input']>;
  topic_id_not?: InputMaybe<Scalars['Int']['input']>;
  topic_id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  topic_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  topic_not?: InputMaybe<Scalars['String']['input']>;
  topic_not_contains?: InputMaybe<Scalars['String']['input']>;
  topic_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  topic_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  vote_count?: InputMaybe<Scalars['Int']['input']>;
  vote_count_gt?: InputMaybe<Scalars['Int']['input']>;
  vote_count_gte?: InputMaybe<Scalars['Int']['input']>;
  vote_count_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  vote_count_lt?: InputMaybe<Scalars['Int']['input']>;
  vote_count_lte?: InputMaybe<Scalars['Int']['input']>;
  vote_count_not?: InputMaybe<Scalars['Int']['input']>;
  vote_count_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type Vote_Space_Filter = {
  _indexer?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _indexer_not?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  created?: InputMaybe<Scalars['Int']['input']>;
  created_gt?: InputMaybe<Scalars['Int']['input']>;
  created_gte?: InputMaybe<Scalars['Int']['input']>;
  created_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  created_lt?: InputMaybe<Scalars['Int']['input']>;
  created_lte?: InputMaybe<Scalars['Int']['input']>;
  created_not?: InputMaybe<Scalars['Int']['input']>;
  created_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  owner?: InputMaybe<Scalars['String']['input']>;
  owner_contains?: InputMaybe<Scalars['String']['input']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  owner_not?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  space_id?: InputMaybe<Scalars['Int']['input']>;
  space_id_gt?: InputMaybe<Scalars['Int']['input']>;
  space_id_gte?: InputMaybe<Scalars['Int']['input']>;
  space_id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  space_id_lt?: InputMaybe<Scalars['Int']['input']>;
  space_id_lte?: InputMaybe<Scalars['Int']['input']>;
  space_id_not?: InputMaybe<Scalars['Int']['input']>;
  space_id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  topic_count?: InputMaybe<Scalars['Int']['input']>;
  topic_count_gt?: InputMaybe<Scalars['Int']['input']>;
  topic_count_gte?: InputMaybe<Scalars['Int']['input']>;
  topic_count_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  topic_count_lt?: InputMaybe<Scalars['Int']['input']>;
  topic_count_lte?: InputMaybe<Scalars['Int']['input']>;
  topic_count_not?: InputMaybe<Scalars['Int']['input']>;
  topic_count_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  vote_count?: InputMaybe<Scalars['Int']['input']>;
  vote_count_gt?: InputMaybe<Scalars['Int']['input']>;
  vote_count_gte?: InputMaybe<Scalars['Int']['input']>;
  vote_count_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  vote_count_lt?: InputMaybe<Scalars['Int']['input']>;
  vote_count_lte?: InputMaybe<Scalars['Int']['input']>;
  vote_count_not?: InputMaybe<Scalars['Int']['input']>;
  vote_count_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type Vote_Topic_Filter = {
  _indexer?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _indexer_not?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  author?: InputMaybe<Scalars['String']['input']>;
  author_contains?: InputMaybe<Scalars['String']['input']>;
  author_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  author_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  author_not?: InputMaybe<Scalars['String']['input']>;
  author_not_contains?: InputMaybe<Scalars['String']['input']>;
  author_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  author_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  body_contains?: InputMaybe<Scalars['String']['input']>;
  body_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  body_not_contains?: InputMaybe<Scalars['String']['input']>;
  body_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  category_contains?: InputMaybe<Scalars['String']['input']>;
  category_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  category_id?: InputMaybe<Scalars['Int']['input']>;
  category_id_gt?: InputMaybe<Scalars['Int']['input']>;
  category_id_gte?: InputMaybe<Scalars['Int']['input']>;
  category_id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  category_id_lt?: InputMaybe<Scalars['Int']['input']>;
  category_id_lte?: InputMaybe<Scalars['Int']['input']>;
  category_id_not?: InputMaybe<Scalars['Int']['input']>;
  category_id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  category_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  category_not?: InputMaybe<Scalars['String']['input']>;
  category_not_contains?: InputMaybe<Scalars['String']['input']>;
  category_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  category_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  closed?: InputMaybe<Scalars['Boolean']['input']>;
  closed_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  closed_not?: InputMaybe<Scalars['Boolean']['input']>;
  closed_not_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  created?: InputMaybe<Scalars['Int']['input']>;
  created_gt?: InputMaybe<Scalars['Int']['input']>;
  created_gte?: InputMaybe<Scalars['Int']['input']>;
  created_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  created_lt?: InputMaybe<Scalars['Int']['input']>;
  created_lte?: InputMaybe<Scalars['Int']['input']>;
  created_not?: InputMaybe<Scalars['Int']['input']>;
  created_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  discussion_url?: InputMaybe<Scalars['String']['input']>;
  discussion_url_contains?: InputMaybe<Scalars['String']['input']>;
  discussion_url_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  discussion_url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  discussion_url_not?: InputMaybe<Scalars['String']['input']>;
  discussion_url_not_contains?: InputMaybe<Scalars['String']['input']>;
  discussion_url_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  discussion_url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  post_count?: InputMaybe<Scalars['Int']['input']>;
  post_count_gt?: InputMaybe<Scalars['Int']['input']>;
  post_count_gte?: InputMaybe<Scalars['Int']['input']>;
  post_count_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  post_count_lt?: InputMaybe<Scalars['Int']['input']>;
  post_count_lte?: InputMaybe<Scalars['Int']['input']>;
  post_count_not?: InputMaybe<Scalars['Int']['input']>;
  post_count_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  space?: InputMaybe<Scalars['String']['input']>;
  space_contains?: InputMaybe<Scalars['String']['input']>;
  space_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  space_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  space_not?: InputMaybe<Scalars['String']['input']>;
  space_not_contains?: InputMaybe<Scalars['String']['input']>;
  space_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  space_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  topic_id?: InputMaybe<Scalars['Int']['input']>;
  topic_id_gt?: InputMaybe<Scalars['Int']['input']>;
  topic_id_gte?: InputMaybe<Scalars['Int']['input']>;
  topic_id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  topic_id_lt?: InputMaybe<Scalars['Int']['input']>;
  topic_id_lte?: InputMaybe<Scalars['Int']['input']>;
  topic_id_not?: InputMaybe<Scalars['Int']['input']>;
  topic_id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  vote_count?: InputMaybe<Scalars['Int']['input']>;
  vote_count_gt?: InputMaybe<Scalars['Int']['input']>;
  vote_count_gte?: InputMaybe<Scalars['Int']['input']>;
  vote_count_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  vote_count_lt?: InputMaybe<Scalars['Int']['input']>;
  vote_count_lte?: InputMaybe<Scalars['Int']['input']>;
  vote_count_not?: InputMaybe<Scalars['Int']['input']>;
  vote_count_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type Vote_Filter = {
  _indexer?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _indexer_not?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  choice?: InputMaybe<Scalars['Int']['input']>;
  choice_gt?: InputMaybe<Scalars['Int']['input']>;
  choice_gte?: InputMaybe<Scalars['Int']['input']>;
  choice_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  choice_lt?: InputMaybe<Scalars['Int']['input']>;
  choice_lte?: InputMaybe<Scalars['Int']['input']>;
  choice_not?: InputMaybe<Scalars['Int']['input']>;
  choice_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  created?: InputMaybe<Scalars['Int']['input']>;
  created_gt?: InputMaybe<Scalars['Int']['input']>;
  created_gte?: InputMaybe<Scalars['Int']['input']>;
  created_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  created_lt?: InputMaybe<Scalars['Int']['input']>;
  created_lte?: InputMaybe<Scalars['Int']['input']>;
  created_not?: InputMaybe<Scalars['Int']['input']>;
  created_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  post?: InputMaybe<Scalars['String']['input']>;
  post_?: InputMaybe<Vote_Post_Filter>;
  post_contains?: InputMaybe<Scalars['String']['input']>;
  post_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  post_id?: InputMaybe<Scalars['Int']['input']>;
  post_id_gt?: InputMaybe<Scalars['Int']['input']>;
  post_id_gte?: InputMaybe<Scalars['Int']['input']>;
  post_id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  post_id_lt?: InputMaybe<Scalars['Int']['input']>;
  post_id_lte?: InputMaybe<Scalars['Int']['input']>;
  post_id_not?: InputMaybe<Scalars['Int']['input']>;
  post_id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  post_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  post_not?: InputMaybe<Scalars['String']['input']>;
  post_not_contains?: InputMaybe<Scalars['String']['input']>;
  post_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  post_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  space?: InputMaybe<Scalars['String']['input']>;
  space_?: InputMaybe<Vote_Space_Filter>;
  space_contains?: InputMaybe<Scalars['String']['input']>;
  space_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  space_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  space_not?: InputMaybe<Scalars['String']['input']>;
  space_not_contains?: InputMaybe<Scalars['String']['input']>;
  space_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  space_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  topic?: InputMaybe<Scalars['String']['input']>;
  topic_?: InputMaybe<Vote_Topic_Filter>;
  topic_contains?: InputMaybe<Scalars['String']['input']>;
  topic_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  topic_id?: InputMaybe<Scalars['Int']['input']>;
  topic_id_gt?: InputMaybe<Scalars['Int']['input']>;
  topic_id_gte?: InputMaybe<Scalars['Int']['input']>;
  topic_id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  topic_id_lt?: InputMaybe<Scalars['Int']['input']>;
  topic_id_lte?: InputMaybe<Scalars['Int']['input']>;
  topic_id_not?: InputMaybe<Scalars['Int']['input']>;
  topic_id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  topic_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  topic_not?: InputMaybe<Scalars['String']['input']>;
  topic_not_contains?: InputMaybe<Scalars['String']['input']>;
  topic_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  topic_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  voter?: InputMaybe<Scalars['String']['input']>;
  voter_contains?: InputMaybe<Scalars['String']['input']>;
  voter_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  voter_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  voter_not?: InputMaybe<Scalars['String']['input']>;
  voter_not_contains?: InputMaybe<Scalars['String']['input']>;
  voter_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  voter_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Vote_OrderBy =
  | '_indexer'
  | 'choice'
  | 'created'
  | 'id'
  | 'post'
  | 'post_id'
  | 'space'
  | 'topic'
  | 'topic_id'
  | 'voter';

/** Contract and Block where its event is found. */
export type _Checkpoint = {
  block_number: Scalars['Int']['output'];
  contract_address: Scalars['String']['output'];
  /** id computed as last 5 bytes of sha256(contract+block) */
  id: Scalars['ID']['output'];
  indexer: Scalars['String']['output'];
};

export type _Checkpoint_Filter = {
  block_number?: InputMaybe<Scalars['Int']['input']>;
  block_number_gt?: InputMaybe<Scalars['Int']['input']>;
  block_number_gte?: InputMaybe<Scalars['Int']['input']>;
  block_number_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  block_number_lt?: InputMaybe<Scalars['Int']['input']>;
  block_number_lte?: InputMaybe<Scalars['Int']['input']>;
  block_number_not?: InputMaybe<Scalars['Int']['input']>;
  block_number_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contract_address?: InputMaybe<Scalars['String']['input']>;
  contract_address_contains?: InputMaybe<Scalars['String']['input']>;
  contract_address_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  contract_address_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contract_address_not?: InputMaybe<Scalars['String']['input']>;
  contract_address_not_contains?: InputMaybe<Scalars['String']['input']>;
  contract_address_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  contract_address_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  indexer?: InputMaybe<Scalars['String']['input']>;
  indexer_contains?: InputMaybe<Scalars['String']['input']>;
  indexer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  indexer_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  indexer_not?: InputMaybe<Scalars['String']['input']>;
  indexer_not_contains?: InputMaybe<Scalars['String']['input']>;
  indexer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  indexer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type _Checkpoint_OrderBy =
  | 'block_number'
  | 'contract_address'
  | 'id'
  | 'indexer';

/** Core metadata values used internally by Checkpoint */
export type _Metadata = {
  /** example: last_indexed_block */
  id: Scalars['ID']['output'];
  indexer: Scalars['String']['output'];
  value: Maybe<Scalars['String']['output']>;
};

export type _Metadata_Filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  indexer?: InputMaybe<Scalars['String']['input']>;
  indexer_contains?: InputMaybe<Scalars['String']['input']>;
  indexer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  indexer_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  indexer_not?: InputMaybe<Scalars['String']['input']>;
  indexer_not_contains?: InputMaybe<Scalars['String']['input']>;
  indexer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  indexer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  value?: InputMaybe<Scalars['String']['input']>;
  value_contains?: InputMaybe<Scalars['String']['input']>;
  value_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  value_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  value_not?: InputMaybe<Scalars['String']['input']>;
  value_not_contains?: InputMaybe<Scalars['String']['input']>;
  value_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  value_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type _Metadata_OrderBy =
  | 'id'
  | 'indexer'
  | 'value';

export type SpaceFieldsFragment = { id: string, space_id: number, owner: string, vote_count: number, topic_count: number };

export type CategoryFieldsFragment = { id: string, category_id: number, name: string, slug: string, description: string, parent_category_id: number, topic_count: number, parent_category: { category_id: number, name: string, slug: string } | null };

export type PostFieldsFragment = { id: string, body: any, author: string, scores_1: number, scores_2: number, scores_3: number, vote_count: number, pinned: boolean, hidden: boolean, created: number, topic_id: number, post_id: number, topic: { id: string } };

export type TopicFieldsFragment = { id: string, title: string, body: any, discussion_url: string, author: string, post_count: number, vote_count: number, created: number, closed: boolean, topic_id: number, category: { category_id: number, name: string, slug: string } | null, posts: Array<{ id: string, body: any, author: string, scores_1: number, scores_2: number, scores_3: number, vote_count: number, pinned: boolean, hidden: boolean, created: number, topic_id: number, post_id: number, topic: { id: string } }> };

export type VoteFieldsFragment = { id: string, voter: string, choice: number, created: number, topic_id: number, post_id: number, topic: { id: string }, post: { id: string } };

export type RoleFieldsFragment = { id: string, name: string, description: string, color: string, isAdmin: boolean, space: { id: string, space_id: number } };

export type SpaceQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type SpaceQuery = { space: { id: string, space_id: number, owner: string, vote_count: number, topic_count: number } | null };

export type CategoryQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type CategoryQuery = { category: { id: string, category_id: number, name: string, slug: string, description: string, parent_category_id: number, topic_count: number, parent_category: { category_id: number, name: string, slug: string } | null } | null };

export type CategoriesQueryVariables = Exact<{
  spaceId: Scalars['String']['input'];
  parentCategoryId: Scalars['Int']['input'];
}>;


export type CategoriesQuery = { categories: Array<{ id: string, category_id: number, name: string, slug: string, description: string, parent_category_id: number, topic_count: number, parent_category: { category_id: number, name: string, slug: string } | null }> };

export type TopicsQueryVariables = Exact<{
  spaceId: Scalars['String']['input'];
  categoryId: Scalars['Int']['input'];
  limit: Scalars['Int']['input'];
  skip: Scalars['Int']['input'];
}>;


export type TopicsQuery = { topics: Array<{ id: string, title: string, body: any, discussion_url: string, author: string, post_count: number, vote_count: number, created: number, closed: boolean, topic_id: number, category: { category_id: number, name: string, slug: string } | null, posts: Array<{ id: string, body: any, author: string, scores_1: number, scores_2: number, scores_3: number, vote_count: number, pinned: boolean, hidden: boolean, created: number, topic_id: number, post_id: number, topic: { id: string } }> }> };

export type TopicQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type TopicQuery = { topic: { id: string, title: string, body: any, discussion_url: string, author: string, post_count: number, vote_count: number, created: number, closed: boolean, topic_id: number, category: { category_id: number, name: string, slug: string } | null, posts: Array<{ id: string, body: any, author: string, scores_1: number, scores_2: number, scores_3: number, vote_count: number, pinned: boolean, hidden: boolean, created: number, topic_id: number, post_id: number, topic: { id: string } }> } | null };

export type VotesQueryVariables = Exact<{
  topic: Scalars['String']['input'];
  voter: Scalars['String']['input'];
}>;


export type VotesQuery = { votes: Array<{ id: string, voter: string, choice: number, created: number, topic_id: number, post_id: number, topic: { id: string }, post: { id: string } }> };

export type RolesQueryVariables = Exact<{
  space: Scalars['String']['input'];
}>;


export type RolesQuery = { roles: Array<{ id: string, name: string, description: string, color: string, isAdmin: boolean, space: { id: string, space_id: number } }> };

export type UserRolesQueryVariables = Exact<{
  user: Scalars['String']['input'];
}>;


export type UserRolesQuery = { user: { roles: Array<{ role: { deleted: boolean, id: string, name: string, description: string, color: string, isAdmin: boolean, space: { id: string, space_id: number } } }> } | null };

export const SpaceFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"spaceFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Space"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"space_id"}},{"kind":"Field","name":{"kind":"Name","value":"owner"}},{"kind":"Field","name":{"kind":"Name","value":"vote_count"}},{"kind":"Field","name":{"kind":"Name","value":"topic_count"}}]}}]} as unknown as DocumentNode<SpaceFieldsFragment, unknown>;
export const CategoryFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"categoryFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Category"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"category_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"parent_category_id"}},{"kind":"Field","name":{"kind":"Name","value":"parent_category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"category_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"topic_count"}}]}}]} as unknown as DocumentNode<CategoryFieldsFragment, unknown>;
export const PostFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"postFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"author"}},{"kind":"Field","name":{"kind":"Name","value":"scores_1"}},{"kind":"Field","name":{"kind":"Name","value":"scores_2"}},{"kind":"Field","name":{"kind":"Name","value":"scores_3"}},{"kind":"Field","name":{"kind":"Name","value":"vote_count"}},{"kind":"Field","name":{"kind":"Name","value":"pinned"}},{"kind":"Field","name":{"kind":"Name","value":"hidden"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"topic_id"}},{"kind":"Field","name":{"kind":"Name","value":"post_id"}},{"kind":"Field","name":{"kind":"Name","value":"topic"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<PostFieldsFragment, unknown>;
export const TopicFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"topicFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Topic"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"discussion_url"}},{"kind":"Field","name":{"kind":"Name","value":"author"}},{"kind":"Field","name":{"kind":"Name","value":"post_count"}},{"kind":"Field","name":{"kind":"Name","value":"vote_count"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"closed"}},{"kind":"Field","name":{"kind":"Name","value":"topic_id"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"category_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"posts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"postFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"postFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"author"}},{"kind":"Field","name":{"kind":"Name","value":"scores_1"}},{"kind":"Field","name":{"kind":"Name","value":"scores_2"}},{"kind":"Field","name":{"kind":"Name","value":"scores_3"}},{"kind":"Field","name":{"kind":"Name","value":"vote_count"}},{"kind":"Field","name":{"kind":"Name","value":"pinned"}},{"kind":"Field","name":{"kind":"Name","value":"hidden"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"topic_id"}},{"kind":"Field","name":{"kind":"Name","value":"post_id"}},{"kind":"Field","name":{"kind":"Name","value":"topic"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<TopicFieldsFragment, unknown>;
export const VoteFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"voteFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Vote"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"voter"}},{"kind":"Field","name":{"kind":"Name","value":"choice"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"topic_id"}},{"kind":"Field","name":{"kind":"Name","value":"post_id"}},{"kind":"Field","name":{"kind":"Name","value":"topic"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"post"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<VoteFieldsFragment, unknown>;
export const RoleFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"roleFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Role"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"space"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"space_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"isAdmin"}}]}}]} as unknown as DocumentNode<RoleFieldsFragment, unknown>;
export const SpaceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Space"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"space"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"spaceFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"spaceFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Space"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"space_id"}},{"kind":"Field","name":{"kind":"Name","value":"owner"}},{"kind":"Field","name":{"kind":"Name","value":"vote_count"}},{"kind":"Field","name":{"kind":"Name","value":"topic_count"}}]}}]} as unknown as DocumentNode<SpaceQuery, SpaceQueryVariables>;
export const CategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Category"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"category"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"categoryFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"categoryFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Category"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"category_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"parent_category_id"}},{"kind":"Field","name":{"kind":"Name","value":"parent_category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"category_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"topic_count"}}]}}]} as unknown as DocumentNode<CategoryQuery, CategoryQueryVariables>;
export const CategoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Categories"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"spaceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"parentCategoryId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"categories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"space"},"value":{"kind":"Variable","name":{"kind":"Name","value":"spaceId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"parent_category_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"parentCategoryId"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"created"}},{"kind":"Argument","name":{"kind":"Name","value":"orderDirection"},"value":{"kind":"EnumValue","value":"asc"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"categoryFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"categoryFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Category"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"category_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"parent_category_id"}},{"kind":"Field","name":{"kind":"Name","value":"parent_category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"category_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"topic_count"}}]}}]} as unknown as DocumentNode<CategoriesQuery, CategoriesQueryVariables>;
export const TopicsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Topics"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"spaceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"categoryId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"topics"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"created"}},{"kind":"Argument","name":{"kind":"Name","value":"orderDirection"},"value":{"kind":"EnumValue","value":"desc"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"space"},"value":{"kind":"Variable","name":{"kind":"Name","value":"spaceId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"category_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"categoryId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"topicFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"postFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"author"}},{"kind":"Field","name":{"kind":"Name","value":"scores_1"}},{"kind":"Field","name":{"kind":"Name","value":"scores_2"}},{"kind":"Field","name":{"kind":"Name","value":"scores_3"}},{"kind":"Field","name":{"kind":"Name","value":"vote_count"}},{"kind":"Field","name":{"kind":"Name","value":"pinned"}},{"kind":"Field","name":{"kind":"Name","value":"hidden"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"topic_id"}},{"kind":"Field","name":{"kind":"Name","value":"post_id"}},{"kind":"Field","name":{"kind":"Name","value":"topic"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"topicFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Topic"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"discussion_url"}},{"kind":"Field","name":{"kind":"Name","value":"author"}},{"kind":"Field","name":{"kind":"Name","value":"post_count"}},{"kind":"Field","name":{"kind":"Name","value":"vote_count"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"closed"}},{"kind":"Field","name":{"kind":"Name","value":"topic_id"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"category_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"posts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"postFields"}}]}}]}}]} as unknown as DocumentNode<TopicsQuery, TopicsQueryVariables>;
export const TopicDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Topic"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"topic"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"topicFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"postFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"author"}},{"kind":"Field","name":{"kind":"Name","value":"scores_1"}},{"kind":"Field","name":{"kind":"Name","value":"scores_2"}},{"kind":"Field","name":{"kind":"Name","value":"scores_3"}},{"kind":"Field","name":{"kind":"Name","value":"vote_count"}},{"kind":"Field","name":{"kind":"Name","value":"pinned"}},{"kind":"Field","name":{"kind":"Name","value":"hidden"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"topic_id"}},{"kind":"Field","name":{"kind":"Name","value":"post_id"}},{"kind":"Field","name":{"kind":"Name","value":"topic"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"topicFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Topic"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"discussion_url"}},{"kind":"Field","name":{"kind":"Name","value":"author"}},{"kind":"Field","name":{"kind":"Name","value":"post_count"}},{"kind":"Field","name":{"kind":"Name","value":"vote_count"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"closed"}},{"kind":"Field","name":{"kind":"Name","value":"topic_id"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"category_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"posts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"postFields"}}]}}]}}]} as unknown as DocumentNode<TopicQuery, TopicQueryVariables>;
export const VotesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Votes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"topic"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"voter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"votes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"topic"},"value":{"kind":"Variable","name":{"kind":"Name","value":"topic"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"voter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"voter"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"voteFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"voteFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Vote"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"voter"}},{"kind":"Field","name":{"kind":"Name","value":"choice"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"topic_id"}},{"kind":"Field","name":{"kind":"Name","value":"post_id"}},{"kind":"Field","name":{"kind":"Name","value":"topic"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"post"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<VotesQuery, VotesQueryVariables>;
export const RolesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Roles"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"space"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"roles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"space"},"value":{"kind":"Variable","name":{"kind":"Name","value":"space"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"deleted"},"value":{"kind":"BooleanValue","value":false}}]}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"id"}},{"kind":"Argument","name":{"kind":"Name","value":"orderDirection"},"value":{"kind":"EnumValue","value":"asc"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"roleFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"roleFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Role"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"space"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"space_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"isAdmin"}}]}}]} as unknown as DocumentNode<RolesQuery, RolesQueryVariables>;
export const UserRolesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserRoles"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"roles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"roleFields"}},{"kind":"Field","name":{"kind":"Name","value":"deleted"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"roleFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Role"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"space"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"space_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"isAdmin"}}]}}]} as unknown as DocumentNode<UserRolesQuery, UserRolesQueryVariables>;