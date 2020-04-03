import { takeLatest, all } from 'redux-saga/effects';

import history from '~/services/history';

export function deliverymanUpdateRequest() {
  history.push('/deliveryman/edit');
}

export default all([
  takeLatest('@deliveryman_UPDATE_REQUEST', deliverymanUpdateRequest),
]);
