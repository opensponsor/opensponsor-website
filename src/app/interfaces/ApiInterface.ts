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
  id?: UUID;
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
  whenCreated?: Instant;
  whenModified?: Instant;
  whenDeleted?: Instant;
}

export enum E_SEX {
  WOMEN = "WOMEN",
  MAN = "MAN",
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

export type PanacheEntityBase = object;

export interface RegisterBody {
  /**
   * @minLength 2
   * @maxLength 32
   * @pattern \S
   */
  username: string;
  /**
   * @minLength 2
   * @maxLength 32
   * @pattern \S
   */
  legalName: string;
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
  id?: UUID;
  /**
   * @minLength 2
   * @maxLength 32
   */
  username?: string;
  /**
   * @minLength 2
   * @maxLength 32
   */
  legalName?: string;
  /** @maxLength 42 */
  avatar?: string;
  sex?: E_SEX;
  role?: string;
  countryCode?: CountryCodes;
  /**
   * @minLength 4
   * @maxLength 11
   */
  phoneNumber?: string;
  /**
   * @minLength 6
   * @maxLength 32
   */
  email?: string;
  token?: UserToken;
  whenCreated?: Instant;
  whenModified?: Instant;
  whenDeleted?: Instant;
}

export interface UserToken {
  id?: UUID;
  token?: string;
  whenCreated?: Instant;
  whenModified?: Instant;
  whenDeleted?: Instant;
}

export interface ViolationReport {
  exception?: string;
  propertyViolations?: ResteasyConstraintViolation[];
  classViolations?: ResteasyConstraintViolation[];
  parameterViolations?: ResteasyConstraintViolation[];
  returnValueViolations?: ResteasyConstraintViolation[];
}
