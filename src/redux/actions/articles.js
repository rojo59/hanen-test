import { createActions } from 'redux-actions';
import axios from 'axios';

export const {
  getArticlesRequest,
  getArticlesSuccess,
  getArticlesError,
  addArticle,
  setFilters,
  clearFilters,
} = createActions({
  GET_ARTICLES_REQUEST: [() => null, () => ({ isFetching: true })],
  GET_ARTICLES_SUCCESS: [response => response, () => ({ isFetching: false })],
  GET_ARTICLES_ERROR: [error => error, () => ({ isFetching: false })],
  ADD_ARTICLE: response => response,
  SET_FILTERS: response => response,
  CLEAR_FILTERS: response => response,
});

export function fetchArticles() {
  return axios.get('./articles.json');
}
export function getArticles(artist) {
  return async function(dispatch) {
    dispatch(getArticlesRequest());
    return fetchArticles(artist)
      .then(response => dispatch(getArticlesSuccess(response)))
      .catch(error => dispatch(getArticlesError(error)));
  };
}
