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
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  fragment spaceFields on Space {\n    id\n    space_id\n    owner\n    vote_count\n    topic_count\n  }\n\n  fragment categoryFields on Category {\n    id\n    category_id\n    name\n    slug\n    description\n    parent_category_id\n    parent_category {\n      category_id\n      name\n      slug\n    }\n    topic_count\n  }\n\n  fragment postFields on Post {\n    id\n    body\n    author\n    scores_1\n    scores_2\n    scores_3\n    vote_count\n    pinned\n    hidden\n    created\n    topic_id\n    post_id\n    topic {\n      id\n    }\n  }\n\n  fragment topicFields on Topic {\n    id\n    title\n    body\n    discussion_url\n    author\n    post_count\n    vote_count\n    created\n    closed\n    topic_id\n    category {\n      category_id\n      name\n      slug\n    }\n    posts {\n      ...postFields\n    }\n  }\n\n  fragment voteFields on Vote {\n    id\n    voter\n    choice\n    created\n    topic_id\n    post_id\n    topic {\n      id\n    }\n    post {\n      id\n    }\n  }\n\n  fragment roleFields on Role {\n    id\n    space {\n      id\n      space_id\n    }\n    name\n    description\n    color\n    isAdmin\n  }\n": typeof types.SpaceFieldsFragmentDoc,
    "\n  query Space($id: String!) {\n    space(id: $id) {\n      ...spaceFields\n    }\n  }\n": typeof types.SpaceDocument,
    "\n  query Category($id: String!) {\n    category(id: $id) {\n      ...categoryFields\n    }\n  }\n": typeof types.CategoryDocument,
    "\n  query Categories($spaceId: String!, $parentCategoryId: Int!) {\n    categories(where: { space: $spaceId, parent_category_id: $parentCategoryId }, orderBy: created, orderDirection: asc) {\n      ...categoryFields\n    }\n  }\n": typeof types.CategoriesDocument,
    "\n  query Topics($spaceId: String!, $categoryId: Int!, $limit: Int!, $skip: Int!) {\n    topics(first: $limit, skip: $skip, orderBy: created, orderDirection: desc, where: { space: $spaceId, category_id: $categoryId }) {\n      ...topicFields\n    }\n  }\n": typeof types.TopicsDocument,
    "\n  query Topic($id: String!) {\n    topic(id: $id) {\n      ...topicFields\n    }\n  }\n": typeof types.TopicDocument,
    "\n  query Votes($topic: String!, $voter: String!) {\n    votes(where: { topic: $topic, voter: $voter }) {\n      ...voteFields\n    }\n  }\n": typeof types.VotesDocument,
    "\n  query Roles($space: String!) {\n    roles(where: { space: $space, deleted: false }, orderBy: id, orderDirection: asc) {\n      ...roleFields\n    }\n  }\n": typeof types.RolesDocument,
    "\n  query UserRoles($user: String!) {\n    user(id: $user) {\n      roles {\n        role {\n          ...roleFields\n          deleted\n        }\n      }\n    }\n  }\n": typeof types.UserRolesDocument,
};
const documents: Documents = {
    "\n  fragment spaceFields on Space {\n    id\n    space_id\n    owner\n    vote_count\n    topic_count\n  }\n\n  fragment categoryFields on Category {\n    id\n    category_id\n    name\n    slug\n    description\n    parent_category_id\n    parent_category {\n      category_id\n      name\n      slug\n    }\n    topic_count\n  }\n\n  fragment postFields on Post {\n    id\n    body\n    author\n    scores_1\n    scores_2\n    scores_3\n    vote_count\n    pinned\n    hidden\n    created\n    topic_id\n    post_id\n    topic {\n      id\n    }\n  }\n\n  fragment topicFields on Topic {\n    id\n    title\n    body\n    discussion_url\n    author\n    post_count\n    vote_count\n    created\n    closed\n    topic_id\n    category {\n      category_id\n      name\n      slug\n    }\n    posts {\n      ...postFields\n    }\n  }\n\n  fragment voteFields on Vote {\n    id\n    voter\n    choice\n    created\n    topic_id\n    post_id\n    topic {\n      id\n    }\n    post {\n      id\n    }\n  }\n\n  fragment roleFields on Role {\n    id\n    space {\n      id\n      space_id\n    }\n    name\n    description\n    color\n    isAdmin\n  }\n": types.SpaceFieldsFragmentDoc,
    "\n  query Space($id: String!) {\n    space(id: $id) {\n      ...spaceFields\n    }\n  }\n": types.SpaceDocument,
    "\n  query Category($id: String!) {\n    category(id: $id) {\n      ...categoryFields\n    }\n  }\n": types.CategoryDocument,
    "\n  query Categories($spaceId: String!, $parentCategoryId: Int!) {\n    categories(where: { space: $spaceId, parent_category_id: $parentCategoryId }, orderBy: created, orderDirection: asc) {\n      ...categoryFields\n    }\n  }\n": types.CategoriesDocument,
    "\n  query Topics($spaceId: String!, $categoryId: Int!, $limit: Int!, $skip: Int!) {\n    topics(first: $limit, skip: $skip, orderBy: created, orderDirection: desc, where: { space: $spaceId, category_id: $categoryId }) {\n      ...topicFields\n    }\n  }\n": types.TopicsDocument,
    "\n  query Topic($id: String!) {\n    topic(id: $id) {\n      ...topicFields\n    }\n  }\n": types.TopicDocument,
    "\n  query Votes($topic: String!, $voter: String!) {\n    votes(where: { topic: $topic, voter: $voter }) {\n      ...voteFields\n    }\n  }\n": types.VotesDocument,
    "\n  query Roles($space: String!) {\n    roles(where: { space: $space, deleted: false }, orderBy: id, orderDirection: asc) {\n      ...roleFields\n    }\n  }\n": types.RolesDocument,
    "\n  query UserRoles($user: String!) {\n    user(id: $user) {\n      roles {\n        role {\n          ...roleFields\n          deleted\n        }\n      }\n    }\n  }\n": types.UserRolesDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment spaceFields on Space {\n    id\n    space_id\n    owner\n    vote_count\n    topic_count\n  }\n\n  fragment categoryFields on Category {\n    id\n    category_id\n    name\n    slug\n    description\n    parent_category_id\n    parent_category {\n      category_id\n      name\n      slug\n    }\n    topic_count\n  }\n\n  fragment postFields on Post {\n    id\n    body\n    author\n    scores_1\n    scores_2\n    scores_3\n    vote_count\n    pinned\n    hidden\n    created\n    topic_id\n    post_id\n    topic {\n      id\n    }\n  }\n\n  fragment topicFields on Topic {\n    id\n    title\n    body\n    discussion_url\n    author\n    post_count\n    vote_count\n    created\n    closed\n    topic_id\n    category {\n      category_id\n      name\n      slug\n    }\n    posts {\n      ...postFields\n    }\n  }\n\n  fragment voteFields on Vote {\n    id\n    voter\n    choice\n    created\n    topic_id\n    post_id\n    topic {\n      id\n    }\n    post {\n      id\n    }\n  }\n\n  fragment roleFields on Role {\n    id\n    space {\n      id\n      space_id\n    }\n    name\n    description\n    color\n    isAdmin\n  }\n"): (typeof documents)["\n  fragment spaceFields on Space {\n    id\n    space_id\n    owner\n    vote_count\n    topic_count\n  }\n\n  fragment categoryFields on Category {\n    id\n    category_id\n    name\n    slug\n    description\n    parent_category_id\n    parent_category {\n      category_id\n      name\n      slug\n    }\n    topic_count\n  }\n\n  fragment postFields on Post {\n    id\n    body\n    author\n    scores_1\n    scores_2\n    scores_3\n    vote_count\n    pinned\n    hidden\n    created\n    topic_id\n    post_id\n    topic {\n      id\n    }\n  }\n\n  fragment topicFields on Topic {\n    id\n    title\n    body\n    discussion_url\n    author\n    post_count\n    vote_count\n    created\n    closed\n    topic_id\n    category {\n      category_id\n      name\n      slug\n    }\n    posts {\n      ...postFields\n    }\n  }\n\n  fragment voteFields on Vote {\n    id\n    voter\n    choice\n    created\n    topic_id\n    post_id\n    topic {\n      id\n    }\n    post {\n      id\n    }\n  }\n\n  fragment roleFields on Role {\n    id\n    space {\n      id\n      space_id\n    }\n    name\n    description\n    color\n    isAdmin\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Space($id: String!) {\n    space(id: $id) {\n      ...spaceFields\n    }\n  }\n"): (typeof documents)["\n  query Space($id: String!) {\n    space(id: $id) {\n      ...spaceFields\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Category($id: String!) {\n    category(id: $id) {\n      ...categoryFields\n    }\n  }\n"): (typeof documents)["\n  query Category($id: String!) {\n    category(id: $id) {\n      ...categoryFields\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Categories($spaceId: String!, $parentCategoryId: Int!) {\n    categories(where: { space: $spaceId, parent_category_id: $parentCategoryId }, orderBy: created, orderDirection: asc) {\n      ...categoryFields\n    }\n  }\n"): (typeof documents)["\n  query Categories($spaceId: String!, $parentCategoryId: Int!) {\n    categories(where: { space: $spaceId, parent_category_id: $parentCategoryId }, orderBy: created, orderDirection: asc) {\n      ...categoryFields\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Topics($spaceId: String!, $categoryId: Int!, $limit: Int!, $skip: Int!) {\n    topics(first: $limit, skip: $skip, orderBy: created, orderDirection: desc, where: { space: $spaceId, category_id: $categoryId }) {\n      ...topicFields\n    }\n  }\n"): (typeof documents)["\n  query Topics($spaceId: String!, $categoryId: Int!, $limit: Int!, $skip: Int!) {\n    topics(first: $limit, skip: $skip, orderBy: created, orderDirection: desc, where: { space: $spaceId, category_id: $categoryId }) {\n      ...topicFields\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Topic($id: String!) {\n    topic(id: $id) {\n      ...topicFields\n    }\n  }\n"): (typeof documents)["\n  query Topic($id: String!) {\n    topic(id: $id) {\n      ...topicFields\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Votes($topic: String!, $voter: String!) {\n    votes(where: { topic: $topic, voter: $voter }) {\n      ...voteFields\n    }\n  }\n"): (typeof documents)["\n  query Votes($topic: String!, $voter: String!) {\n    votes(where: { topic: $topic, voter: $voter }) {\n      ...voteFields\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Roles($space: String!) {\n    roles(where: { space: $space, deleted: false }, orderBy: id, orderDirection: asc) {\n      ...roleFields\n    }\n  }\n"): (typeof documents)["\n  query Roles($space: String!) {\n    roles(where: { space: $space, deleted: false }, orderBy: id, orderDirection: asc) {\n      ...roleFields\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query UserRoles($user: String!) {\n    user(id: $user) {\n      roles {\n        role {\n          ...roleFields\n          deleted\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query UserRoles($user: String!) {\n    user(id: $user) {\n      roles {\n        role {\n          ...roleFields\n          deleted\n        }\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;