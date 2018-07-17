import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { clone, map } from 'lodash';

// Components
import Dropdown from '../../components/Dropdown';

// Styles
const Root = styled('div')`
  margin-top: 30px;
  form {
    ${({ theme }) => theme.forms};
  }
`;

const initialErrors = {
  articleName: '',
  articleDesc: '',
  articleTags: '',
  articleCategory: '',
};

export default class ArticleForm extends Component {
  static get propTypes() {
    return {
      categories: PropTypes.array.isRequired,
      dispatchAddArticle: PropTypes.func.isRequired,
    };
  }

  static get defaultProps() {
    return {
      categories: [],
    };
  }

  constructor() {
    super();

    this.state = {
      errors: clone(initialErrors),
    };

    this.onKeyDown = this.onKeyDown.bind(this);
    this.addArticle = this.addArticle.bind(this);
    this.validate = this.validate.bind(this);
  }

  onKeyDown(e) {
    if (e.keyCode === 13) {
      this.addArticle(e);
    }
  }

  addArticle(e) {
    const { dispatchAddArticle } = this.props;
    e.preventDefault();
    if (this.validate()) {
      dispatchAddArticle({
        name: this.articleName.value,
        description: this.articleDesc.value,
        tags: this.articleTags.value,
        category: this.articleCategory.value,
      });
      this.articleForm.reset();
      this.articleCategory.clear();
    }
  }

  validate() {
    let errors = clone(initialErrors);
    let valid = true;
    if (this.articleName.value === '') {
      valid = false;
      errors.articleName = 'Please enter a name.';
    }
    if (this.articleDesc.value === '') {
      valid = false;
      errors.articleDesc = 'Please enter a description.';
    }
    if (this.articleTags.value === '') {
      valid = false;
      errors.articleTags = 'Please enter a tag(s).';
    }
    if (!this.articleCategory.value) {
      valid = false;
      errors.articleCategory = 'Please enter/slect a category.';
    }
    this.setState({ errors });
    return valid;
  }

  render() {
    const { categories } = this.props;
    const { errors } = this.state;
    return (
      <Root>
        <form ref={articleForm => (this.articleForm = articleForm)}>
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
              {errors.articleName !== '' && (
                <span className="form-error">{errors.articleName}</span>
              )}
            </div>
            <div>
              <label htmlFor="articleDesc">Description</label>
              <textarea
                id="articleDesc"
                name="articleDesc"
                type="text"
                placeholder=""
                rows="3"
                ref={articleDesc => (this.articleDesc = articleDesc)}
              />
              {errors.articleDesc !== '' && (
                <span className="form-error">{errors.articleDesc}</span>
              )}
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
              {errors.articleTags !== '' && (
                <span className="form-error">{errors.articleTags}</span>
              )}
            </div>
            <div>
              <label htmlFor="articleCategory">Category</label>
              <Dropdown
                name="articleCategory"
                options={map(categories, category => {
                  return {
                    value: category,
                    label: category,
                  };
                })}
                ref={articleCategory =>
                  (this.articleCategory = articleCategory)
                }
              />
              {errors.articleCategory !== '' && (
                <span className="form-error">{errors.articleCategory}</span>
              )}
            </div>
            <div>
              <button className="btn" type="submit" onClick={this.addArticle}>
                Submit
              </button>
            </div>
          </div>
        </form>
      </Root>
    );
  }
}
