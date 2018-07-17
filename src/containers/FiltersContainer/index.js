import { connect } from 'react-redux';

import { setFilters } from '../../redux/actions/articles';

// Components
import Filters from '../../components/Filters';

const mapStateToProps = function(state) {
  const { articles } = state;

  return {
    filters: articles.get('filters').toJS(),
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    dispatchSetFilters: (name, tags) => {
      dispatch(
        setFilters({
          name: name,
          tags: tags,
        })
      );
    },
  };
};

/**
 *
 */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters);
