import { takeLatest, call, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

export function* recipientUpdate({ payload }) {
  try {
    const { data, id } = payload.data;

    yield call(api.put, `recipients/${id}`, data);

    toast.success('Destinatario atualizado com sucesso!');
  } catch (err) {
    toast.error('Algo deu errado com a atuaização do destinatário');
  }
}

export default all([takeLatest('@recipient_UPDATE_REQUEST', recipientUpdate)]);
