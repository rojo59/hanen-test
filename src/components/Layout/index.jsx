import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';
import { ThemeProvider } from 'emotion-theming';
import applyCssNormalize from '../../theme/normalize';
import applyGlobalStyles from '../../theme/globals';
import theme from '../../theme';

applyCssNormalize();
applyGlobalStyles();

class Layout extends Component {
  static propTypes = {
    page: PropTypes.string,
    children: PropTypes.node,
  };

  render() {
    const { children } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <div>{children}</div>
      </ThemeProvider>
    );
  }
}

export default Layout;
