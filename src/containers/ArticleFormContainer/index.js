import { connect } from 'react-redux';

import { addArticle } from '../../redux/actions/articles';

// Components
import ArticleForm from '../../components/ArticleForm';

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
  null,
  mapDispatchToProps
)(ArticleForm);
