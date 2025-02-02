export const  phoneNumberRegex = /^(1)(\d){10}$/;

export function validatePhoneNumber(value: string) {
  return phoneNumberRegex.test(value);
}
