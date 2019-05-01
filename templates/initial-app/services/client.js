import axios from 'axios';
import Promise from 'bluebird';
import { API_ROOT } from '../configs/env-vars';
import { getAccessToken, getDomainTracking } from '../configs/localStorage';

Promise.config({
  cancellation: true,
  warnings: false,
});

// overwrite native Promise implementation with Bluebird's
window.Promise = Promise;

const getApiRoot = () => `${API_ROOT}api/${getDomainTracking().id}`;

export const authorizationHeader = () => ({
  Authorization: getAccessToken(),
});

export default () => {
  const service = axios.create({
    baseURL: getApiRoot(), // url of the api
    headers: {
      Authorization: getAccessToken(),
    },
  });
  service.interceptors.response.use(
    response => response,
    (error) => {
      const errorResponse = error.response;
      if (errorResponse.status === 401) {
        // store.dispatch(logout());
      }
      throw error;
    },
  );
  return service;
};