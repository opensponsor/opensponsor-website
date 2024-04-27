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
  countryCodes?: string;
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
  passport: string;
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
  name: string;
  /**
   * @minLength 2
   * @maxLength 32
   * @pattern \S
   */
  legalName: string;
  sex?: E_SEX;
  /**
   * @minLength 6
   * @maxLength 32
   * @pattern \S
   */
  password: string;
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
  name?: string;
  /**
   * @minLength 2
   * @maxLength 32
   */
  legalName?: string;
  /** @maxLength 42 */
  avatar?: string;
  sex?: E_SEX;
  role?: string;
  /**
   * @minLength 2
   * @maxLength 10
   */
  dialingCode?: string;
  /**
   * @minLength 4
   * @maxLength 11
   */
  phone?: string;
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
