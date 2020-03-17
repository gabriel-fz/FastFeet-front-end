export function registerRequest(recipient_id, deliveryman_id, product) {
  return {
    type: '@register/REGISTER_DELIVERY_REQUEST',
    payload: { recipient_id, deliveryman_id, product },
  };
}
