import React, { Component } from 'react';
import './App.css';
import List from './components/list';
import Search from './components/search';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
  }
  searchValue(param) {
    this.setState({ value: param }); // Store from child input valuea to STATE.
  }
  render() {
    return (
      <div className="App">
        <h1>Search in list</h1>
        <Search onChange={this.searchValue.bind(this)} />
        <List inputValue={this.state.value} />
      </div>
    );
  }
}

export default App;
