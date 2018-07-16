import React, { Component } from 'react';
import styled from 'react-emotion';

// Containers
import ArticlesContainer from '../../containers/ArticlesContainer';

const Root = styled('div')`
  width: 100vw;
  padding: 30px;
`;

export default class App extends Component {
  render() {
    return (
      <Root>
        <ArticlesContainer />
      </Root>
    );
  }
}
