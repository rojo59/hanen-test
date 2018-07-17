import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import {
  black,
  borderColour,
  hoverColour,
  headerHeight,
  media,
} from '../../theme/variables';

// Styles
const Root = styled('header')`
  position: fixed;
  top: 0;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 0.9);
  border-bottom: 1px solid ${borderColour};
  width: 100vw;
  height: ${headerHeight};

  a,
  button {
    color: ${black};
    &:hover {
      color: ${hoverColour};
    }
  }

  button {
    background: none;
    margin: 0;
    padding: 0;
    border: none;
  }

  a {
    text-decoration: none;
  }

  @media ${media.sm} {
    padding: 15px 50px;
  }
`;

export default class Header extends Component {
  static get propTypes() {
    return {
      dispatchClearFilters: PropTypes.func.isRequired,
    };
  }

  constructor() {
    super();

    this.resetPage = this.resetPage.bind(this);
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }

  resetPage() {
    const { dispatchClearFilters } = this.props;
    dispatchClearFilters();
  }

  render() {
    return (
      <Root>
        <button onClick={this.scrollToTop}>Home</button>
        <button onClick={this.resetPage}>Reset</button>
        <a
          href="https://github.com/rojo59/hanen-test"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Source
        </a>
      </Root>
    );
  }
}
