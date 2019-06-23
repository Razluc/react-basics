import React, { Component } from 'react';

class Search extends Component {
  inputValue(e) {
    this.props.onChange(e.target.value); // Send to parent valuea from input
  }
  render() {
    return (
      <div>
        <input type="text" onChange={this.inputValue.bind(this)} />
      </div>
    );
  }
}

export default Search;
