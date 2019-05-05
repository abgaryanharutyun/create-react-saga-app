import merge from 'deepmerge';

export default (state = {
  user: {}
}, action) => {
  if (action.response && action.response.entities) {
    return merge.all([state, action.response.entities], {
      clone: false,
      arrayMerge: (destinationArray, sourceArray) => sourceArray,
    });
  }

  return state;
};