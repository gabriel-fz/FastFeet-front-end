import produce from 'immer';

const INITIAL_STATE = {
  data: null,
};

export default function delivery(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@delivery_UPDATE_REQUEST': {
        const { id, product } = action.payload.delivery;
        const recipientValue = action.payload.delivery.recipient.id;
        const recipientLabel = action.payload.delivery.recipient.name;
        const deliverymanValue = action.payload.delivery.deliveryman.id;
        const deliverymanLabel = action.payload.delivery.deliveryman.name;

        const deliveryman = Object.assign(
          { id, product },
          { recipient: { value: recipientValue, label: recipientLabel } },
          { deliveryman: { value: deliverymanValue, label: deliverymanLabel } }
        );

        draft.data = deliveryman;
        break;
      }
      default:
    }
  });
}
