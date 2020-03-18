export function recipientRegister(data) {
  return {
    type: '@recipient_REGISTER_REQUEST',
    payload: { data },
  };
}

export function recipientUpdate(data) {
  return {
    type: '@recipient_UPDATE_REQUEST',
    payload: { data },
  };
}
