import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash';
import styled from 'react-emotion';

// Components
import Article from '../../components/Article';

// Styles
const Root = styled('div')`
  [data-component='Article'] {
    margin-bottom: 30px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export default class ArticlesList extends Component {
  static get propTypes() {
    return {
      articles: PropTypes.array.isRequired,
      error: PropTypes.object,
      isFetching: PropTypes.bool.isRequired,
      dispatchGetArticles: PropTypes.func.isRequired,
    };
  }

  static get defaultProps() {
    return {
      aricles: [],
      isFetching: false,
    };
  }

  componentDidMount() {
    const { articles, isFetching, error, dispatchGetArticles } = this.props;

    if (!isFetching && articles.length === 0 && !error) {
      dispatchGetArticles();
    }
  }

  render() {
    const { articles, isFetching, error } = this.props;

    if (isFetching) {
      return (
        <Root>
          <p>Loading Articles</p>
        </Root>
      );
    } else if (!isFetching && error) {
      return (
        <Root>
          <p>There was an error loading the articles.</p>
        </Root>
      );
    } else if (articles.length > 0) {
      return (
        <Root>
          {map(articles, article => {
            const { id, ...articleProps } = article;
            return <Article key={id} {...articleProps} />;
          })}
        </Root>
      );
    } else {
      return (
        <Root>
          <p>There are currently no articles.</p>
        </Root>
      );
    }
  }
}
