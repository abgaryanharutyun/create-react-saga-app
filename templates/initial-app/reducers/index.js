import { combineReducers } from 'redux';
import entities from './entities';
import loading from './loading';
import error from './error';

const combinedReducers = {
  // append all reducers here
  loading,
  error,
  entities,
};

export default (state, action) => combineReducers(combinedReducers)(state, action);