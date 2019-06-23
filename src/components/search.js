import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null // Add a default value for state.
    };
  }
  inputValue(e) {
    this.setState({ value: e.target.value }); //change state with input value.
  }
  render() {
    return <input type="text" onChange={this.inputValue.bind(this)} />;
  }
}

export default Search;
