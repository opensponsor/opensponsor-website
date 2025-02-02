import {CountryCode} from "@app/interfaces/ApiInterface";

export default interface RequestRegister {
  username: string;

  countryCode: CountryCode;

  phoneNumber: string;

  legalName: string;

  password: string;
}
