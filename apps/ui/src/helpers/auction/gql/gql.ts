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
    "\n  fragment auctionDetail on AuctionDetail {\n    id\n    addressAuctioningToken\n    addressBiddingToken\n    symbolAuctioningToken\n    symbolBiddingToken\n    decimalsAuctioningToken\n    decimalsBiddingToken\n    orderCancellationEndDate\n    endTimeTimestamp\n    startingTimeStamp\n    minimumBiddingAmountPerOrder\n    minFundingThreshold\n    currentBiddingAmount\n    currentClearingPrice\n    currentClearingOrderBuyAmount\n    currentClearingOrderSellAmount\n    clearingPriceOrder\n    volumeClearingPriceOrder\n    currentVolume\n    isAtomicClosureAllowed\n    isPrivateAuction\n    allowListSigner\n    orderCount\n    exactOrder {\n      sellAmount\n      price\n    }\n    ordersWithoutClaimed {\n      id\n    }\n  }\n": typeof types.AuctionDetailFragmentDoc,
    "\n  fragment order on Order {\n    id\n    userId\n    sellAmount\n    buyAmount\n    userId\n    userAddress\n    price\n    volume\n    timestamp\n    transactionId\n  }\n": typeof types.OrderFragmentDoc,
    "\n  query GetAuctions($first: Int!, $skip: Int!) {\n    auctionDetails(first: $first, skip: $skip, orderBy: startingTimeStamp, orderDirection: desc) {\n      ...auctionDetail\n    }\n  }\n": typeof types.GetAuctionsDocument,
    "\n  query GetAuction($id: ID!) {\n    auctionDetail(id: $id) {\n      ...auctionDetail\n    }\n  }\n": typeof types.GetAuctionDocument,
    "\n  query GetOrders($id: ID!, $skip: Int, $first: Int, $orderBy: Order_orderBy, $orderDirection: OrderDirection, $orderFilter: Order_filter) {\n    auctionDetail(id: $id) {\n      orders(orderBy: $orderBy, orderDirection: $orderDirection, skip: $skip, first: $first, where: $orderFilter) {\n        ...order\n      }\n    }\n  }\n": typeof types.GetOrdersDocument,
    "\n  query GetPreviousOrder($id: ID!, $price: BigDecimal) {\n    auctionDetail(id: $id) {\n      ordersWithoutClaimed(orderBy: price, orderDirection: asc, where: {price_gt: $price}) {\n        ...order\n      }\n    }\n  }\n": typeof types.GetPreviousOrderDocument,
    "\n  query GetUnclaimedOrders($id: ID!, $orderFilter: Order_filter) {\n    auctionDetail(id: $id) {\n      ordersWithoutClaimed(where: $orderFilter) {\n        id\n      }\n    }\n  }\n": typeof types.GetUnclaimedOrdersDocument,
    "\n  query GetAuctionPriceMinuteData($first: Int, $skip: Int, $where: AuctionPriceMinuteData_filter) {\n    priceData: auctionPriceMinuteDatas(\n      first: $first\n      skip: $skip\n      orderBy: startTimestamp\n      orderDirection: asc\n      where: $where\n    ) {\n      startTimestamp\n      close\n    }\n  }\n": typeof types.GetAuctionPriceMinuteDataDocument,
    "\n  query GetAuctionPriceHourData($first: Int, $skip: Int, $where: AuctionPriceHourData_filter) {\n    priceData: auctionPriceHourDatas(\n      first: $first\n      skip: $skip\n      orderBy: startTimestamp\n      orderDirection: asc\n      where: $where\n    ) {\n      startTimestamp\n      close\n    }\n  }\n": typeof types.GetAuctionPriceHourDataDocument,
    "\n  query GetAuctionPriceLevels($first: Int, $skip: Int, $where: AuctionPriceLevel_filter) {\n    auctionPriceLevels(\n      first: $first\n      skip: $skip\n      orderBy: price\n      orderDirection: desc\n      where: $where\n    ) {\n      price\n      volume\n      buyAmount\n    }\n  }\n": typeof types.GetAuctionPriceLevelsDocument,
};
const documents: Documents = {
    "\n  fragment auctionDetail on AuctionDetail {\n    id\n    addressAuctioningToken\n    addressBiddingToken\n    symbolAuctioningToken\n    symbolBiddingToken\n    decimalsAuctioningToken\n    decimalsBiddingToken\n    orderCancellationEndDate\n    endTimeTimestamp\n    startingTimeStamp\n    minimumBiddingAmountPerOrder\n    minFundingThreshold\n    currentBiddingAmount\n    currentClearingPrice\n    currentClearingOrderBuyAmount\n    currentClearingOrderSellAmount\n    clearingPriceOrder\n    volumeClearingPriceOrder\n    currentVolume\n    isAtomicClosureAllowed\n    isPrivateAuction\n    allowListSigner\n    orderCount\n    exactOrder {\n      sellAmount\n      price\n    }\n    ordersWithoutClaimed {\n      id\n    }\n  }\n": types.AuctionDetailFragmentDoc,
    "\n  fragment order on Order {\n    id\n    userId\n    sellAmount\n    buyAmount\n    userId\n    userAddress\n    price\n    volume\n    timestamp\n    transactionId\n  }\n": types.OrderFragmentDoc,
    "\n  query GetAuctions($first: Int!, $skip: Int!) {\n    auctionDetails(first: $first, skip: $skip, orderBy: startingTimeStamp, orderDirection: desc) {\n      ...auctionDetail\n    }\n  }\n": types.GetAuctionsDocument,
    "\n  query GetAuction($id: ID!) {\n    auctionDetail(id: $id) {\n      ...auctionDetail\n    }\n  }\n": types.GetAuctionDocument,
    "\n  query GetOrders($id: ID!, $skip: Int, $first: Int, $orderBy: Order_orderBy, $orderDirection: OrderDirection, $orderFilter: Order_filter) {\n    auctionDetail(id: $id) {\n      orders(orderBy: $orderBy, orderDirection: $orderDirection, skip: $skip, first: $first, where: $orderFilter) {\n        ...order\n      }\n    }\n  }\n": types.GetOrdersDocument,
    "\n  query GetPreviousOrder($id: ID!, $price: BigDecimal) {\n    auctionDetail(id: $id) {\n      ordersWithoutClaimed(orderBy: price, orderDirection: asc, where: {price_gt: $price}) {\n        ...order\n      }\n    }\n  }\n": types.GetPreviousOrderDocument,
    "\n  query GetUnclaimedOrders($id: ID!, $orderFilter: Order_filter) {\n    auctionDetail(id: $id) {\n      ordersWithoutClaimed(where: $orderFilter) {\n        id\n      }\n    }\n  }\n": types.GetUnclaimedOrdersDocument,
    "\n  query GetAuctionPriceMinuteData($first: Int, $skip: Int, $where: AuctionPriceMinuteData_filter) {\n    priceData: auctionPriceMinuteDatas(\n      first: $first\n      skip: $skip\n      orderBy: startTimestamp\n      orderDirection: asc\n      where: $where\n    ) {\n      startTimestamp\n      close\n    }\n  }\n": types.GetAuctionPriceMinuteDataDocument,
    "\n  query GetAuctionPriceHourData($first: Int, $skip: Int, $where: AuctionPriceHourData_filter) {\n    priceData: auctionPriceHourDatas(\n      first: $first\n      skip: $skip\n      orderBy: startTimestamp\n      orderDirection: asc\n      where: $where\n    ) {\n      startTimestamp\n      close\n    }\n  }\n": types.GetAuctionPriceHourDataDocument,
    "\n  query GetAuctionPriceLevels($first: Int, $skip: Int, $where: AuctionPriceLevel_filter) {\n    auctionPriceLevels(\n      first: $first\n      skip: $skip\n      orderBy: price\n      orderDirection: desc\n      where: $where\n    ) {\n      price\n      volume\n      buyAmount\n    }\n  }\n": types.GetAuctionPriceLevelsDocument,
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
export function gql(source: "\n  fragment auctionDetail on AuctionDetail {\n    id\n    addressAuctioningToken\n    addressBiddingToken\n    symbolAuctioningToken\n    symbolBiddingToken\n    decimalsAuctioningToken\n    decimalsBiddingToken\n    orderCancellationEndDate\n    endTimeTimestamp\n    startingTimeStamp\n    minimumBiddingAmountPerOrder\n    minFundingThreshold\n    currentBiddingAmount\n    currentClearingPrice\n    currentClearingOrderBuyAmount\n    currentClearingOrderSellAmount\n    clearingPriceOrder\n    volumeClearingPriceOrder\n    currentVolume\n    isAtomicClosureAllowed\n    isPrivateAuction\n    allowListSigner\n    orderCount\n    exactOrder {\n      sellAmount\n      price\n    }\n    ordersWithoutClaimed {\n      id\n    }\n  }\n"): (typeof documents)["\n  fragment auctionDetail on AuctionDetail {\n    id\n    addressAuctioningToken\n    addressBiddingToken\n    symbolAuctioningToken\n    symbolBiddingToken\n    decimalsAuctioningToken\n    decimalsBiddingToken\n    orderCancellationEndDate\n    endTimeTimestamp\n    startingTimeStamp\n    minimumBiddingAmountPerOrder\n    minFundingThreshold\n    currentBiddingAmount\n    currentClearingPrice\n    currentClearingOrderBuyAmount\n    currentClearingOrderSellAmount\n    clearingPriceOrder\n    volumeClearingPriceOrder\n    currentVolume\n    isAtomicClosureAllowed\n    isPrivateAuction\n    allowListSigner\n    orderCount\n    exactOrder {\n      sellAmount\n      price\n    }\n    ordersWithoutClaimed {\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment order on Order {\n    id\n    userId\n    sellAmount\n    buyAmount\n    userId\n    userAddress\n    price\n    volume\n    timestamp\n    transactionId\n  }\n"): (typeof documents)["\n  fragment order on Order {\n    id\n    userId\n    sellAmount\n    buyAmount\n    userId\n    userAddress\n    price\n    volume\n    timestamp\n    transactionId\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetAuctions($first: Int!, $skip: Int!) {\n    auctionDetails(first: $first, skip: $skip, orderBy: startingTimeStamp, orderDirection: desc) {\n      ...auctionDetail\n    }\n  }\n"): (typeof documents)["\n  query GetAuctions($first: Int!, $skip: Int!) {\n    auctionDetails(first: $first, skip: $skip, orderBy: startingTimeStamp, orderDirection: desc) {\n      ...auctionDetail\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetAuction($id: ID!) {\n    auctionDetail(id: $id) {\n      ...auctionDetail\n    }\n  }\n"): (typeof documents)["\n  query GetAuction($id: ID!) {\n    auctionDetail(id: $id) {\n      ...auctionDetail\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetOrders($id: ID!, $skip: Int, $first: Int, $orderBy: Order_orderBy, $orderDirection: OrderDirection, $orderFilter: Order_filter) {\n    auctionDetail(id: $id) {\n      orders(orderBy: $orderBy, orderDirection: $orderDirection, skip: $skip, first: $first, where: $orderFilter) {\n        ...order\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetOrders($id: ID!, $skip: Int, $first: Int, $orderBy: Order_orderBy, $orderDirection: OrderDirection, $orderFilter: Order_filter) {\n    auctionDetail(id: $id) {\n      orders(orderBy: $orderBy, orderDirection: $orderDirection, skip: $skip, first: $first, where: $orderFilter) {\n        ...order\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetPreviousOrder($id: ID!, $price: BigDecimal) {\n    auctionDetail(id: $id) {\n      ordersWithoutClaimed(orderBy: price, orderDirection: asc, where: {price_gt: $price}) {\n        ...order\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetPreviousOrder($id: ID!, $price: BigDecimal) {\n    auctionDetail(id: $id) {\n      ordersWithoutClaimed(orderBy: price, orderDirection: asc, where: {price_gt: $price}) {\n        ...order\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetUnclaimedOrders($id: ID!, $orderFilter: Order_filter) {\n    auctionDetail(id: $id) {\n      ordersWithoutClaimed(where: $orderFilter) {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetUnclaimedOrders($id: ID!, $orderFilter: Order_filter) {\n    auctionDetail(id: $id) {\n      ordersWithoutClaimed(where: $orderFilter) {\n        id\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetAuctionPriceMinuteData($first: Int, $skip: Int, $where: AuctionPriceMinuteData_filter) {\n    priceData: auctionPriceMinuteDatas(\n      first: $first\n      skip: $skip\n      orderBy: startTimestamp\n      orderDirection: asc\n      where: $where\n    ) {\n      startTimestamp\n      close\n    }\n  }\n"): (typeof documents)["\n  query GetAuctionPriceMinuteData($first: Int, $skip: Int, $where: AuctionPriceMinuteData_filter) {\n    priceData: auctionPriceMinuteDatas(\n      first: $first\n      skip: $skip\n      orderBy: startTimestamp\n      orderDirection: asc\n      where: $where\n    ) {\n      startTimestamp\n      close\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetAuctionPriceHourData($first: Int, $skip: Int, $where: AuctionPriceHourData_filter) {\n    priceData: auctionPriceHourDatas(\n      first: $first\n      skip: $skip\n      orderBy: startTimestamp\n      orderDirection: asc\n      where: $where\n    ) {\n      startTimestamp\n      close\n    }\n  }\n"): (typeof documents)["\n  query GetAuctionPriceHourData($first: Int, $skip: Int, $where: AuctionPriceHourData_filter) {\n    priceData: auctionPriceHourDatas(\n      first: $first\n      skip: $skip\n      orderBy: startTimestamp\n      orderDirection: asc\n      where: $where\n    ) {\n      startTimestamp\n      close\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetAuctionPriceLevels($first: Int, $skip: Int, $where: AuctionPriceLevel_filter) {\n    auctionPriceLevels(\n      first: $first\n      skip: $skip\n      orderBy: price\n      orderDirection: desc\n      where: $where\n    ) {\n      price\n      volume\n      buyAmount\n    }\n  }\n"): (typeof documents)["\n  query GetAuctionPriceLevels($first: Int, $skip: Int, $where: AuctionPriceLevel_filter) {\n    auctionPriceLevels(\n      first: $first\n      skip: $skip\n      orderBy: price\n      orderDirection: desc\n      where: $where\n    ) {\n      price\n      volume\n      buyAmount\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;