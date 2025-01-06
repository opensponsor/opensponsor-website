/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface CountryCodes {
  id: UUID;
  /**
   * @minLength 2
   * @maxLength 16
   */
  dial?: string;
  /**
   * @minLength 2
   * @maxLength 16
   */
  countryCode?: string;
  /**
   * @minLength 1
   * @maxLength 64
   */
  officialNameEn?: string;
  /**
   * @minLength 1
   * @maxLength 64
   */
  officialNameCn?: string;
  /**
   * @minLength 1
   * @maxLength 32
   */
  cldrDisplayName?: string;
  /**
   * @minLength 1
   * @maxLength 16
   */
  languages?: string;
  /**
   * @minLength 1
   * @maxLength 16
   */
  currencyAlphabeticCode?: string;
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
  countryCode?: CountryCodes;
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

export enum E_AMOUNT_TYPE {
  FIXED = "FIXED",
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

export enum E_INTERVAL {
  ONETIME = "ONETIME",
  MONTH = "MONTH",
  YEAR = "YEAR",
  FLEXIBLE = "FLEXIBLE",
}

export enum E_ORGANIZATION_ROLE {
  ADMIN = "ADMIN",
  MEMBER = "MEMBER",
  ACCOUNTANT = "ACCOUNTANT",
}

export enum E_ORGANIZATION_TYPE {
  FISCAL_HOST = "FISCAL_HOST",
  COMMUNITY = "COMMUNITY",
}

export enum E_SEX {
  WOMEN = "WOMEN",
  MAN = "MAN",
}

export enum E_TIER_TYPE {
  GENERIC = "GENERIC",
  MEMBERSHIP = "MEMBERSHIP",
  DONATION = "DONATION",
  PRODUCT = "PRODUCT",
  SERVICE = "SERVICE",
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

/**
 * @format date-time
 * @example "2022-03-10T16:15:50.000Z"
 */
export type Instant = string;

export interface LoginBody {
  /**
   * @minLength 2
   * @maxLength 32
   * @pattern \S
   */
  account: string;
  /**
   * @minLength 6
   * @maxLength 64
   * @pattern \S
   */
  password: string;
}

export interface Member {
  id: UUID;
  /** user */
  user: User;
  /** organization */
  organization: Organization;
  /** member role */
  roles: E_ORGANIZATION_ROLE;
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
   * introduce
   * @minLength 2
   * @maxLength 150
   */
  introduce?: string;
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
  tags: string[];
  /**
   * website url
   * @minLength 2
   * @maxLength 150
   */
  website?: string;
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
  /** receiving-money debitCard */
  debitCard?: DebitCard;
  /** when created */
  whenCreated: Instant;
  /** when modified */
  whenModified: Instant;
  /** when deleted */
  whenDeleted?: Instant;
}

export interface RegisterBody {
  /**
   * @minLength 2
   * @maxLength 32
   * @pattern \S
   */
  username: string;
  legalName?: string;
  countryCode: CountryCodes;
  sex?: E_SEX;
  /**
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
  slug?: string;
  /** 捐助等级类型 */
  type?: E_TIER_TYPE;
  /**
   * 描述
   * @maxLength 500
   */
  description: string;
  /**
   * 捐助等级类型
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
  button?: string;
  /**
   * 捐助金额
   * @min 1
   * @max 100000
   */
  amount?: number;
  /** 捐助金额范围 */
  presets?: number[];
  /** 捐助金额类型 */
  amountType?: E_AMOUNT_TYPE;
  /**
   * 最小金额
   * @min 1
   * @max 100000
   */
  minimumAmount?: number;
  /** 货币 */
  currency?: E_IBAN_CURRENCIES;
  /** 捐助方式 */
  interval?: E_INTERVAL;
  /**
   * 库存
   * @min 1
   * @max 100000
   */
  maxQuantity?: number;
  /**
   * 筹款目标
   * @format int64
   */
  goal?: number;
  /** when created */
  whenCreated: Instant;
  /** when modified */
  whenModified: Instant;
  whenDeleted?: Instant;
}

export enum Type {
  CLASS = "CLASS",
  PROPERTY = "PROPERTY",
  PARAMETER = "PARAMETER",
  RETURN_VALUE = "RETURN_VALUE",
}

/**
 * @format uuid
 * @pattern [a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}
 */
export type UUID = string;

export interface User {
  id: UUID;
  /**
   * username
   * @minLength 2
   * @maxLength 32
   */
  username: string;
  /**
   * legalName
   * @maxLength 32
   */
  legalName: string;
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
  countryCode?: CountryCodes;
  /**
   * phoneNumber
   * @minLength 4
   * @maxLength 11
   */
  phoneNumber?: string;
  /**
   * email
   * @minLength 6
   * @maxLength 32
   */
  email?: string;
  /** when created */
  whenCreated: Instant;
  /** when modified */
  whenModified: Instant;
  whenDeleted?: Instant;
  token?: UserToken;
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
