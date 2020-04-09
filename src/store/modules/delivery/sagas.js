import { takeLatest, all } from 'redux-saga/effects';

import history from '~/services/history';

export function deliveryUpdateRequest() {
  history.push('/encomendas/editar');
}

export default all([
  takeLatest('@delivery_UPDATE_REQUEST', deliveryUpdateRequest),
]);
