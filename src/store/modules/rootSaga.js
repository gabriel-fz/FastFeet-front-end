import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import delivery from './delivery/sagas';
import deliveryman from './deliveryman/sagas';
import recipient from './recipient/sagas';
import deliveryProblem from './deliveryProblem/sagas';

export default function* rootSaga() {
  return yield all([auth, delivery, deliveryman, recipient, deliveryProblem]);
}
