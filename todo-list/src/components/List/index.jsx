import React, { Component } from 'react';
import Item from '../Item';
import './index.css';
export default class List extends Component {
  render() {
    const { todos, onTodoChange, onRemoveTodoById } = this.props;
    return (
      <div className="main">
        <ul>
          {todos.map((todo) => (
            <Item
              key={todo.id}
              todo={todo}
              onTodoChange={onTodoChange}
              onRemoveTodoById={onRemoveTodoById}
            />
          ))}
        </ul>
      </div>
    );
  }
}
