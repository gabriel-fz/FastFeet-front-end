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

export function deliverymanUpdateRequest() {
  history.push('/deliveryman/edit');
}

export function* deliverymanUpdate({ payload }) {
  try {
    const { data, id } = payload.data;

    yield call(api.put, `deliverymans/${id}`, data);

    toast.success('Entregador atualizado com sucesso!');
  } catch (err) {
    toast.error('Não foi possível atualizar o entregador');
  }
}

export function* deliverymanDelete({ payload }) {
  try {
    const { id } = payload;

    yield call(api.delete, `deliverymans/${id}`);

    toast.success('Entregador deletado com sucesso!');
  } catch (err) {
    toast.error('Não foi possível deletar o entregador');
  }
}

export default all([
  takeLatest('@deliveryman_REGISTER_REQUEST', deliverymanRegister),
  takeLatest('@deliveryman_UPDATE_REQUEST', deliverymanUpdateRequest),
  takeLatest('@deliveryman_UPDATE', deliverymanUpdate),
  takeLatest('@deliveryman_DELETE', deliverymanDelete),
]);
