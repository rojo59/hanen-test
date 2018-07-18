import { connect } from 'react-redux';
import { filter } from 'lodash';

import { getArticles } from '../../redux/actions/articles';

// Components
import ArticlesList from '../../components/ArticlesList';

const mapStateToProps = function(state) {
  const { articles } = state;

  let filteredArticles = articles.get('articles').toJS();
  const filters = articles.get('filters').toJS();
  if (filters.name !== '') {
    filteredArticles = filter(filteredArticles, article => {
      return article.name.toLowerCase().includes(filters.name.toLowerCase());
    });
  }
  if (filters.tags !== '') {
    filteredArticles = filter(filteredArticles, article => {
      return article.tags.toLowerCase().includes(filters.tags.toLowerCase());
    });
  }
  return {
    articles: filteredArticles.length > 0 ? filteredArticles : [],
    error: articles.get('error'),
    categoryColours: articles.get('categoryColours').toJS(),
    isFetching: articles.getIn(['_metadata', 'isFetching']),
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    dispatchGetArticles: () => {
      dispatch(getArticles());
    },
  };
};

/**
 *
 */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticlesList);
