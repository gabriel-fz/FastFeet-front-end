import { takeLatest, call, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

export function* deliveryCancel({ payload }) {
  try {
    const { id } = payload;

    yield call(api.delete, `/problem/${id}/cancel-delivery`);

    toast.success('Entraga cancelada!');
  } catch (err) {
    toast.error('Não foi possível cancelar a entrega!');
  }
}

export default all([takeLatest('@delivery_CANCEL', deliveryCancel)]);
