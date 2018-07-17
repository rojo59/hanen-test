import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

// Styles
const Root = styled('form')`
  ${({ theme }) => theme.forms};
`;

export default class Filters extends Component {
  static get propTypes() {
    return {
      name: PropTypes.string,
      tags: PropTypes.string,
      dispatchSetFilters: PropTypes.func.isRequired,
    };
  }

  static get defaultProps() {
    return {
      name: '',
      tags: '',
    };
  }

  static getDerivedStateFromProps(props) {
    const { name, tags } = props;
    return {
      name,
      tags,
    };
  }

  constructor() {
    super();

    this.state = {
      name: '',
      tags: '',
    };

    this.onChange = this.onChange.bind(this);
    this.filterArticles = this.filterArticles.bind(this);
  }

  onChange() {
    this.filterArticles();
  }

  filterArticles() {
    const { dispatchSetFilters } = this.props;
    dispatchSetFilters(this.filterByName.value, this.filterByTags.value);
  }

  render() {
    // const { name, tags } = this.state;

    return (
      <Root>
        <div className="form-header">Filter Articles</div>
        <div className="form-body">
          <div>
            <label htmlFor="filterByName">Filter by name</label>
            <input
              id="filterByName"
              name="filterByName"
              type="text"
              placeholder=""
              ref={filterByName => (this.filterByName = filterByName)}
              onChange={this.onChange}
            />
          </div>
          <div>
            <label htmlFor="filterByTags">Filter by tags</label>
            <input
              id="filterByTags"
              name="filterByTags"
              type="text"
              placeholder=""
              ref={filterByTags => (this.filterByTags = filterByTags)}
              onChange={this.onChange}
            />
          </div>
        </div>
      </Root>
    );
  }
}
