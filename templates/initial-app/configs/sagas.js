import { takeLatest, call } from 'redux-saga/effects';
import fetchEntity from './fetch-entity';

/**
 * Make saga
 * @param actions
 * @param actionName
 * @param cancelActionName
 * @param api
 * @param load function* (fetch, data) {
 *               yield call(fetch, data);
 *             }
 * @param take { takeLatest, takeEvery }
 * @returns {Function}
 */
export const makeSaga = (
  {
    actions,
    actionName,
    cancelActionName,
    api,
    load = null,
    take = takeLatest,
  },
) => {
  const fetch = fetchEntity.bind(null, actions, api);
  function* loadRequest(data) {
    yield call(fetch, data);
  }
  return function* () {
    const watcher = yield take(
      actionName,
      load === null ? loadRequest : load.bind(null, fetch),
    );
    if (cancelActionName) {
      yield take(cancelActionName, function* () {
        yield watcher.cancel();
      });
    }
  };
};