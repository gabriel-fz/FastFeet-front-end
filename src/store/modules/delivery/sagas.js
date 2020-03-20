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

    toast.success('Entrega cadastrada com sucesso');
    history.push('/deliveries');
  } catch (err) {
    toast.error('Algo deu errado com o cadastro');
  }
}

export function* deliveryDelete({ payload }) {
  try {
    const { id } = payload;

    yield call(api.delete, `deliveries/${id}`);

    toast.success('Entrega deletada com sucesso!');
  } catch (err) {
    toast.error('Não foi possível deletar a entrega');
  }
}

export default all([
  takeLatest('@register/REGISTER_DELIVERY_REQUEST', registerDelivery),
  takeLatest('@delivery_DELETE', deliveryDelete),
]);
