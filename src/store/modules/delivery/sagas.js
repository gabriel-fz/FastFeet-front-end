import { takeLatest, call, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

export function deliveryUpdateRequest() {
  history.push('/delivery/edit');
}

export function* deliveryUpdate({ payload }) {
  try {
    const { data, id } = payload.data;

    yield call(api.put, `deliveries/${id}`, data);

    toast.success('Entrega atualizada com sucesso!');
  } catch (err) {
    toast.error('Não foi possível atualizar a entrega');
  }
}

export default all([
  takeLatest('@delivery_UPDATE_REQUEST', deliveryUpdateRequest),
  takeLatest('@delivery_UPDATE', deliveryUpdate),
]);
