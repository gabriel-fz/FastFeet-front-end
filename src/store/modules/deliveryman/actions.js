export function deliverymanUpdateRequest(deliveryman) {
  return {
    type: '@deliveryman_UPDATE_REQUEST',
    payload: { deliveryman },
  };
}
