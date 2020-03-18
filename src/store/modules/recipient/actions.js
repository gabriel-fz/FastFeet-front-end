export function recipientRegister(
  name,
  address,
  address_number,
  complement,
  city,
  state,
  zip_code
) {
  return {
    type: '@recipient_REGISTER_REQUEST',
    payload: {
      name,
      address,
      address_number,
      complement,
      city,
      state,
      zip_code,
    },
  };
}
