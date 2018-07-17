import { connect } from 'react-redux';

import { clearFilters } from '../../redux/actions/articles';

// Components
import Header from '../../components/Header';

const mapDispatchToProps = function(dispatch) {
  return {
    dispatchClearFilters: () => {
      dispatch(clearFilters());
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
