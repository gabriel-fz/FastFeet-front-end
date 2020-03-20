export function registerRequest(recipient_id, deliveryman_id, product) {
  return {
    type: '@register/REGISTER_DELIVERY_REQUEST',
    payload: { recipient_id, deliveryman_id, product },
  };
}

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

export function deliveryDelete(id) {
  return {
    type: '@delivery_DELETE',
    payload: { id },
  };
}
