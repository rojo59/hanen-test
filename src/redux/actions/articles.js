import { createActions } from 'redux-actions';
import axios from 'axios';

export const {
  getArticlesRequest,
  getArticlesSuccess,
  getArticlesError,
} = createActions({
  GET_ARTICLES_REQUEST: [() => null, () => ({ isFetching: true })],
  GET_ARTICLES_SUCCESS: [response => response, () => ({ isFetching: false })],
  GET_ARTICLES_ERROR: [error => error, () => ({ isFetching: false })],
});

export function fetchArticles() {
  return axios.get('/articles.json');
}
export function getArticles(artist) {
  return async function(dispatch) {
    dispatch(getArticlesRequest());
    return fetchArticles(artist)
      .then(response => dispatch(getArticlesSuccess(response)))
      .catch(error => dispatch(getArticlesError(error)));
  };
}
