import { put, call, cancelled } from 'redux-saga/effects';
import { CancelToken } from 'axios';
/*
 * entity: {request:fn, success:fn, failure:fn}
 * apiFn: api function
 * id: data to pass to apiFn
 *
 * will dispatch the entity actions on request, success and failure of the api
 * */
export default function* fetchEntity(entity, apiFn, id) {
  const source = CancelToken.source();
  yield put(entity.request(id));
  try {
    const { data } = yield call(apiFn, id, source.token);
    yield put(entity.success(id, data));
  } catch (error) {
    yield put(entity.failure(id, { error: error.response ? error.response.data : true, isError: true }));
  } finally {
    if (yield cancelled()) {
      yield source.cancel('Request canceled!');
    }
  }
}