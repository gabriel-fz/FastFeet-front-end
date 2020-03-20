export function deliverymanRegister(name, email, avatar_id) {
  return {
    type: '@deliveryman_REGISTER_REQUEST',
    payload: { name, email, avatar_id },
  };
}

export function deliverymanUpdateRequest(deliveryman) {
  return {
    type: '@deliveryman_UPDATE_REQUEST',
    payload: { deliveryman },
  };
}

export function deliverymanUpdate(data) {
  return {
    type: '@deliveryman_UPDATE',
    payload: { data },
  };
}

export function deliverymanDelete(id) {
  return {
    type: '@deliveryman_DELETE',
    payload: { id },
  };
}
