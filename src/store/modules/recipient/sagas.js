import { takeLatest, call, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

export function* recipientRegister({ payload }) {
  try {
    const {
      name,
      address,
      address_number,
      complement,
      city,
      state,
      zip_code,
    } = payload;

    yield call(api.post, 'recipients', {
      name,
      address,
      address_number,
      complement,
      city,
      state,
      zip_code,
    });

    history.push('/recipients');
    toast.success('Destinatário cadastrado com sucesso!');
  } catch (err) {
    toast.error('Algo deu errado com o cadastro');
  }
}

export default all([
  takeLatest('@recipient_REGISTER_REQUEST', recipientRegister),
]);
