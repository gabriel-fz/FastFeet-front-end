export function deliveryUpdateRequest(delivery) {
  return {
    type: '@delivery_UPDATE_REQUEST',
    payload: { delivery },
  };
}
