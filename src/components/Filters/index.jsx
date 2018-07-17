import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { createInputFiles } from '../../../node_modules/typescript';

// Styles
const Root = styled('form')`
  ${({ theme }) => theme.forms};
`;

export default class Filters extends Component {
  static get propTypes() {
    return {
      name: PropTypes.string,
      tags: PropTypes.string,
      dispatchFilterArticles: PropTypes.func.isRequired,
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

    this.onKeyDown = this.onKeyDown.bind(this);
    this.filterArticles = this.filterArticles.bind(this);
  }

  onKeyDown(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      switch (e.currentTarget) {
        case 'name':
          this.filterArticles(this.filterByName.value, 'name');
          break;
        case 'tag':
          this.filterArticles(this.filterByTags.value, 'tag');
          break;
        default:
          return;
      }
    }
  }

  filterArticles(value, filterBy) {
    const { dispatchFilterArticles } = this.props;
    console.log('filterArticles:', value, filterBy);
    dispatchFilterArticles(value, filterBy);
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
              onKeyDown={this.onKeyDown}
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
              onKeyDown={this.onKeyDown}
            />
          </div>
        </div>
      </Root>
    );
  }
}
