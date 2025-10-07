/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export enum TypeEnum {
  CASH = "CASH",
  NOCASH = "NOCASH",
}

export enum Type {
  CLASS = "CLASS",
  PROPERTY = "PROPERTY",
  PARAMETER = "PARAMETER",
  RETURN_VALUE = "RETURN_VALUE",
}

export enum TradeTypeEnum {
  JSAPI = "JSAPI",
  NATIVE = "NATIVE",
  APP = "APP",
  MICROPAY = "MICROPAY",
  MWEB = "MWEB",
  FACEPAY = "FACEPAY",
}

export enum TradeStateEnum {
  SUCCESS = "SUCCESS",
  REFUND = "REFUND",
  NOTPAY = "NOTPAY",
  CLOSED = "CLOSED",
  REVOKED = "REVOKED",
  USERPAYING = "USERPAYING",
  PAYERROR = "PAYERROR",
  ACCEPT = "ACCEPT",
}

export enum ScopeEnum {
  GLOBAL = "GLOBAL",
  SINGLE = "SINGLE",
}

export enum E_TRANSACTION_TYPES {
  CREDIT = "CREDIT",
  DEBIT = "DEBIT",
}

export enum E_TRANSACTION_KIND {
  ADDED_FUNDS = "ADDED_FUNDS",
  BALANCE_TRANSFER = "BALANCE_TRANSFER",
  CONTRIBUTION = "CONTRIBUTION",
  EXPENSE = "EXPENSE",
  HOST_FEE = "HOST_FEE",
  HOST_FEE_SHARE = "HOST_FEE_SHARE",
  HOST_FEE_SHARE_DEBT = "HOST_FEE_SHARE_DEBT",
  PAYMENT_PROCESSOR_COVER = "PAYMENT_PROCESSOR_COVER",
  PAYMENT_PROCESSOR_DISPUTE_FEE = "PAYMENT_PROCESSOR_DISPUTE_FEE",
  PAYMENT_PROCESSOR_FEE = "PAYMENT_PROCESSOR_FEE",
  PLATFORM_FEE = "PLATFORM_FEE",
  PLATFORM_TIP = "PLATFORM_TIP",
  PLATFORM_TIP_DEBT = "PLATFORM_TIP_DEBT",
  PREPAID_PAYMENT_METHOD = "PREPAID_PAYMENT_METHOD",
  TAX = "TAX",
}

export enum E_TIER_TYPE {
  GENERIC = "GENERIC",
  MEMBERSHIP = "MEMBERSHIP",
  DONATION = "DONATION",
  PRODUCT = "PRODUCT",
  SERVICE = "SERVICE",
}

export enum E_SEX {
  WOMAN = "WOMAN",
  MAN = "MAN",
}

export enum E_PAYMENT_METHOD {
  WE_CHAT_PAY = "WE_CHAT_PAY",
  ALI_PAY = "ALI_PAY",
  UNION_PAY = "UNION_PAY",
}

export enum E_ORGANIZATION_TYPE {
  FISCAL_HOST = "FISCAL_HOST",
  COMMUNITY = "COMMUNITY",
  EVENT = "EVENT",
  ORGANIZATION = "ORGANIZATION",
  BOT = "BOT",
  PROJECT = "PROJECT",
  FUND = "FUND",
  VENDOR = "VENDOR",
  USER = "USER",
}

export enum E_ORGANIZATION_ROLE {
  ADMIN = "ADMIN",
  MEMBER = "MEMBER",
  ACCOUNTANT = "ACCOUNTANT",
}

export enum E_ORDER_STATUS {
  NEW = "NEW",
  REQUIRE_CLIENT_CONFIRMATION = "REQUIRE_CLIENT_CONFIRMATION",
  PAID = "PAID",
  ERROR = "ERROR",
  PROCESSING = "PROCESSING",
  REJECTED = "REJECTED",
  ACTIVE = "ACTIVE",
  CANCELLED = "CANCELLED",
  PENDING = "PENDING",
  EXPIRED = "EXPIRED",
  DISPUTED = "DISPUTED",
  REFUNDED = "REFUNDED",
  PAUSED = "PAUSED",
  IN_REVIEW = "IN_REVIEW",
}

export enum E_INTERVAL {
  ONETIME = "ONETIME",
  MONTH = "MONTH",
  YEAR = "YEAR",
  FLEXIBLE = "FLEXIBLE",
}

export enum E_IBAN_CURRENCIES {
  AED = "AED",
  AFN = "AFN",
  ALL = "ALL",
  AMD = "AMD",
  ANG = "ANG",
  AOA = "AOA",
  ARS = "ARS",
  AUD = "AUD",
  AWG = "AWG",
  AZN = "AZN",
  BAM = "BAM",
  BBD = "BBD",
  BDT = "BDT",
  BGN = "BGN",
  BHD = "BHD",
  BIF = "BIF",
  BMD = "BMD",
  BND = "BND",
  BOB = "BOB",
  BOV = "BOV",
  BRL = "BRL",
  BSD = "BSD",
  BTN = "BTN",
  BWP = "BWP",
  BYN = "BYN",
  BZD = "BZD",
  CAD = "CAD",
  CDF = "CDF",
  CHE = "CHE",
  CHF = "CHF",
  CHW = "CHW",
  CLF = "CLF",
  CLP = "CLP",
  CNY = "CNY",
  COP = "COP",
  COU = "COU",
  CRC = "CRC",
  CUC = "CUC",
  CUP = "CUP",
  CVE = "CVE",
  CZK = "CZK",
  DJF = "DJF",
  DKK = "DKK",
  DOP = "DOP",
  DZD = "DZD",
  EGP = "EGP",
  ERN = "ERN",
  ETB = "ETB",
  EUR = "EUR",
  FJD = "FJD",
  FKP = "FKP",
  GBP = "GBP",
  GEL = "GEL",
  GHS = "GHS",
  GIP = "GIP",
  GMD = "GMD",
  GNF = "GNF",
  GTQ = "GTQ",
  GYD = "GYD",
  HKD = "HKD",
  HNL = "HNL",
  HRK = "HRK",
  HTG = "HTG",
  HUF = "HUF",
  IDR = "IDR",
  ILS = "ILS",
  INR = "INR",
  IQD = "IQD",
  IRR = "IRR",
  ISK = "ISK",
  JMD = "JMD",
  JOD = "JOD",
  JPY = "JPY",
  KES = "KES",
  KGS = "KGS",
  KHR = "KHR",
  KMF = "KMF",
  KPW = "KPW",
  KRW = "KRW",
  KWD = "KWD",
  KYD = "KYD",
  KZT = "KZT",
  LAK = "LAK",
  LBP = "LBP",
  LKR = "LKR",
  LRD = "LRD",
  LSL = "LSL",
  LYD = "LYD",
  MAD = "MAD",
  MDL = "MDL",
  MGA = "MGA",
  MKD = "MKD",
  MMK = "MMK",
  MNT = "MNT",
  MOP = "MOP",
  MRU = "MRU",
  MUR = "MUR",
  MVR = "MVR",
  MWK = "MWK",
  MXN = "MXN",
  MXV = "MXV",
  MYR = "MYR",
  MZN = "MZN",
  NAD = "NAD",
  NGN = "NGN",
  NIO = "NIO",
  NOK = "NOK",
  NPR = "NPR",
  NZD = "NZD",
  OMR = "OMR",
  PAB = "PAB",
  PEN = "PEN",
  PGK = "PGK",
  PHP = "PHP",
  PKR = "PKR",
  PLN = "PLN",
  PYG = "PYG",
  QAR = "QAR",
  RON = "RON",
  RSD = "RSD",
  RUB = "RUB",
  RWF = "RWF",
  SAR = "SAR",
  SBD = "SBD",
  SCR = "SCR",
  SDG = "SDG",
  SEK = "SEK",
  SGD = "SGD",
  SHP = "SHP",
  SLL = "SLL",
  SOS = "SOS",
  SRD = "SRD",
  SSP = "SSP",
  STN = "STN",
  SVC = "SVC",
  SYP = "SYP",
  SZL = "SZL",
  THB = "THB",
  TJS = "TJS",
  TMT = "TMT",
  TND = "TND",
  TOP = "TOP",
  TRY = "TRY",
  TTD = "TTD",
  TWD = "TWD",
  TZS = "TZS",
  UAH = "UAH",
  UGX = "UGX",
  USD = "USD",
  USN = "USN",
  UYI = "UYI",
  UYU = "UYU",
  UZS = "UZS",
  VEF = "VEF",
  VND = "VND",
  VUV = "VUV",
  WST = "WST",
  XAF = "XAF",
  XCD = "XCD",
  XDR = "XDR",
  XOF = "XOF",
  XPF = "XPF",
  XSU = "XSU",
  XUA = "XUA",
  YER = "YER",
  ZAR = "ZAR",
  ZMW = "ZMW",
  ZWL = "ZWL",
}

export enum E_AMOUNT_TYPE {
  FIXED = "FIXED",
  FLEXIBLE = "FLEXIBLE",
}

export interface Company {
  id: UUID;
  /** @maxLength 32 */
  legalName?: string;
  /** when created */
  whenCreated: Instant;
  /** when modified */
  whenModified: Instant;
  whenDeleted?: Instant;
}

export interface CountryCode {
  id: UUID;
  /**
   * country calling code
   * @minLength 2
   * @maxLength 16
   */
  dial: string;
  /**
   * ISO3166-1-Alpha-2
   * @minLength 2
   * @maxLength 16
   */
  countryCode: string;
  /**
   * official name en
   * @minLength 1
   * @maxLength 64
   */
  officialNameEn: string;
  /**
   * official name cn
   * @minLength 1
   * @maxLength 64
   */
  officialNameCn: string;
  /**
   * cldr display name
   * @minLength 1
   * @maxLength 32
   */
  cldrDisplayName: string;
  /**
   * languages
   * @minLength 1
   * @maxLength 16
   */
  languages: string;
  /** currency alphabetic code */
  currencyAlphabeticCode: E_IBAN_CURRENCIES;
  /** when created */
  whenCreated: Instant;
  /** when modified */
  whenModified: Instant;
  whenDeleted?: Instant;
}

export interface DebitCard {
  id: UUID;
  /**
   * Debit Card No
   * @minLength 16
   * @maxLength 22
   */
  cardNo?: string;
  /**
   * legal name
   * @minLength 2
   * @maxLength 16
   */
  legalName?: string;
  /** User country code */
  countryCode?: CountryCode;
  /**
   * @minLength 4
   * @maxLength 11
   */
  phoneNumber?: string;
  /**
   * bank name
   * @minLength 2
   * @maxLength 64
   */
  bankName?: string;
  /** create for organization */
  organization?: Organization;
  /** create by user */
  user?: User;
  /** when created */
  whenCreated: Instant;
  /** when modified */
  whenModified: Instant;
  whenDeleted?: Instant;
}

export interface Example {
  id: UUID;
  name: string;
  likeName?: string;
  /** @format int32 */
  age: number;
  /** @format int32 */
  minAge?: number;
  /** @format int32 */
  maxAge?: number;
  /** when created */
  whenCreated: Instant;
  /** when modified */
  whenModified: Instant;
  whenDeleted?: Instant;
}

export interface Expense {
  id: UUID;
  /** 创建用户 */
  user: User;
  /** 筹款组织 */
  organization: Organization;
  /**
   * 费用
   * @format int32
   */
  expense: number;
  /** 交易货币 */
  currency: E_IBAN_CURRENCIES;
  /** when created */
  whenCreated: Instant;
  /** when modified */
  whenModified: Instant;
  whenDeleted?: Instant;
}

export interface GithubAccessToken {
  /** access token */
  access_token: string;
  refresh_token_expires_in?: string;
  refresh_token?: string;
  scope?: string;
  token_type?: string;
  expires_in?: string;
  error?: string;
  error_description?: string;
  error_uri?: string;
}

export interface GithubLicense {
  key?: string;
  name?: string;
  spdx_id?: string;
  url?: string;
  node_id?: string;
}

export interface GithubOrg {
  login?: string;
  /** @format double */
  id?: number;
  node_id?: string;
  url?: string;
  repos_url?: string;
  events_url?: string;
  hooks_url?: string;
  issues_url?: string;
  members_url?: string;
  public_members_url?: string;
  avatar_url?: string;
  description?: string;
}

export interface GithubOwner {
  login?: string;
  /** @format int32 */
  id?: number;
  node_id?: string;
  avatar_url?: string;
  gravatar_id?: string;
  url?: string;
  html_url?: string;
  followers_url?: string;
  following_url?: string;
  gists_url?: string;
  starred_url?: string;
  subscriptions_url?: string;
  organizations_url?: string;
  repos_url?: string;
  events_url?: string;
  received_events_url?: string;
  type?: string;
  user_view_type?: string;
  site_admin?: boolean;
}

export interface GithubRepo {
  /** @format int32 */
  id?: number;
  node_id?: string;
  name?: string;
  full_name?: string;
  owner?: GithubOwner;
  html_url?: string;
  description?: string;
  fork?: boolean;
  url?: string;
  forks_url?: string;
  keys_url?: string;
  collaborators_url?: string;
  teams_url?: string;
  hooks_url?: string;
  issue_events_url?: string;
  events_url?: string;
  assignees_url?: string;
  branches_url?: string;
  tags_url?: string;
  blobs_url?: string;
  git_tags_url?: string;
  git_refs_url?: string;
  trees_url?: string;
  statuses_url?: string;
  languages_url?: string;
  stargazers_url?: string;
  contributors_url?: string;
  subscribers_url?: string;
  subscription_url?: string;
  commits_url?: string;
  git_commits_url?: string;
  comments_url?: string;
  issue_comment_url?: string;
  contents_url?: string;
  compare_url?: string;
  merges_url?: string;
  archive_url?: string;
  downloads_url?: string;
  issues_url?: string;
  pulls_url?: string;
  milestones_url?: string;
  notifications_url?: string;
  labels_url?: string;
  releases_url?: string;
  deployments_url?: string;
  created_at?: string;
  updated_at?: string;
  pushed_at?: string;
  git_url?: string;
  ssh_url?: string;
  clone_url?: string;
  svn_url?: string;
  homepage?: string;
  /** @format int32 */
  size?: number;
  /** @format int32 */
  stargazers_count?: number;
  /** @format int32 */
  watchers_count?: number;
  has_issues?: boolean;
  has_projects?: boolean;
  has_downloads?: boolean;
  has_wiki?: boolean;
  has_pages?: boolean;
  has_discussions?: boolean;
  /** @format int32 */
  forks_count?: number;
  mirror_url?: string;
  archived?: boolean;
  disabled?: boolean;
  /** @format int32 */
  open_issues_count?: number;
  license?: GithubLicense;
  allow_forking?: boolean;
  is_template?: boolean;
  web_commit_signoff_required?: boolean;
  visibility?: string;
  /** @format int32 */
  forks?: number;
  /** @format int32 */
  open_issues?: number;
  /** @format int32 */
  watchers?: number;
  default_branch?: string;
}

export interface GithubRepoGroup {
  /** login name */
  login: string;
  /** owner type */
  type: string;
  /** org info */
  org?: GithubOrg;
  /** user info */
  user?: GithubUser;
  /** user info */
  repos: GithubRepo[];
}

export interface GithubUser {
  login?: string;
  /** @format int32 */
  id?: number;
  node_id?: string;
  avatar_url?: string;
  gravatar_id?: string;
  url?: string;
  html_url?: string;
  followers_url?: string;
  following_url?: string;
  gists_url?: string;
  starred_url?: string;
  subscriptions_url?: string;
  organizations_url?: string;
  repos_url?: string;
  events_url?: string;
  received_events_url?: string;
  type?: string;
  user_view_type?: string;
  site_admin?: boolean;
  name?: string;
  company?: string;
  blog?: string;
  location?: string;
  email?: string;
  bio?: string;
  twitter_username?: string;
  /** @format int32 */
  public_repos?: number;
  /** @format int32 */
  public_gists?: number;
  /** @format int32 */
  followers?: number;
  /** @format int32 */
  following?: number;
  created_at?: string;
  updated_at?: string;
}

/** @format date-time */
export type Instant = string;

export interface Licenses {
  id: UUID;
  /**
   * @minLength 2
   * @maxLength 64
   */
  key: string;
  /**
   * @minLength 2
   * @maxLength 64
   */
  name: string;
  /**
   * @minLength 2
   * @maxLength 64
   */
  spdxId: string;
  /**
   * @minLength 2
   * @maxLength 64
   */
  url: string;
  /** when created */
  whenCreated: Instant;
  /** when modified */
  whenModified: Instant;
  whenDeleted?: Instant;
}

export interface LoginBody {
  /** countryCode */
  countryCode: CountryCode;
  /**
   * phoneNumber
   * @minLength 2
   * @maxLength 32
   */
  phoneNumber: string;
  /**
   * email
   * @minLength 2
   * @maxLength 32
   */
  email: string;
  /**
   * password
   * @minLength 6
   * @maxLength 64
   */
  password: string;
  /**
   * code
   * @minLength 4
   * @maxLength 4
   */
  code: string;
}

export interface Member {
  id: UUID;
  /** user */
  user: User;
  /** organization */
  organization: Organization;
  /** member role */
  role: E_ORGANIZATION_ROLE;
  /** when created */
  whenCreated: Instant;
  /** when modified */
  whenModified: Instant;
  whenDeleted?: Instant;
}

export interface MemberInvitation {
  id: UUID;
  /** 邀请链接 */
  link?: string;
  /** 过期时间 */
  whenExpire?: string;
  /** user */
  user: User;
  /** organization */
  organization: Organization;
  /** member role */
  role: E_ORGANIZATION_ROLE;
  /** when created */
  whenCreated: Instant;
  /** when modified */
  whenModified: Instant;
  whenDeleted?: Instant;
}

export interface Order {
  id: UUID;
  /** donation from user */
  user: User;
  /** donation from organization */
  fromOrganization?: Organization;
  /** filterable */
  userId?: string;
  /** filterable */
  organizationId?: string;
  /** filterable */
  startDate?: string;
  /** filterable */
  endDate?: string;
  /** donation to organization */
  organization: Organization;
  /**
   * prime currency
   * @minLength 2
   * @maxLength 32
   */
  currency: E_IBAN_CURRENCIES;
  /** usage tier */
  tier?: Tier;
  /**
   * total amount
   * @format int32
   * @min 1
   */
  totalAmount?: number;
  /** is guest */
  isGuest?: boolean;
  /**
   * quantity (only product)
   * @format int32
   * @min 0
   */
  quantity?: number;
  /** order status */
  status?: E_ORDER_STATUS;
  /** pay status */
  payStatus: boolean;
  /** 支付方式 */
  paymentMethod?: E_PAYMENT_METHOD;
  /** trade no */
  tradeNo: string;
  /** out trade no */
  outTradeNo?: string;
  /** order expires time */
  whenExpires?: Instant;
  /** when created */
  whenCreated: Instant;
  /** when modified */
  whenModified: Instant;
  whenDeleted?: Instant;
  guest?: boolean;
}

export interface OrderSnapshot {
  id: UUID;
  order?: Order;
  string?: string;
  /** when created */
  whenCreated: Instant;
  /** when modified */
  whenModified: Instant;
  whenDeleted?: Instant;
}

export interface OrderTax {
  id: UUID;
  /**
   * 税率比例
   * @format float
   */
  percentage: number;
  /** 纳税国家 */
  taxedCountry?: CountryCode;
  /** 纳税人所在国家 */
  taxerCountry?: CountryCode;
  /** when created */
  whenCreated: Instant;
  /** when modified */
  whenModified: Instant;
  whenDeleted?: Instant;
}

export interface Organization {
  id: UUID;
  /**
   * Organization name
   * @minLength 2
   * @maxLength 32
   */
  name: string;
  /**
   * Organization legal name
   * @minLength 2
   * @maxLength 32
   */
  legalName?: string;
  /**
   * url slug
   * @minLength 2
   * @maxLength 32
   */
  slug: string;
  /**
   * url slug
   * @minLength 2
   * @maxLength 32
   */
  country: CountryCode;
  /**
   * prime currency
   * @minLength 2
   * @maxLength 32
   */
  currency: E_IBAN_CURRENCIES;
  /**
   * description
   * @minLength 2
   * @maxLength 150
   */
  description?: string;
  /**
   * organization types
   * @minLength 2
   * @maxLength 150
   */
  type: E_ORGANIZATION_TYPE;
  /**
   * organization tags
   * @uniqueItems true
   */
  tags: Tags[];
  /**
   * website url
   * @minLength 2
   * @maxLength 128
   */
  website?: string;
  /**
   * social url
   * @minLength 2
   * @maxLength 128
   */
  social?: string;
  /** 捐助等级 */
  tiers: Tier[];
  /** filterable */
  userId?: string;
  /** 所属用户 */
  user: User;
  /**
   * members
   * @uniqueItems true
   */
  members: Member[];
  /** 开源协议 */
  licenses?: Licenses;
  /**
   * 额外的协议信息
   * @maxLength 1000
   */
  additionalLicenses?: string;
  /**
   * 项目以往历史事件
   * @maxLength 1000
   */
  previousEvents?: string;
  /** receiving-money debitCard */
  debitCard?: DebitCard;
  /** is host account */
  isHostAccount: boolean;
  /** financial host */
  host?: Organization;
  /** when created */
  whenCreated: Instant;
  /** when modified */
  whenModified: Instant;
  /** when deleted */
  whenDeleted?: Instant;
  hostAccount?: boolean;
}

export interface PageParams {
  /** @format int32 */
  page?: number;
  /** @format int32 */
  pageSize?: number;
}

export type Policies = object;

export interface PromotionDetail {
  couponId?: string;
  name?: string;
  scope?: ScopeEnum;
  type?: TypeEnum;
  /** @format int32 */
  amount?: number;
  stockId?: string;
  /** @format int32 */
  wechatpayContribute?: number;
  /** @format int32 */
  merchantContribute?: number;
  /** @format int32 */
  otherContribute?: number;
  currency?: string;
  goodsDetail?: PromotionGoodsDetail[];
}

export interface PromotionGoodsDetail {
  goodsId?: string;
  /** @format int32 */
  quantity?: number;
  /** @format int32 */
  unitPrice?: number;
  /** @format int32 */
  discountAmount?: number;
  goodsRemark?: string;
}

export interface RegisterBody {
  /**
   * user name
   * @minLength 2
   * @maxLength 32
   * @pattern \S
   */
  username: string;
  /**
   * url slug
   * @minLength 1
   * @pattern \S
   */
  slug: string;
  /**
   * phone number
   * @minLength 1
   * @pattern \S
   */
  phoneNumber: string;
  /**
   * code
   * @minLength 1
   * @pattern \S
   */
  code: string;
  /** country code */
  countryCode: CountryCode;
  /** sex */
  sex: E_SEX;
  /**
   * password
   * @minLength 8
   * @maxLength 32
   * @pattern \S
   */
  password: string;
}

export interface ResteasyConstraintViolation {
  constraintType?: Type;
  path?: string;
  message?: string;
  value?: string;
}

export interface ResultOfData {
  message: string;
  /** @format int64 */
  code: number;
  data?: any;
}

export interface SendCodeBody {
  countryCode: CountryCode;
  /**
   * @minLength 11
   * @maxLength 11
   * @pattern \S
   */
  phoneNumber: string;
}

export interface SendSmsResponseAliyun {
  headers?: Record<string, string>;
  /** @format int32 */
  statusCode?: number;
  body?: SendSmsResponseBody;
}

export interface SendSmsResponseBody {
  bizId?: string;
  code?: string;
  message?: string;
  requestId?: string;
}

export interface SmsCode {
  id: UUID;
  /** country code */
  countryCode?: CountryCode;
  phoneNumber: string;
  code: string;
  /** 是否有效, (使用过后变为无效) */
  effective: boolean;
  /** when created */
  whenCreated: Instant;
  /** when modified */
  whenModified: Instant;
  whenDeleted?: Instant;
}

export interface Tags {
  id: UUID;
  /**
   * tag name
   * @minLength 2
   * @maxLength 32
   */
  name: string;
  /** is official create */
  official: boolean;
  /** is popular */
  popular: boolean;
  /** when created */
  whenCreated: Instant;
  /** when modified */
  whenModified: Instant;
  whenDeleted?: Instant;
}

export interface Tier {
  id: UUID;
  /** 所属组织 */
  organization: Organization;
  /**
   * 捐助等级名称
   * @minLength 2
   * @maxLength 32
   */
  name: string;
  /**
   * url path
   * @minLength 2
   * @maxLength 32
   */
  slug: string;
  /** 捐助等级类型 */
  type: E_TIER_TYPE;
  /**
   * 描述
   * @maxLength 500
   */
  description: string;
  /**
   * 完整的描述
   * @maxLength 1000
   */
  longDescription?: string;
  /** 是否使用独立页面 */
  useStandalonePage: boolean;
  /** 视频URL */
  videoUrl?: string;
  /**
   * 按钮文字
   * @maxLength 16
   */
  button: string;
  /**
   * 捐助金额
   * @format int32
   * @min 1
   * @max 100000
   */
  amount: number;
  /** 捐助金额范围 */
  presets: number[];
  /** 捐助金额类型 */
  amountType: E_AMOUNT_TYPE;
  /**
   * 最小金额
   * @format int32
   * @min 1
   * @max 100000000
   */
  minimumAmount?: number;
  /**
   * prime currency
   * @minLength 2
   * @maxLength 32
   */
  currency: E_IBAN_CURRENCIES;
  /** 捐助方式 */
  interval: E_INTERVAL;
  /**
   * 库存
   * @format int32
   * @min 1
   * @max 100000
   */
  maxQuantity?: number;
  /**
   * 筹款目标
   * @format int64
   * @min 1
   * @max 10000000
   */
  goal?: number;
  /** when created */
  whenCreated: Instant;
  /** when modified */
  whenModified: Instant;
  whenDeleted?: Instant;
}

export interface TradePagePayBodyForAliPay {
  out_trade_no?: string;
  method?: string;
  total_amount?: string;
  sign?: string;
  trade_no?: string;
  auth_app_id?: string;
  version?: string;
  app_id?: string;
  sign_type?: string;
  seller_id?: string;
  timestamp?: string;
}

export interface TransactionAmount {
  currency?: string;
  payerCurrency?: string;
  /** @format int32 */
  payerTotal?: number;
  /** @format int32 */
  total?: number;
}

export interface TransactionPayer {
  openid?: string;
}

/**
 * @format uuid
 * @pattern [a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}
 */
export type UUID = string;

export interface UpdateUser {
  /**
   * username
   * @minLength 2
   * @maxLength 32
   */
  username: string;
  /**
   * url slug
   * @minLength 2
   * @maxLength 32
   */
  slug: string;
  /**
   * website url
   * @minLength 2
   * @maxLength 128
   */
  website?: string;
  /** sex */
  sex?: E_SEX;
}

export interface UpdateUserPassword {
  /**
   * password
   * @minLength 6
   * @maxLength 64
   */
  password: string;
  /**
   * code
   * @minLength 4
   * @maxLength 4
   */
  code: string;
}

export interface User {
  id: UUID;
  /**
   * username
   * @minLength 2
   * @maxLength 32
   */
  username: string;
  /**
   * url slug
   * @minLength 2
   * @maxLength 32
   */
  slug: string;
  /**
   * website url
   * @minLength 2
   * @maxLength 128
   */
  website?: string;
  /**
   * social url
   * @minLength 2
   * @maxLength 128
   */
  social?: string;
  /**
   * avatar
   * @maxLength 42
   */
  avatar?: string;
  /** sex */
  sex?: E_SEX;
  /** role */
  role?: string;
  /** password */
  password?: string;
  /** User country code */
  countryCode?: CountryCode;
  /**
   * phoneNumber
   * @minLength 4
   * @maxLength 11
   */
  phoneNumber: string;
  /**
   * email
   * @minLength 6
   * @maxLength 32
   */
  email?: string;
  /** token */
  token?: UserToken;
  /** when created */
  whenCreated: Instant;
  /** when modified */
  whenModified: Instant;
  whenDeleted?: Instant;
  getFullData?: boolean;
}

export interface UserToken {
  id: UUID;
  token?: string;
  /** when created */
  whenCreated: Instant;
  /** when modified */
  whenModified: Instant;
  whenDeleted?: Instant;
}

export interface ViolationReport {
  exception?: string;
  propertyViolations?: ResteasyConstraintViolation[];
  classViolations?: ResteasyConstraintViolation[];
  parameterViolations?: ResteasyConstraintViolation[];
  returnValueViolations?: ResteasyConstraintViolation[];
}

export interface WechatPayOrderResult {
  /** qrcode url */
  codeUrl: string;
  /** outTradeNo */
  outTradeNo: string;
}

export interface WechatTradeState {
  amount?: TransactionAmount;
  appid?: string;
  attach?: string;
  bankType?: string;
  mchid?: string;
  outTradeNo?: string;
  payer?: TransactionPayer;
  promotionDetail?: PromotionDetail[];
  successTime?: string;
  tradeState?: TradeStateEnum;
  tradeStateDesc?: string;
  tradeType?: TradeTypeEnum;
  transactionId?: string;
}
