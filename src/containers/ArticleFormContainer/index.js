import { connect } from 'react-redux';
import { map, sortedUniq } from 'lodash';
import { addArticle } from '../../redux/actions/articles';

// Components
import ArticleForm from '../../components/ArticleForm';

const mapStateToProps = function(state) {
  const { articles } = state;

  return {
    articles: articles.get('articles').size
      ? articles.get('articles').toJS()
      : [],
    categories: sortedUniq(map(articles.get('articles').toJS(), 'category')),
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    dispatchAddArticle: article => {
      dispatch(addArticle(article));
    },
  };
};

/**
 *
 */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleForm);
