import { takeLatest, call, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

export function* recipientRegister({ payload }) {
  try {
    const recipient = payload.data;

    yield call(api.post, 'recipients', recipient);
    toast.success('Destinatário cadastrado com sucesso!');
  } catch (err) {
    toast.error('Algo deu errado com o cadastro');
  }
}

export function* recipientUpdate({ payload }) {
  try {
    const { data, id } = payload.data;

    yield call(api.put, `recipients/${id}`, data);

    toast.success('Destinatario atualizado com sucesso!');
  } catch (err) {
    toast.error('Algo deu errado com a atuaização do destinatário');
  }
}

export function* recipientDelete({ payload }) {
  try {
    const { id } = payload;

    yield call(api.delete, `recipients/${id}`);

    toast.success('Destinatário deletado com sucesso!');
  } catch (err) {
    toast.error('Não foi possível deletar o destinatário');
  }
}

export default all([
  takeLatest('@recipient_REGISTER_REQUEST', recipientRegister),
  takeLatest('@recipient_UPDATE_REQUEST', recipientUpdate),
  takeLatest('@recipient_DELETE', recipientDelete),
]);
