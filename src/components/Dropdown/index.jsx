import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import styled from 'react-emotion';

const Root = styled('section')`
  width: 100%;
  max-width: 400px;
`;

export default class DropDown extends Component {
  static get propTypes() {
    return {
      name: PropTypes.string.isRequired,
      disabled: PropTypes.bool,
      onChange: PropTypes.func,
      options: PropTypes.array,
    };
  }

  static get defaultProps() {
    return {
      name: 'option',
      disabled: false,
      options: [],
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      currentOption: {
        value: '',
        label: '',
      },
    };

    this.changeOption = this.changeOption.bind(this);
  }

  changeOption(option) {
    const { onChange } = this.props;
    this.setState({ currentOption: option });

    if (onChange) onChange(option);
  }

  render() {
    const { name, disabled, options } = this.props;
    const { currentOption } = this.state;
    const value = currentOption && currentOption.value;
    return (
      <Root>
        <Select
          name={name}
          value={value}
          disabled={disabled}
          clearable={false}
          placeholder={`Please select a ${name}`}
          onChange={this.changeOption}
          options={options}
        />
      </Root>
    );
  }
}
