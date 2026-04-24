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
  BigDecimal: { input: string; output: string; }
  BigInt: { input: string; output: string; }
  Bytes: { input: string; output: string; }
  /** 8 bytes signed integer */
  Int8: { input: any; output: any; }
  /** A string representation of microseconds UNIX timestamp (16 digits) */
  Timestamp: { input: any; output: any; }
};

/** Indicates whether the current, partially filled bucket should be included in the response. Defaults to `exclude` */
export type Aggregation_Current =
  /** Exclude the current, partially filled bucket from the response */
  | 'exclude'
  /** Include the current, partially filled bucket in the response */
  | 'include';

export type Aggregation_Interval =
  | 'day'
  | 'hour';

export type AuctionDetail = {
  addressAuctioningToken: Scalars['Bytes']['output'];
  addressBiddingToken: Scalars['Bytes']['output'];
  allowListManager: Scalars['Bytes']['output'];
  allowListSigner: Scalars['Bytes']['output'];
  auctionId: Scalars['BigInt']['output'];
  chainId: Scalars['String']['output'];
  clearingPriceOrder: Maybe<Scalars['Bytes']['output']>;
  currentBiddingAmount: Scalars['BigInt']['output'];
  currentClearingOrderBuyAmount: Scalars['BigInt']['output'];
  currentClearingOrderSellAmount: Scalars['BigInt']['output'];
  currentClearingPrice: Scalars['BigDecimal']['output'];
  currentVolume: Scalars['BigDecimal']['output'];
  decimalsAuctioningToken: Scalars['BigInt']['output'];
  decimalsBiddingToken: Scalars['BigInt']['output'];
  endTimeTimestamp: Scalars['BigInt']['output'];
  exactOrder: Order;
  id: Scalars['ID']['output'];
  interestScore: Scalars['BigDecimal']['output'];
  isAtomicClosureAllowed: Scalars['Boolean']['output'];
  isPrivateAuction: Scalars['Boolean']['output'];
  minFundingThreshold: Scalars['BigInt']['output'];
  minimumBiddingAmountPerOrder: Scalars['BigInt']['output'];
  orderCancellationEndDate: Scalars['BigInt']['output'];
  orderCount: Scalars['Int']['output'];
  orders: Maybe<Array<Order>>;
  ordersWithoutClaimed: Maybe<Array<Order>>;
  startingTimeStamp: Scalars['BigInt']['output'];
  symbolAuctioningToken: Scalars['String']['output'];
  symbolBiddingToken: Scalars['String']['output'];
  usdAmountTraded: Scalars['BigDecimal']['output'];
  volumeClearingPriceOrder: Maybe<Scalars['BigInt']['output']>;
};


export type AuctionDetailOrdersArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Order_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Order_Filter>;
};


export type AuctionDetailOrdersWithoutClaimedArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Order_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Order_Filter>;
};

export type AuctionDetail_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addressAuctioningToken?: InputMaybe<Scalars['Bytes']['input']>;
  addressAuctioningToken_contains?: InputMaybe<Scalars['Bytes']['input']>;
  addressAuctioningToken_gt?: InputMaybe<Scalars['Bytes']['input']>;
  addressAuctioningToken_gte?: InputMaybe<Scalars['Bytes']['input']>;
  addressAuctioningToken_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addressAuctioningToken_lt?: InputMaybe<Scalars['Bytes']['input']>;
  addressAuctioningToken_lte?: InputMaybe<Scalars['Bytes']['input']>;
  addressAuctioningToken_not?: InputMaybe<Scalars['Bytes']['input']>;
  addressAuctioningToken_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  addressAuctioningToken_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addressBiddingToken?: InputMaybe<Scalars['Bytes']['input']>;
  addressBiddingToken_contains?: InputMaybe<Scalars['Bytes']['input']>;
  addressBiddingToken_gt?: InputMaybe<Scalars['Bytes']['input']>;
  addressBiddingToken_gte?: InputMaybe<Scalars['Bytes']['input']>;
  addressBiddingToken_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addressBiddingToken_lt?: InputMaybe<Scalars['Bytes']['input']>;
  addressBiddingToken_lte?: InputMaybe<Scalars['Bytes']['input']>;
  addressBiddingToken_not?: InputMaybe<Scalars['Bytes']['input']>;
  addressBiddingToken_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  addressBiddingToken_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  allowListManager?: InputMaybe<Scalars['Bytes']['input']>;
  allowListManager_contains?: InputMaybe<Scalars['Bytes']['input']>;
  allowListManager_gt?: InputMaybe<Scalars['Bytes']['input']>;
  allowListManager_gte?: InputMaybe<Scalars['Bytes']['input']>;
  allowListManager_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  allowListManager_lt?: InputMaybe<Scalars['Bytes']['input']>;
  allowListManager_lte?: InputMaybe<Scalars['Bytes']['input']>;
  allowListManager_not?: InputMaybe<Scalars['Bytes']['input']>;
  allowListManager_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  allowListManager_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  allowListSigner?: InputMaybe<Scalars['Bytes']['input']>;
  allowListSigner_contains?: InputMaybe<Scalars['Bytes']['input']>;
  allowListSigner_gt?: InputMaybe<Scalars['Bytes']['input']>;
  allowListSigner_gte?: InputMaybe<Scalars['Bytes']['input']>;
  allowListSigner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  allowListSigner_lt?: InputMaybe<Scalars['Bytes']['input']>;
  allowListSigner_lte?: InputMaybe<Scalars['Bytes']['input']>;
  allowListSigner_not?: InputMaybe<Scalars['Bytes']['input']>;
  allowListSigner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  allowListSigner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<AuctionDetail_Filter>>>;
  auctionId?: InputMaybe<Scalars['BigInt']['input']>;
  auctionId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  auctionId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  auctionId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  auctionId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  auctionId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  auctionId_not?: InputMaybe<Scalars['BigInt']['input']>;
  auctionId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  chainId?: InputMaybe<Scalars['String']['input']>;
  chainId_contains?: InputMaybe<Scalars['String']['input']>;
  chainId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  chainId_ends_with?: InputMaybe<Scalars['String']['input']>;
  chainId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  chainId_gt?: InputMaybe<Scalars['String']['input']>;
  chainId_gte?: InputMaybe<Scalars['String']['input']>;
  chainId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  chainId_lt?: InputMaybe<Scalars['String']['input']>;
  chainId_lte?: InputMaybe<Scalars['String']['input']>;
  chainId_not?: InputMaybe<Scalars['String']['input']>;
  chainId_not_contains?: InputMaybe<Scalars['String']['input']>;
  chainId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  chainId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  chainId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  chainId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  chainId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  chainId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  chainId_starts_with?: InputMaybe<Scalars['String']['input']>;
  chainId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  clearingPriceOrder?: InputMaybe<Scalars['Bytes']['input']>;
  clearingPriceOrder_contains?: InputMaybe<Scalars['Bytes']['input']>;
  clearingPriceOrder_gt?: InputMaybe<Scalars['Bytes']['input']>;
  clearingPriceOrder_gte?: InputMaybe<Scalars['Bytes']['input']>;
  clearingPriceOrder_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  clearingPriceOrder_lt?: InputMaybe<Scalars['Bytes']['input']>;
  clearingPriceOrder_lte?: InputMaybe<Scalars['Bytes']['input']>;
  clearingPriceOrder_not?: InputMaybe<Scalars['Bytes']['input']>;
  clearingPriceOrder_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  clearingPriceOrder_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  currentBiddingAmount?: InputMaybe<Scalars['BigInt']['input']>;
  currentBiddingAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  currentBiddingAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  currentBiddingAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  currentBiddingAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  currentBiddingAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  currentBiddingAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  currentBiddingAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  currentClearingOrderBuyAmount?: InputMaybe<Scalars['BigInt']['input']>;
  currentClearingOrderBuyAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  currentClearingOrderBuyAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  currentClearingOrderBuyAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  currentClearingOrderBuyAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  currentClearingOrderBuyAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  currentClearingOrderBuyAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  currentClearingOrderBuyAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  currentClearingOrderSellAmount?: InputMaybe<Scalars['BigInt']['input']>;
  currentClearingOrderSellAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  currentClearingOrderSellAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  currentClearingOrderSellAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  currentClearingOrderSellAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  currentClearingOrderSellAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  currentClearingOrderSellAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  currentClearingOrderSellAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  currentClearingPrice?: InputMaybe<Scalars['BigDecimal']['input']>;
  currentClearingPrice_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  currentClearingPrice_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  currentClearingPrice_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  currentClearingPrice_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  currentClearingPrice_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  currentClearingPrice_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  currentClearingPrice_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  currentVolume?: InputMaybe<Scalars['BigDecimal']['input']>;
  currentVolume_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  currentVolume_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  currentVolume_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  currentVolume_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  currentVolume_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  currentVolume_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  currentVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  decimalsAuctioningToken?: InputMaybe<Scalars['BigInt']['input']>;
  decimalsAuctioningToken_gt?: InputMaybe<Scalars['BigInt']['input']>;
  decimalsAuctioningToken_gte?: InputMaybe<Scalars['BigInt']['input']>;
  decimalsAuctioningToken_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  decimalsAuctioningToken_lt?: InputMaybe<Scalars['BigInt']['input']>;
  decimalsAuctioningToken_lte?: InputMaybe<Scalars['BigInt']['input']>;
  decimalsAuctioningToken_not?: InputMaybe<Scalars['BigInt']['input']>;
  decimalsAuctioningToken_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  decimalsBiddingToken?: InputMaybe<Scalars['BigInt']['input']>;
  decimalsBiddingToken_gt?: InputMaybe<Scalars['BigInt']['input']>;
  decimalsBiddingToken_gte?: InputMaybe<Scalars['BigInt']['input']>;
  decimalsBiddingToken_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  decimalsBiddingToken_lt?: InputMaybe<Scalars['BigInt']['input']>;
  decimalsBiddingToken_lte?: InputMaybe<Scalars['BigInt']['input']>;
  decimalsBiddingToken_not?: InputMaybe<Scalars['BigInt']['input']>;
  decimalsBiddingToken_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  endTimeTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  endTimeTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  endTimeTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  endTimeTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  endTimeTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  endTimeTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  endTimeTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  endTimeTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  exactOrder?: InputMaybe<Scalars['String']['input']>;
  exactOrder_?: InputMaybe<Order_Filter>;
  exactOrder_contains?: InputMaybe<Scalars['String']['input']>;
  exactOrder_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  exactOrder_ends_with?: InputMaybe<Scalars['String']['input']>;
  exactOrder_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  exactOrder_gt?: InputMaybe<Scalars['String']['input']>;
  exactOrder_gte?: InputMaybe<Scalars['String']['input']>;
  exactOrder_in?: InputMaybe<Array<Scalars['String']['input']>>;
  exactOrder_lt?: InputMaybe<Scalars['String']['input']>;
  exactOrder_lte?: InputMaybe<Scalars['String']['input']>;
  exactOrder_not?: InputMaybe<Scalars['String']['input']>;
  exactOrder_not_contains?: InputMaybe<Scalars['String']['input']>;
  exactOrder_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  exactOrder_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  exactOrder_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  exactOrder_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  exactOrder_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  exactOrder_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  exactOrder_starts_with?: InputMaybe<Scalars['String']['input']>;
  exactOrder_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  interestScore?: InputMaybe<Scalars['BigDecimal']['input']>;
  interestScore_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  interestScore_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  interestScore_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  interestScore_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  interestScore_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  interestScore_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  interestScore_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  isAtomicClosureAllowed?: InputMaybe<Scalars['Boolean']['input']>;
  isAtomicClosureAllowed_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isAtomicClosureAllowed_not?: InputMaybe<Scalars['Boolean']['input']>;
  isAtomicClosureAllowed_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isPrivateAuction?: InputMaybe<Scalars['Boolean']['input']>;
  isPrivateAuction_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isPrivateAuction_not?: InputMaybe<Scalars['Boolean']['input']>;
  isPrivateAuction_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  minFundingThreshold?: InputMaybe<Scalars['BigInt']['input']>;
  minFundingThreshold_gt?: InputMaybe<Scalars['BigInt']['input']>;
  minFundingThreshold_gte?: InputMaybe<Scalars['BigInt']['input']>;
  minFundingThreshold_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  minFundingThreshold_lt?: InputMaybe<Scalars['BigInt']['input']>;
  minFundingThreshold_lte?: InputMaybe<Scalars['BigInt']['input']>;
  minFundingThreshold_not?: InputMaybe<Scalars['BigInt']['input']>;
  minFundingThreshold_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  minimumBiddingAmountPerOrder?: InputMaybe<Scalars['BigInt']['input']>;
  minimumBiddingAmountPerOrder_gt?: InputMaybe<Scalars['BigInt']['input']>;
  minimumBiddingAmountPerOrder_gte?: InputMaybe<Scalars['BigInt']['input']>;
  minimumBiddingAmountPerOrder_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  minimumBiddingAmountPerOrder_lt?: InputMaybe<Scalars['BigInt']['input']>;
  minimumBiddingAmountPerOrder_lte?: InputMaybe<Scalars['BigInt']['input']>;
  minimumBiddingAmountPerOrder_not?: InputMaybe<Scalars['BigInt']['input']>;
  minimumBiddingAmountPerOrder_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<AuctionDetail_Filter>>>;
  orderCancellationEndDate?: InputMaybe<Scalars['BigInt']['input']>;
  orderCancellationEndDate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  orderCancellationEndDate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  orderCancellationEndDate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  orderCancellationEndDate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  orderCancellationEndDate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  orderCancellationEndDate_not?: InputMaybe<Scalars['BigInt']['input']>;
  orderCancellationEndDate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  orderCount?: InputMaybe<Scalars['Int']['input']>;
  orderCount_gt?: InputMaybe<Scalars['Int']['input']>;
  orderCount_gte?: InputMaybe<Scalars['Int']['input']>;
  orderCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  orderCount_lt?: InputMaybe<Scalars['Int']['input']>;
  orderCount_lte?: InputMaybe<Scalars['Int']['input']>;
  orderCount_not?: InputMaybe<Scalars['Int']['input']>;
  orderCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  orders?: InputMaybe<Array<Scalars['String']['input']>>;
  ordersWithoutClaimed?: InputMaybe<Array<Scalars['String']['input']>>;
  ordersWithoutClaimed_?: InputMaybe<Order_Filter>;
  ordersWithoutClaimed_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  ordersWithoutClaimed_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  ordersWithoutClaimed_not?: InputMaybe<Array<Scalars['String']['input']>>;
  ordersWithoutClaimed_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  ordersWithoutClaimed_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  orders_?: InputMaybe<Order_Filter>;
  orders_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  orders_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  orders_not?: InputMaybe<Array<Scalars['String']['input']>>;
  orders_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  orders_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  startingTimeStamp?: InputMaybe<Scalars['BigInt']['input']>;
  startingTimeStamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  startingTimeStamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  startingTimeStamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  startingTimeStamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  startingTimeStamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  startingTimeStamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  startingTimeStamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  symbolAuctioningToken?: InputMaybe<Scalars['String']['input']>;
  symbolAuctioningToken_contains?: InputMaybe<Scalars['String']['input']>;
  symbolAuctioningToken_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbolAuctioningToken_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbolAuctioningToken_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbolAuctioningToken_gt?: InputMaybe<Scalars['String']['input']>;
  symbolAuctioningToken_gte?: InputMaybe<Scalars['String']['input']>;
  symbolAuctioningToken_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbolAuctioningToken_lt?: InputMaybe<Scalars['String']['input']>;
  symbolAuctioningToken_lte?: InputMaybe<Scalars['String']['input']>;
  symbolAuctioningToken_not?: InputMaybe<Scalars['String']['input']>;
  symbolAuctioningToken_not_contains?: InputMaybe<Scalars['String']['input']>;
  symbolAuctioningToken_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbolAuctioningToken_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbolAuctioningToken_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbolAuctioningToken_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbolAuctioningToken_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbolAuctioningToken_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbolAuctioningToken_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbolAuctioningToken_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbolBiddingToken?: InputMaybe<Scalars['String']['input']>;
  symbolBiddingToken_contains?: InputMaybe<Scalars['String']['input']>;
  symbolBiddingToken_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbolBiddingToken_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbolBiddingToken_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbolBiddingToken_gt?: InputMaybe<Scalars['String']['input']>;
  symbolBiddingToken_gte?: InputMaybe<Scalars['String']['input']>;
  symbolBiddingToken_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbolBiddingToken_lt?: InputMaybe<Scalars['String']['input']>;
  symbolBiddingToken_lte?: InputMaybe<Scalars['String']['input']>;
  symbolBiddingToken_not?: InputMaybe<Scalars['String']['input']>;
  symbolBiddingToken_not_contains?: InputMaybe<Scalars['String']['input']>;
  symbolBiddingToken_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbolBiddingToken_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbolBiddingToken_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbolBiddingToken_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbolBiddingToken_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbolBiddingToken_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbolBiddingToken_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbolBiddingToken_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  usdAmountTraded?: InputMaybe<Scalars['BigDecimal']['input']>;
  usdAmountTraded_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  usdAmountTraded_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  usdAmountTraded_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  usdAmountTraded_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  usdAmountTraded_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  usdAmountTraded_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  usdAmountTraded_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeClearingPriceOrder?: InputMaybe<Scalars['BigInt']['input']>;
  volumeClearingPriceOrder_gt?: InputMaybe<Scalars['BigInt']['input']>;
  volumeClearingPriceOrder_gte?: InputMaybe<Scalars['BigInt']['input']>;
  volumeClearingPriceOrder_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volumeClearingPriceOrder_lt?: InputMaybe<Scalars['BigInt']['input']>;
  volumeClearingPriceOrder_lte?: InputMaybe<Scalars['BigInt']['input']>;
  volumeClearingPriceOrder_not?: InputMaybe<Scalars['BigInt']['input']>;
  volumeClearingPriceOrder_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export type AuctionDetail_OrderBy =
  | 'addressAuctioningToken'
  | 'addressBiddingToken'
  | 'allowListManager'
  | 'allowListSigner'
  | 'auctionId'
  | 'chainId'
  | 'clearingPriceOrder'
  | 'currentBiddingAmount'
  | 'currentClearingOrderBuyAmount'
  | 'currentClearingOrderSellAmount'
  | 'currentClearingPrice'
  | 'currentVolume'
  | 'decimalsAuctioningToken'
  | 'decimalsBiddingToken'
  | 'endTimeTimestamp'
  | 'exactOrder'
  | 'exactOrder__auctionId'
  | 'exactOrder__buyAmount'
  | 'exactOrder__id'
  | 'exactOrder__price'
  | 'exactOrder__sellAmount'
  | 'exactOrder__timestamp'
  | 'exactOrder__transactionId'
  | 'exactOrder__userAddress'
  | 'exactOrder__userId'
  | 'exactOrder__volume'
  | 'id'
  | 'interestScore'
  | 'isAtomicClosureAllowed'
  | 'isPrivateAuction'
  | 'minFundingThreshold'
  | 'minimumBiddingAmountPerOrder'
  | 'orderCancellationEndDate'
  | 'orderCount'
  | 'orders'
  | 'ordersWithoutClaimed'
  | 'startingTimeStamp'
  | 'symbolAuctioningToken'
  | 'symbolBiddingToken'
  | 'usdAmountTraded'
  | 'volumeClearingPriceOrder';

export type AuctionPriceHourData = {
  auction: AuctionDetail;
  biddingAmountTotal: Scalars['BigInt']['output'];
  close: Scalars['BigDecimal']['output'];
  high: Scalars['BigDecimal']['output'];
  id: Scalars['ID']['output'];
  low: Scalars['BigDecimal']['output'];
  open: Scalars['BigDecimal']['output'];
  startTimestamp: Scalars['Int']['output'];
  volumeTotal: Scalars['BigDecimal']['output'];
};

export type AuctionPriceHourData_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AuctionPriceHourData_Filter>>>;
  auction?: InputMaybe<Scalars['String']['input']>;
  auction_?: InputMaybe<AuctionDetail_Filter>;
  auction_contains?: InputMaybe<Scalars['String']['input']>;
  auction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  auction_ends_with?: InputMaybe<Scalars['String']['input']>;
  auction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  auction_gt?: InputMaybe<Scalars['String']['input']>;
  auction_gte?: InputMaybe<Scalars['String']['input']>;
  auction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  auction_lt?: InputMaybe<Scalars['String']['input']>;
  auction_lte?: InputMaybe<Scalars['String']['input']>;
  auction_not?: InputMaybe<Scalars['String']['input']>;
  auction_not_contains?: InputMaybe<Scalars['String']['input']>;
  auction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  auction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  auction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  auction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  auction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  auction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  auction_starts_with?: InputMaybe<Scalars['String']['input']>;
  auction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  biddingAmountTotal?: InputMaybe<Scalars['BigInt']['input']>;
  biddingAmountTotal_gt?: InputMaybe<Scalars['BigInt']['input']>;
  biddingAmountTotal_gte?: InputMaybe<Scalars['BigInt']['input']>;
  biddingAmountTotal_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  biddingAmountTotal_lt?: InputMaybe<Scalars['BigInt']['input']>;
  biddingAmountTotal_lte?: InputMaybe<Scalars['BigInt']['input']>;
  biddingAmountTotal_not?: InputMaybe<Scalars['BigInt']['input']>;
  biddingAmountTotal_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  close?: InputMaybe<Scalars['BigDecimal']['input']>;
  close_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  close_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  close_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  close_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  close_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  close_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  close_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  high?: InputMaybe<Scalars['BigDecimal']['input']>;
  high_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  high_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  high_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  high_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  high_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  high_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  high_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  low?: InputMaybe<Scalars['BigDecimal']['input']>;
  low_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  low_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  low_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  low_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  low_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  low_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  low_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  open?: InputMaybe<Scalars['BigDecimal']['input']>;
  open_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  open_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  open_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  open_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  open_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  open_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  open_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  or?: InputMaybe<Array<InputMaybe<AuctionPriceHourData_Filter>>>;
  startTimestamp?: InputMaybe<Scalars['Int']['input']>;
  startTimestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  startTimestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  startTimestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  startTimestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  startTimestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  startTimestamp_not?: InputMaybe<Scalars['Int']['input']>;
  startTimestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  volumeTotal?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeTotal_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeTotal_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeTotal_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeTotal_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeTotal_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeTotal_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeTotal_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
};

export type AuctionPriceHourData_OrderBy =
  | 'auction'
  | 'auction__addressAuctioningToken'
  | 'auction__addressBiddingToken'
  | 'auction__allowListManager'
  | 'auction__allowListSigner'
  | 'auction__auctionId'
  | 'auction__chainId'
  | 'auction__clearingPriceOrder'
  | 'auction__currentBiddingAmount'
  | 'auction__currentClearingOrderBuyAmount'
  | 'auction__currentClearingOrderSellAmount'
  | 'auction__currentClearingPrice'
  | 'auction__currentVolume'
  | 'auction__decimalsAuctioningToken'
  | 'auction__decimalsBiddingToken'
  | 'auction__endTimeTimestamp'
  | 'auction__id'
  | 'auction__interestScore'
  | 'auction__isAtomicClosureAllowed'
  | 'auction__isPrivateAuction'
  | 'auction__minFundingThreshold'
  | 'auction__minimumBiddingAmountPerOrder'
  | 'auction__orderCancellationEndDate'
  | 'auction__orderCount'
  | 'auction__startingTimeStamp'
  | 'auction__symbolAuctioningToken'
  | 'auction__symbolBiddingToken'
  | 'auction__usdAmountTraded'
  | 'auction__volumeClearingPriceOrder'
  | 'biddingAmountTotal'
  | 'close'
  | 'high'
  | 'id'
  | 'low'
  | 'open'
  | 'startTimestamp'
  | 'volumeTotal';

export type AuctionPriceLevel = {
  auction: AuctionDetail;
  bidCount: Scalars['Int']['output'];
  buyAmount: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  price: Scalars['BigDecimal']['output'];
  volume: Scalars['BigDecimal']['output'];
};

export type AuctionPriceLevel_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AuctionPriceLevel_Filter>>>;
  auction?: InputMaybe<Scalars['String']['input']>;
  auction_?: InputMaybe<AuctionDetail_Filter>;
  auction_contains?: InputMaybe<Scalars['String']['input']>;
  auction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  auction_ends_with?: InputMaybe<Scalars['String']['input']>;
  auction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  auction_gt?: InputMaybe<Scalars['String']['input']>;
  auction_gte?: InputMaybe<Scalars['String']['input']>;
  auction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  auction_lt?: InputMaybe<Scalars['String']['input']>;
  auction_lte?: InputMaybe<Scalars['String']['input']>;
  auction_not?: InputMaybe<Scalars['String']['input']>;
  auction_not_contains?: InputMaybe<Scalars['String']['input']>;
  auction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  auction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  auction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  auction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  auction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  auction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  auction_starts_with?: InputMaybe<Scalars['String']['input']>;
  auction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  bidCount?: InputMaybe<Scalars['Int']['input']>;
  bidCount_gt?: InputMaybe<Scalars['Int']['input']>;
  bidCount_gte?: InputMaybe<Scalars['Int']['input']>;
  bidCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  bidCount_lt?: InputMaybe<Scalars['Int']['input']>;
  bidCount_lte?: InputMaybe<Scalars['Int']['input']>;
  bidCount_not?: InputMaybe<Scalars['Int']['input']>;
  bidCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  buyAmount?: InputMaybe<Scalars['BigInt']['input']>;
  buyAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  buyAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  buyAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  buyAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  buyAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  buyAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  buyAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<AuctionPriceLevel_Filter>>>;
  price?: InputMaybe<Scalars['BigDecimal']['input']>;
  price_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  price_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  price_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  price_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  price_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  price_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  price_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volume?: InputMaybe<Scalars['BigDecimal']['input']>;
  volume_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volume_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volume_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volume_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volume_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volume_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  volume_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
};

export type AuctionPriceLevel_OrderBy =
  | 'auction'
  | 'auction__addressAuctioningToken'
  | 'auction__addressBiddingToken'
  | 'auction__allowListManager'
  | 'auction__allowListSigner'
  | 'auction__auctionId'
  | 'auction__chainId'
  | 'auction__clearingPriceOrder'
  | 'auction__currentBiddingAmount'
  | 'auction__currentClearingOrderBuyAmount'
  | 'auction__currentClearingOrderSellAmount'
  | 'auction__currentClearingPrice'
  | 'auction__currentVolume'
  | 'auction__decimalsAuctioningToken'
  | 'auction__decimalsBiddingToken'
  | 'auction__endTimeTimestamp'
  | 'auction__id'
  | 'auction__interestScore'
  | 'auction__isAtomicClosureAllowed'
  | 'auction__isPrivateAuction'
  | 'auction__minFundingThreshold'
  | 'auction__minimumBiddingAmountPerOrder'
  | 'auction__orderCancellationEndDate'
  | 'auction__orderCount'
  | 'auction__startingTimeStamp'
  | 'auction__symbolAuctioningToken'
  | 'auction__symbolBiddingToken'
  | 'auction__usdAmountTraded'
  | 'auction__volumeClearingPriceOrder'
  | 'bidCount'
  | 'buyAmount'
  | 'id'
  | 'price'
  | 'volume';

export type AuctionPriceMinuteData = {
  auction: AuctionDetail;
  biddingAmountTotal: Scalars['BigInt']['output'];
  close: Scalars['BigDecimal']['output'];
  high: Scalars['BigDecimal']['output'];
  id: Scalars['ID']['output'];
  low: Scalars['BigDecimal']['output'];
  open: Scalars['BigDecimal']['output'];
  startTimestamp: Scalars['Int']['output'];
  volumeTotal: Scalars['BigDecimal']['output'];
};

export type AuctionPriceMinuteData_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AuctionPriceMinuteData_Filter>>>;
  auction?: InputMaybe<Scalars['String']['input']>;
  auction_?: InputMaybe<AuctionDetail_Filter>;
  auction_contains?: InputMaybe<Scalars['String']['input']>;
  auction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  auction_ends_with?: InputMaybe<Scalars['String']['input']>;
  auction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  auction_gt?: InputMaybe<Scalars['String']['input']>;
  auction_gte?: InputMaybe<Scalars['String']['input']>;
  auction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  auction_lt?: InputMaybe<Scalars['String']['input']>;
  auction_lte?: InputMaybe<Scalars['String']['input']>;
  auction_not?: InputMaybe<Scalars['String']['input']>;
  auction_not_contains?: InputMaybe<Scalars['String']['input']>;
  auction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  auction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  auction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  auction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  auction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  auction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  auction_starts_with?: InputMaybe<Scalars['String']['input']>;
  auction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  biddingAmountTotal?: InputMaybe<Scalars['BigInt']['input']>;
  biddingAmountTotal_gt?: InputMaybe<Scalars['BigInt']['input']>;
  biddingAmountTotal_gte?: InputMaybe<Scalars['BigInt']['input']>;
  biddingAmountTotal_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  biddingAmountTotal_lt?: InputMaybe<Scalars['BigInt']['input']>;
  biddingAmountTotal_lte?: InputMaybe<Scalars['BigInt']['input']>;
  biddingAmountTotal_not?: InputMaybe<Scalars['BigInt']['input']>;
  biddingAmountTotal_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  close?: InputMaybe<Scalars['BigDecimal']['input']>;
  close_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  close_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  close_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  close_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  close_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  close_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  close_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  high?: InputMaybe<Scalars['BigDecimal']['input']>;
  high_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  high_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  high_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  high_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  high_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  high_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  high_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  low?: InputMaybe<Scalars['BigDecimal']['input']>;
  low_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  low_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  low_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  low_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  low_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  low_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  low_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  open?: InputMaybe<Scalars['BigDecimal']['input']>;
  open_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  open_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  open_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  open_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  open_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  open_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  open_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  or?: InputMaybe<Array<InputMaybe<AuctionPriceMinuteData_Filter>>>;
  startTimestamp?: InputMaybe<Scalars['Int']['input']>;
  startTimestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  startTimestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  startTimestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  startTimestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  startTimestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  startTimestamp_not?: InputMaybe<Scalars['Int']['input']>;
  startTimestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  volumeTotal?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeTotal_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeTotal_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeTotal_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeTotal_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeTotal_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeTotal_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeTotal_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
};

export type AuctionPriceMinuteData_OrderBy =
  | 'auction'
  | 'auction__addressAuctioningToken'
  | 'auction__addressBiddingToken'
  | 'auction__allowListManager'
  | 'auction__allowListSigner'
  | 'auction__auctionId'
  | 'auction__chainId'
  | 'auction__clearingPriceOrder'
  | 'auction__currentBiddingAmount'
  | 'auction__currentClearingOrderBuyAmount'
  | 'auction__currentClearingOrderSellAmount'
  | 'auction__currentClearingPrice'
  | 'auction__currentVolume'
  | 'auction__decimalsAuctioningToken'
  | 'auction__decimalsBiddingToken'
  | 'auction__endTimeTimestamp'
  | 'auction__id'
  | 'auction__interestScore'
  | 'auction__isAtomicClosureAllowed'
  | 'auction__isPrivateAuction'
  | 'auction__minFundingThreshold'
  | 'auction__minimumBiddingAmountPerOrder'
  | 'auction__orderCancellationEndDate'
  | 'auction__orderCount'
  | 'auction__startingTimeStamp'
  | 'auction__symbolAuctioningToken'
  | 'auction__symbolBiddingToken'
  | 'auction__usdAmountTraded'
  | 'auction__volumeClearingPriceOrder'
  | 'biddingAmountTotal'
  | 'close'
  | 'high'
  | 'id'
  | 'low'
  | 'open'
  | 'startTimestamp'
  | 'volumeTotal';

export type BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

export type Order = {
  auctionId: Scalars['BigInt']['output'];
  buyAmount: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  price: Scalars['BigDecimal']['output'];
  sellAmount: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionId: Scalars['Bytes']['output'];
  userAddress: Scalars['Bytes']['output'];
  userId: Scalars['BigInt']['output'];
  volume: Scalars['BigDecimal']['output'];
};

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type Order_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Order_Filter>>>;
  auctionId?: InputMaybe<Scalars['BigInt']['input']>;
  auctionId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  auctionId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  auctionId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  auctionId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  auctionId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  auctionId_not?: InputMaybe<Scalars['BigInt']['input']>;
  auctionId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  buyAmount?: InputMaybe<Scalars['BigInt']['input']>;
  buyAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  buyAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  buyAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  buyAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  buyAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  buyAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  buyAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Order_Filter>>>;
  price?: InputMaybe<Scalars['BigDecimal']['input']>;
  price_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  price_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  price_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  price_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  price_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  price_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  price_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  sellAmount?: InputMaybe<Scalars['BigInt']['input']>;
  sellAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  sellAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  sellAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  sellAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  sellAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  sellAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  sellAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionId?: InputMaybe<Scalars['Bytes']['input']>;
  transactionId_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionId_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionId_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionId_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionId_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionId_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionId_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionId_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionId_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  userAddress?: InputMaybe<Scalars['Bytes']['input']>;
  userAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
  userAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
  userAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
  userAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  userAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
  userAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
  userAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
  userAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  userAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  userId?: InputMaybe<Scalars['BigInt']['input']>;
  userId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  userId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  userId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  userId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  userId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  userId_not?: InputMaybe<Scalars['BigInt']['input']>;
  userId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volume?: InputMaybe<Scalars['BigDecimal']['input']>;
  volume_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volume_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volume_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volume_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volume_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volume_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  volume_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
};

export type Order_OrderBy =
  | 'auctionId'
  | 'buyAmount'
  | 'id'
  | 'price'
  | 'sellAmount'
  | 'timestamp'
  | 'transactionId'
  | 'userAddress'
  | 'userId'
  | 'volume';

export type Query = {
  /** Access to subgraph metadata */
  _meta: Maybe<_Meta_>;
  auctionDetail: Maybe<AuctionDetail>;
  auctionDetails: Array<AuctionDetail>;
  auctionPriceHourData: Maybe<AuctionPriceHourData>;
  auctionPriceHourDatas: Array<AuctionPriceHourData>;
  auctionPriceLevel: Maybe<AuctionPriceLevel>;
  auctionPriceLevels: Array<AuctionPriceLevel>;
  auctionPriceMinuteData: Maybe<AuctionPriceMinuteData>;
  auctionPriceMinuteDatas: Array<AuctionPriceMinuteData>;
  order: Maybe<Order>;
  orders: Array<Order>;
  user: Maybe<User>;
  users: Array<User>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type QueryAuctionDetailArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAuctionDetailsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AuctionDetail_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AuctionDetail_Filter>;
};


export type QueryAuctionPriceHourDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAuctionPriceHourDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AuctionPriceHourData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AuctionPriceHourData_Filter>;
};


export type QueryAuctionPriceLevelArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAuctionPriceLevelsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AuctionPriceLevel_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AuctionPriceLevel_Filter>;
};


export type QueryAuctionPriceMinuteDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAuctionPriceMinuteDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AuctionPriceMinuteData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AuctionPriceMinuteData_Filter>;
};


export type QueryOrderArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryOrdersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Order_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Order_Filter>;
};


export type QueryUserArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryUsersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<User_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<User_Filter>;
};

export type User = {
  address: Scalars['Bytes']['output'];
  auctions: Array<AuctionDetail>;
  id: Scalars['ID']['output'];
};


export type UserAuctionsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AuctionDetail_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AuctionDetail_Filter>;
};

export type User_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars['Bytes']['input']>;
  address_contains?: InputMaybe<Scalars['Bytes']['input']>;
  address_gt?: InputMaybe<Scalars['Bytes']['input']>;
  address_gte?: InputMaybe<Scalars['Bytes']['input']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  address_lt?: InputMaybe<Scalars['Bytes']['input']>;
  address_lte?: InputMaybe<Scalars['Bytes']['input']>;
  address_not?: InputMaybe<Scalars['Bytes']['input']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<User_Filter>>>;
  auctions?: InputMaybe<Array<Scalars['String']['input']>>;
  auctions_?: InputMaybe<AuctionDetail_Filter>;
  auctions_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  auctions_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  auctions_not?: InputMaybe<Array<Scalars['String']['input']>>;
  auctions_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  auctions_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<User_Filter>>>;
};

export type User_OrderBy =
  | 'address'
  | 'auctions'
  | 'id';

export type _Block_ = {
  /** The hash of the block */
  hash: Maybe<Scalars['Bytes']['output']>;
  /** The block number */
  number: Scalars['Int']['output'];
  /** The hash of the parent block */
  parentHash: Maybe<Scalars['Bytes']['output']>;
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp: Maybe<Scalars['Int']['output']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String']['output'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean']['output'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

export type AuctionDetailFragment = { id: string, addressAuctioningToken: string, addressBiddingToken: string, symbolAuctioningToken: string, symbolBiddingToken: string, decimalsAuctioningToken: string, decimalsBiddingToken: string, orderCancellationEndDate: string, endTimeTimestamp: string, startingTimeStamp: string, minimumBiddingAmountPerOrder: string, minFundingThreshold: string, currentBiddingAmount: string, currentClearingPrice: string, currentClearingOrderBuyAmount: string, currentClearingOrderSellAmount: string, clearingPriceOrder: string | null, volumeClearingPriceOrder: string | null, currentVolume: string, isAtomicClosureAllowed: boolean, isPrivateAuction: boolean, allowListSigner: string, orderCount: number, exactOrder: { sellAmount: string, price: string }, ordersWithoutClaimed: Array<{ id: string }> | null };

export type OrderFragment = { id: string, userId: string, sellAmount: string, buyAmount: string, userAddress: string, price: string, volume: string, timestamp: string, transactionId: string };

export type GetAuctionsQueryVariables = Exact<{
  first: Scalars['Int']['input'];
  skip: Scalars['Int']['input'];
}>;


export type GetAuctionsQuery = { auctionDetails: Array<{ id: string, addressAuctioningToken: string, addressBiddingToken: string, symbolAuctioningToken: string, symbolBiddingToken: string, decimalsAuctioningToken: string, decimalsBiddingToken: string, orderCancellationEndDate: string, endTimeTimestamp: string, startingTimeStamp: string, minimumBiddingAmountPerOrder: string, minFundingThreshold: string, currentBiddingAmount: string, currentClearingPrice: string, currentClearingOrderBuyAmount: string, currentClearingOrderSellAmount: string, clearingPriceOrder: string | null, volumeClearingPriceOrder: string | null, currentVolume: string, isAtomicClosureAllowed: boolean, isPrivateAuction: boolean, allowListSigner: string, orderCount: number, exactOrder: { sellAmount: string, price: string }, ordersWithoutClaimed: Array<{ id: string }> | null }> };

export type GetAuctionQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetAuctionQuery = { auctionDetail: { id: string, addressAuctioningToken: string, addressBiddingToken: string, symbolAuctioningToken: string, symbolBiddingToken: string, decimalsAuctioningToken: string, decimalsBiddingToken: string, orderCancellationEndDate: string, endTimeTimestamp: string, startingTimeStamp: string, minimumBiddingAmountPerOrder: string, minFundingThreshold: string, currentBiddingAmount: string, currentClearingPrice: string, currentClearingOrderBuyAmount: string, currentClearingOrderSellAmount: string, clearingPriceOrder: string | null, volumeClearingPriceOrder: string | null, currentVolume: string, isAtomicClosureAllowed: boolean, isPrivateAuction: boolean, allowListSigner: string, orderCount: number, exactOrder: { sellAmount: string, price: string }, ordersWithoutClaimed: Array<{ id: string }> | null } | null };

export type GetOrdersQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Order_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  orderFilter?: InputMaybe<Order_Filter>;
}>;


export type GetOrdersQuery = { auctionDetail: { orders: Array<{ id: string, userId: string, sellAmount: string, buyAmount: string, userAddress: string, price: string, volume: string, timestamp: string, transactionId: string }> | null } | null };

export type GetPreviousOrderQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  price?: InputMaybe<Scalars['BigDecimal']['input']>;
}>;


export type GetPreviousOrderQuery = { auctionDetail: { ordersWithoutClaimed: Array<{ id: string, userId: string, sellAmount: string, buyAmount: string, userAddress: string, price: string, volume: string, timestamp: string, transactionId: string }> | null } | null };

export type GetUnclaimedOrdersQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  orderFilter?: InputMaybe<Order_Filter>;
}>;


export type GetUnclaimedOrdersQuery = { auctionDetail: { ordersWithoutClaimed: Array<{ id: string }> | null } | null };

export type GetAuctionPriceMinuteDataQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AuctionPriceMinuteData_Filter>;
}>;


export type GetAuctionPriceMinuteDataQuery = { priceData: Array<{ startTimestamp: number, close: string }> };

export type GetAuctionPriceHourDataQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AuctionPriceHourData_Filter>;
}>;


export type GetAuctionPriceHourDataQuery = { priceData: Array<{ startTimestamp: number, close: string }> };

export type GetAuctionPriceLevelsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AuctionPriceLevel_Filter>;
}>;


export type GetAuctionPriceLevelsQuery = { auctionPriceLevels: Array<{ price: string, volume: string, buyAmount: string }> };

export const AuctionDetailFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"auctionDetail"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AuctionDetail"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"addressAuctioningToken"}},{"kind":"Field","name":{"kind":"Name","value":"addressBiddingToken"}},{"kind":"Field","name":{"kind":"Name","value":"symbolAuctioningToken"}},{"kind":"Field","name":{"kind":"Name","value":"symbolBiddingToken"}},{"kind":"Field","name":{"kind":"Name","value":"decimalsAuctioningToken"}},{"kind":"Field","name":{"kind":"Name","value":"decimalsBiddingToken"}},{"kind":"Field","name":{"kind":"Name","value":"orderCancellationEndDate"}},{"kind":"Field","name":{"kind":"Name","value":"endTimeTimestamp"}},{"kind":"Field","name":{"kind":"Name","value":"startingTimeStamp"}},{"kind":"Field","name":{"kind":"Name","value":"minimumBiddingAmountPerOrder"}},{"kind":"Field","name":{"kind":"Name","value":"minFundingThreshold"}},{"kind":"Field","name":{"kind":"Name","value":"currentBiddingAmount"}},{"kind":"Field","name":{"kind":"Name","value":"currentClearingPrice"}},{"kind":"Field","name":{"kind":"Name","value":"currentClearingOrderBuyAmount"}},{"kind":"Field","name":{"kind":"Name","value":"currentClearingOrderSellAmount"}},{"kind":"Field","name":{"kind":"Name","value":"clearingPriceOrder"}},{"kind":"Field","name":{"kind":"Name","value":"volumeClearingPriceOrder"}},{"kind":"Field","name":{"kind":"Name","value":"currentVolume"}},{"kind":"Field","name":{"kind":"Name","value":"isAtomicClosureAllowed"}},{"kind":"Field","name":{"kind":"Name","value":"isPrivateAuction"}},{"kind":"Field","name":{"kind":"Name","value":"allowListSigner"}},{"kind":"Field","name":{"kind":"Name","value":"orderCount"}},{"kind":"Field","name":{"kind":"Name","value":"exactOrder"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sellAmount"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ordersWithoutClaimed"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<AuctionDetailFragment, unknown>;
export const OrderFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"order"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Order"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"sellAmount"}},{"kind":"Field","name":{"kind":"Name","value":"buyAmount"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"userAddress"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"volume"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"transactionId"}}]}}]} as unknown as DocumentNode<OrderFragment, unknown>;
export const GetAuctionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAuctions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"auctionDetails"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"startingTimeStamp"}},{"kind":"Argument","name":{"kind":"Name","value":"orderDirection"},"value":{"kind":"EnumValue","value":"desc"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"auctionDetail"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"auctionDetail"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AuctionDetail"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"addressAuctioningToken"}},{"kind":"Field","name":{"kind":"Name","value":"addressBiddingToken"}},{"kind":"Field","name":{"kind":"Name","value":"symbolAuctioningToken"}},{"kind":"Field","name":{"kind":"Name","value":"symbolBiddingToken"}},{"kind":"Field","name":{"kind":"Name","value":"decimalsAuctioningToken"}},{"kind":"Field","name":{"kind":"Name","value":"decimalsBiddingToken"}},{"kind":"Field","name":{"kind":"Name","value":"orderCancellationEndDate"}},{"kind":"Field","name":{"kind":"Name","value":"endTimeTimestamp"}},{"kind":"Field","name":{"kind":"Name","value":"startingTimeStamp"}},{"kind":"Field","name":{"kind":"Name","value":"minimumBiddingAmountPerOrder"}},{"kind":"Field","name":{"kind":"Name","value":"minFundingThreshold"}},{"kind":"Field","name":{"kind":"Name","value":"currentBiddingAmount"}},{"kind":"Field","name":{"kind":"Name","value":"currentClearingPrice"}},{"kind":"Field","name":{"kind":"Name","value":"currentClearingOrderBuyAmount"}},{"kind":"Field","name":{"kind":"Name","value":"currentClearingOrderSellAmount"}},{"kind":"Field","name":{"kind":"Name","value":"clearingPriceOrder"}},{"kind":"Field","name":{"kind":"Name","value":"volumeClearingPriceOrder"}},{"kind":"Field","name":{"kind":"Name","value":"currentVolume"}},{"kind":"Field","name":{"kind":"Name","value":"isAtomicClosureAllowed"}},{"kind":"Field","name":{"kind":"Name","value":"isPrivateAuction"}},{"kind":"Field","name":{"kind":"Name","value":"allowListSigner"}},{"kind":"Field","name":{"kind":"Name","value":"orderCount"}},{"kind":"Field","name":{"kind":"Name","value":"exactOrder"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sellAmount"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ordersWithoutClaimed"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<GetAuctionsQuery, GetAuctionsQueryVariables>;
export const GetAuctionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAuction"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"auctionDetail"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"auctionDetail"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"auctionDetail"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AuctionDetail"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"addressAuctioningToken"}},{"kind":"Field","name":{"kind":"Name","value":"addressBiddingToken"}},{"kind":"Field","name":{"kind":"Name","value":"symbolAuctioningToken"}},{"kind":"Field","name":{"kind":"Name","value":"symbolBiddingToken"}},{"kind":"Field","name":{"kind":"Name","value":"decimalsAuctioningToken"}},{"kind":"Field","name":{"kind":"Name","value":"decimalsBiddingToken"}},{"kind":"Field","name":{"kind":"Name","value":"orderCancellationEndDate"}},{"kind":"Field","name":{"kind":"Name","value":"endTimeTimestamp"}},{"kind":"Field","name":{"kind":"Name","value":"startingTimeStamp"}},{"kind":"Field","name":{"kind":"Name","value":"minimumBiddingAmountPerOrder"}},{"kind":"Field","name":{"kind":"Name","value":"minFundingThreshold"}},{"kind":"Field","name":{"kind":"Name","value":"currentBiddingAmount"}},{"kind":"Field","name":{"kind":"Name","value":"currentClearingPrice"}},{"kind":"Field","name":{"kind":"Name","value":"currentClearingOrderBuyAmount"}},{"kind":"Field","name":{"kind":"Name","value":"currentClearingOrderSellAmount"}},{"kind":"Field","name":{"kind":"Name","value":"clearingPriceOrder"}},{"kind":"Field","name":{"kind":"Name","value":"volumeClearingPriceOrder"}},{"kind":"Field","name":{"kind":"Name","value":"currentVolume"}},{"kind":"Field","name":{"kind":"Name","value":"isAtomicClosureAllowed"}},{"kind":"Field","name":{"kind":"Name","value":"isPrivateAuction"}},{"kind":"Field","name":{"kind":"Name","value":"allowListSigner"}},{"kind":"Field","name":{"kind":"Name","value":"orderCount"}},{"kind":"Field","name":{"kind":"Name","value":"exactOrder"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sellAmount"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ordersWithoutClaimed"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<GetAuctionQuery, GetAuctionQueryVariables>;
export const GetOrdersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetOrders"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Order_orderBy"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderDirection"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderDirection"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderFilter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Order_filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"auctionDetail"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"orders"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderDirection"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderDirection"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"order"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"order"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Order"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"sellAmount"}},{"kind":"Field","name":{"kind":"Name","value":"buyAmount"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"userAddress"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"volume"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"transactionId"}}]}}]} as unknown as DocumentNode<GetOrdersQuery, GetOrdersQueryVariables>;
export const GetPreviousOrderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPreviousOrder"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"price"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"BigDecimal"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"auctionDetail"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ordersWithoutClaimed"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"price"}},{"kind":"Argument","name":{"kind":"Name","value":"orderDirection"},"value":{"kind":"EnumValue","value":"asc"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"price_gt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"price"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"order"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"order"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Order"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"sellAmount"}},{"kind":"Field","name":{"kind":"Name","value":"buyAmount"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"userAddress"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"volume"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"transactionId"}}]}}]} as unknown as DocumentNode<GetPreviousOrderQuery, GetPreviousOrderQueryVariables>;
export const GetUnclaimedOrdersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUnclaimedOrders"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderFilter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Order_filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"auctionDetail"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ordersWithoutClaimed"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<GetUnclaimedOrdersQuery, GetUnclaimedOrdersQueryVariables>;
export const GetAuctionPriceMinuteDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAuctionPriceMinuteData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"AuctionPriceMinuteData_filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"priceData"},"name":{"kind":"Name","value":"auctionPriceMinuteDatas"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"startTimestamp"}},{"kind":"Argument","name":{"kind":"Name","value":"orderDirection"},"value":{"kind":"EnumValue","value":"asc"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startTimestamp"}},{"kind":"Field","name":{"kind":"Name","value":"close"}}]}}]}}]} as unknown as DocumentNode<GetAuctionPriceMinuteDataQuery, GetAuctionPriceMinuteDataQueryVariables>;
export const GetAuctionPriceHourDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAuctionPriceHourData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"AuctionPriceHourData_filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"priceData"},"name":{"kind":"Name","value":"auctionPriceHourDatas"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"startTimestamp"}},{"kind":"Argument","name":{"kind":"Name","value":"orderDirection"},"value":{"kind":"EnumValue","value":"asc"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startTimestamp"}},{"kind":"Field","name":{"kind":"Name","value":"close"}}]}}]}}]} as unknown as DocumentNode<GetAuctionPriceHourDataQuery, GetAuctionPriceHourDataQueryVariables>;
export const GetAuctionPriceLevelsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAuctionPriceLevels"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"AuctionPriceLevel_filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"auctionPriceLevels"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"price"}},{"kind":"Argument","name":{"kind":"Name","value":"orderDirection"},"value":{"kind":"EnumValue","value":"desc"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"volume"}},{"kind":"Field","name":{"kind":"Name","value":"buyAmount"}}]}}]}}]} as unknown as DocumentNode<GetAuctionPriceLevelsQuery, GetAuctionPriceLevelsQueryVariables>;