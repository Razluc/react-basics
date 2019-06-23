import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListChild extends Component {
  static defaultProps = {
    name: PropTypes.sting
  };

  render() {
    return <li>{this.props.name}</li>;
  }
}
export default ListChild;
