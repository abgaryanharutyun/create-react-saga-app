import { createSelector } from 'reselect';

const getLoading = state => state.loading;

export default loadActionType => params => createSelector(
  getLoading,
  loading => loading[`${loadActionType}_${JSON.stringify(params)}`],
);