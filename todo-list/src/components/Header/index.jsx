import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import './index.css';

export default class Header extends Component {
  onKeyUp = (event) => {
    const { target, code } = event;
    if (code !== 'Enter' || target.value.trim() === '') return;
    this.props.onAddTodo({
      id: nanoid(),
      name: target.value,
      isDone: false
    });
    target.value = '';
  };

  render() {
    return (
      <div className="header">
        <input type="text" onKeyUp={this.onKeyUp} />
      </div>
    );
  }
}
