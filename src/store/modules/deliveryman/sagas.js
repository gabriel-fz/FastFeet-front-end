import { takeLatest, call, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

export function* deliverymanRegister({ payload }) {
  try {
    const { name, email, avatar_id } = payload;

    yield call(api.post, 'deliverymans', {
      name,
      email,
      avatar_id,
    });

    history.push('/deliverymans');
    toast.success('Entregador cadastrado com sucesso!');
  } catch (err) {
    toast.error('Algo deu errado com o cadastro');
  }
}

export default all([
  takeLatest('@deliveryman_REGISTER_REQUEST', deliverymanRegister),
]);
