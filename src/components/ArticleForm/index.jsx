import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

// Components
import Dropdown from '../../components/Dropdown';

// Styles
const Root = styled('form')`
  margin-top: 30px;
  ${({ theme }) => theme.forms};
`;

export default class ArticleForm extends Component {
  static get propTypes() {
    return {
      dispatchAddArticle: PropTypes.func.isRequired,
    };
  }

  constructor() {
    super();

    this.onKeyDown = this.onKeyDown.bind(this);
    this.addArticle = this.addArticle.bind(this);
    this.onCategoryChange = this.onCategoryChange.bind(this);
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

  addArticle(article) {
    const { dispatchAddArticle } = this.props;
    console.log('addArticle');
    dispatchAddArticle(article);
  }

  onCategoryChange(category) {
    console.log('onCategoryChange:', category);
  }

  render() {
    return (
      <Root>
        <div className="form-header">Add an Article</div>
        <div className="form-body">
          <div>
            <label htmlFor="articleName">Name</label>
            <input
              id="articleName"
              name="articleName"
              type="text"
              placeholder=""
              ref={articleName => (this.articleName = articleName)}
              onKeyDown={this.onKeyDown}
            />
          </div>
          <div>
            <label htmlFor="articleDesc">Description</label>
            <input
              id="articleDesc"
              name="articleDesc"
              type="text"
              placeholder=""
              ref={articleDesc => (this.articleDesc = articleDesc)}
              onKeyDown={this.onKeyDown}
            />
          </div>
          <div>
            <label htmlFor="articleTags">Tags</label>
            <input
              id="articleTags"
              name="articleTags"
              type="text"
              placeholder=""
              ref={articleTags => (this.articleTags = articleTags)}
              onKeyDown={this.onKeyDown}
            />
          </div>
          <div>
            <label htmlFor="articleCategory">Category</label>
            <Dropdown
              name="articleCategory"
              options={[
                { value: 'bigfoot', label: 'Bigfoot' },
                { value: 'nessy', label: 'Nessy' },
                { value: 'jackalope', label: 'Jackalope' },
              ]}
              onChange={this.onCategoryChange}
            />
          </div>
        </div>
      </Root>
    );
  }
}
