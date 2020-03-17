import { takeLatest, call, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

export function* registerDelivery({ payload }) {
  try {
    const { recipient_id, deliveryman_id, product } = payload;

    yield call(api.post, 'deliveries', {
      recipient_id,
      deliveryman_id,
      product,
    });

    history.push('/');
  } catch (err) {
    toast.error('Algo deu errado com o cadastro');
  }
}

export default all([
  takeLatest('@register/REGISTER_DELIVERY_REQUEST', registerDelivery),
]);
