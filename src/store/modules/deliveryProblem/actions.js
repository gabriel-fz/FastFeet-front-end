export function deliveryCancel(id) {
  return {
    type: '@delivery_CANCEL',
    payload: { id },
  };
}
