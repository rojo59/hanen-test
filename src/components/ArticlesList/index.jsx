import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash-es';

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
      return <div>Loading Articles</div>;
    } else if (!isFetching && error) {
      return <p>There was an error loading the articles.</p>;
    } else if (articles.length > 0) {
      return (
        <div>
          <ul>
            {map(articles, (article, key) => {
              return <li key={key} />;
            })}
          </ul>
        </div>
      );
    } else {
      return <div>There are currently no articles.</div>;
    }
  }
}
