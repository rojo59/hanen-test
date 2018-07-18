import { connect } from 'react-redux';

import { clearFilters, getArticles } from '../../redux/actions/articles';

// Components
import Header from '../../components/Header';

const mapDispatchToProps = function(dispatch) {
  return {
    dispatchClearFilters: () => {
      dispatch(clearFilters());
      dispatch(getArticles());
    },
  };
};

/**
 *
 */
export default connect(
  null,
  mapDispatchToProps
)(Header);
