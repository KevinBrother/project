import React, { Component } from 'react';
import './index.css';
export default class Item extends Component {
  state = { isMouseEnter: false };

  handleTodoChange = () => {
    const { todo, onTodoChange } = this.props;
    onTodoChange(todo);
  };

  handleRemoveTodoById = (id) => {
    return () => {
      this.props.onRemoveTodoById(id);
    };
  };

  handleMouseEnterOrLeave = (isMouseEnter) => {
    return () => {
      this.setState({ isMouseEnter });
    };
  };

  render() {
    const { id, isDone, name } = this.props.todo;
    const { isMouseEnter } = this.state;
    return (
      <li
        style={{ backgroundColor: isMouseEnter ? '#ddd' : '' }}
        className="item-wrap"
        onMouseEnter={this.handleMouseEnterOrLeave(true)}
        onMouseLeave={this.handleMouseEnterOrLeave(false)}
      >
        <label>
          <input
            type="checkbox"
            checked={isDone}
            onChange={this.handleTodoChange}
          />
          <span>{name}</span>
        </label>
        <button
          style={{ display: isMouseEnter ? 'block' : 'none' }}
          onClick={this.handleRemoveTodoById(id)}
        >
          删除
        </button>
      </li>
    );
  }
}
