import React from 'react';
import './App.css';
import List from './components/list';
import Search from './components/search';

function App() {
  return (
    <div className="App">
      <h1>Search in list</h1>
      <Search />
      <List />
    </div>
  );
}

export default App;
