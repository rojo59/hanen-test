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
  filters: Map({
    name: '',
    tags: '',
  }),
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
        localStorage.setItem('hanen-articles', JSON.stringify(payload));
        const categoryColours = localStorage.getItem('hanen-colours')
          ? Map(JSON.parse(localStorage.getItem('hanen-colours')))
          : state.get('categoryColours');
        return state
          .set('articles', fromJS(payload.data))
          .set('categoryColours', categoryColours)
          .mergeDeep({
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
          localStorage.setItem(
            'hanen-colours',
            JSON.stringify(categoryColours)
          );
        }
        const allArticles = state.get('articles').push(Map(article));
        localStorage.setItem(
          'hanen-articles',
          JSON.stringify({ data: allArticles })
        );
        return state
          .set('articles', allArticles)
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
      localStorage.setItem('hanen-filters', JSON.stringify(payload));
      return state.set('filters', Map(payload));
    },
    [clearFilters](state) {
      localStorage.clear();
      return state.set(
        'filters',
        Map({
          name: '',
          tags: '',
        })
      );
    },
  },
  defaultState
);
