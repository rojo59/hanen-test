import React, { Component } from 'react';
import styled from 'react-emotion';
import { media } from '../../theme/variables';

// Containers
import ArticlesContainer from '../../containers/ArticlesContainer';
import FiltersContainer from '../../containers/FiltersContainer';
import ArticleFormContainer from '../../containers/ArticleFormContainer';

const Root = styled('div')`
  width: 100vw;
  padding: 25px;
  .forms-wrapper {
    margin: 25px 0 0;
  }
  @media ${media.md} {
    display: flex;
    padding: 50px;
    .articles-wrapper {
      width: 60%;
    }
    .forms-wrapper {
      width: 40%;
      margin: 0 0 0 50px;
    }
  }
  @media ${media.lg} {
    .articles-wrapper {
      width: 70%;
    }
    .forms-wrapper {
      width: 30%;
    }
  }
`;

export default class App extends Component {
  render() {
    return (
      <Root>
        <div className="articles-wrapper">
          <ArticlesContainer />
        </div>
        <div className="forms-wrapper">
          <FiltersContainer />
          <ArticleFormContainer />
        </div>
      </Root>
    );
  }
}
