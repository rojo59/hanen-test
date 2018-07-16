import { Map, fromJS } from 'immutable';
import { handleActions } from 'redux-actions';

import {
  getArticlesRequest,
  getArticlesSuccess,
  getArticlesError,
} from '../actions/articles';

const defaultState = fromJS({
  data: {},
  _metadata: {
    isFetching: false,
  },
});

export default handleActions(
  {
    [getArticlesRequest](
      state,
      {
        meta: { isFetching },
      }
    ) {
      return state.setIn(['_metadata', 'isFetching'], isFetching);
    },
    [getArticlesSuccess](
      state,
      {
        payload,
        meta: { isFetching },
      }
    ) {
      if (payload && payload.data) {
        return state.set('data', fromJS(payload.data)).mergeDeep({
          _metadata: Map({
            isFetching: isFetching,
          }),
        });
      } else {
        return state.set('error', 'There was an error.').mergeDeep({
          _metadata: Map({
            isFetching: isFetching,
          }),
        });
      }
    },
    [getArticlesError](
      state,
      {
        payload,
        meta: { isFetching },
      }
    ) {
      return state.set('error', fromJS(payload)).mergeDeep({
        _metadata: Map({
          isFetching: isFetching,
        }),
      });
    },
  },
  defaultState
);
