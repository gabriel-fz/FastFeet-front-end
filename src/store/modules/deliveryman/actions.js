export function deliverymanRegister(name, email, avatar_id) {
  return {
    type: '@deliveryman_REGISTER_REQUEST',
    payload: { name, email, avatar_id },
  };
}
