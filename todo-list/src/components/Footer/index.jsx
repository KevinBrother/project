import React, { Component } from 'react';
import './index.css';
export default class Footer extends Component {
  handleRemoveAllDoneTodos = () => {
    this.props.onRemoveAllDoneTodos();
  };

  handleChangeAllTodos = (event) => {
    this.props.onChangeAllTodos(event.target.checked);
  };

  render() {
    const { todos } = this.props;
    const count = todos.reduce((acc, item) => {
      if (!item.isDone) {
        return acc;
      }
      return acc + 1;
    }, 0);

    return (
      <div className="footer item-wrap">
        <label>
          <input
            type="checkbox"
            checked={count === todos.length && todos.length !== 0}
            onChange={this.handleChangeAllTodos}
          />
          <span>
            已完成{count}/共有{todos.length}
          </span>
        </label>
        <button onClick={this.handleRemoveAllDoneTodos}>删除所有已完成</button>
      </div>
    );
  }
}
