import { all, fork } from 'redux-saga/effects';
import { makeSaga } from '../configs/sagas';

const combinedSagas = {
  // append all sagas here
};

export default function* rootSaga() {
  yield all(Object.values(combinedSagas).map(i => fork(makeSaga(i))));
}