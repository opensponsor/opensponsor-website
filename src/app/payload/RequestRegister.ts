import {CountryCodes} from "@app/interfaces/ApiInterface";

export default interface RequestRegister {
    username: string;

    countryCode: CountryCodes;

    phoneNumber: string;

    legalName: string;

    password: string;
}
