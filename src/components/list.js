import React, { Component } from 'react';
import ListChild from './list-child';
import ListContent from './static/list-content';

class List extends Component {
  render() {
    const elements = ListContent.filter(it =>
      it.name.includes(this.props.inputValue)
    ).map(element => {
      //get all elements from array.
      return <ListChild name={element.name} />; // Sent name to ListChild like props element.
    });
    let listStyle;
    if (this.props.inputValue < 1) {
      console.log(this.props.inputValue);
      listStyle = 'hidden';
    } else {
      listStyle = 'block';
    }
    return (
      <div>
        <div className="searchingFor">
          You searching for: <span>{this.props.inputValue}</span>
        </div>
        <ul className={listStyle}>{elements}</ul>
      </div>
    );
  }
}

export default List;
