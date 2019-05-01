import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import appState from '../reducers';
import rootSaga from '../sagas';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();
const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];

  const store = createStore(
    appState,
    { entities: persistedState },
    composeWithDevTools(applyMiddleware(...middlewares)),
  );

  store.subscribe(() => {
    saveState(store.getState());
  });

  sagaMiddleware.run(rootSaga);
  store.close = () => store.dispatch(END);

  return store;
};

export default configureStore();