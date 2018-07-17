import { Map, fromJS, List } from 'immutable';
import { handleActions } from 'redux-actions';

import {
  getArticlesRequest,
  getArticlesSuccess,
  getArticlesError,
  addArticle,
  setFilters,
  clearFilters,
} from '../actions/articles';

const defaultState = Map({
  articles: List(),
  filters: List(),
  categoryColours: Map({
    bigfoot: '#239652',
    nessy: '#228fb5',
    jackalope: '#f99c32',
  }),
  _metadata: Map({
    isFetching: false,
  }),
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
        return state.set('articles', fromJS(payload.data)).mergeDeep({
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
    [addArticle](state, { payload }) {
      if (payload) {
        let article = payload;
        article.id = state.get('articles').size + 1;
        let categoryColours = state.get('categoryColours').toJS();
        const category = article.category.toLowerCase();
        if (!categoryColours[category]) {
          categoryColours[category] = `#${(
            (Math.random() * 0xffffff) <<
            0
          ).toString(16)}`;
        }
        return state
          .set('articles', state.get('articles').push(Map(article)))
          .set('categoryColours', Map(categoryColours));
      } else {
        return state;
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
    [setFilters](state, { payload }) {
      if (payload && payload.data) {
        return state.set('filters', payload.data.split(','));
      } else {
        return state.set('filters', List());
      }
    },
    [clearFilters](state) {
      return state.set('filters', List());
    },
  },
  defaultState
);
