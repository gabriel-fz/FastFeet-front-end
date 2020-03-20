import produce from 'immer';

const INITIAL_STATE = {
  data: null,
};

export default function deliveryman(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@deliveryman_UPDATE_REQUEST': {
        draft.data = action.payload.deliveryman;
        break;
      }
      default:
    }
  });
}
