export function deliveryUpdateRequest(delivery) {
  return {
    type: '@delivery_UPDATE_REQUEST',
    payload: { delivery },
  };
}

export function deliveryUpdate(data) {
  return {
    type: '@delivery_UPDATE',
    payload: { data },
  };
}
