import React, { Component } from 'react';
import ListChild from './list-child';
import ListContent from './static/list-content';

class List extends Component {
  render() {
    const elements = ListContent.map(element => {
      //get all elements from array.
      return <ListChild name={element.name} />; // Sent name to ListChild like props element.
    });
    return (
      <div>
        <ul>{elements}</ul>
      </div>
    );
  }
}

export default List;
