import { connect } from 'react-redux';

import { getArticles } from '../../redux/actions/articles';

// Components
import ArticlesList from '../../components/ArticlesList';

const mapStateToProps = function(state) {
  const { articles } = state;

  return {
    articles: articles.get('articles').size
      ? articles.get('articles').toJS()
      : [],
    error: articles.get('error'),
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
