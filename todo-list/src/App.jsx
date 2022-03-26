import React, { Component } from 'react';
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';

import './App.css';

export default class App extends Component {
  state = {
    todos: [
      { id: 1, name: 'dance', isDone: true },
      { id: 2, name: 'singing', isDone: false }
    ]
  };

  // 增加一个todo
  onAddTodo = (todoObj) => {
    const { todos } = this.state;
    todos.unshift(todoObj);
    /*   const newTodos = [todoObj, ...todos];
    this.setState({todos, newTodos}); */
    this.setState({ todos });
  };

  // 改变某个todo的状态
  onTodoChange = (todo) => {
    const { todos } = this.state;
    const newTodos = todos.map((item) => {
      if (item.id === todo.id) {
        return { ...item, isDone: !item.isDone };
      }
      return item;
    });
    this.setState({ todos: newTodos });
  };

  // 删除某个todo
  onRemoveTodoById = (todoId) => {
    const { todos } = this.state;
    const newTodos = todos.filter((todo) => todo.id !== todoId);
    this.setState({ todos: newTodos });
  };

  // remove all todos that are done (isDone: true)
  onRemoveAllDoneTodos = () => {
    const { todos } = this.state;
    const newTodos = todos.filter((todo) => !todo.isDone);
    this.setState({ todos: newTodos });
  };

  // 全选与反全选
  onChangeAllTodos = (isDone) => {
    const { todos } = this.state;
    const newTodos = todos.map((todo) => {
      return { ...todo, isDone };
    });
    this.setState({ todos: newTodos });
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="container">
        <Header onAddTodo={this.onAddTodo} />
        <List
          todos={todos}
          onTodoChange={this.onTodoChange}
          onRemoveTodoById={this.onRemoveTodoById}
        />
        <Footer
          todos={todos}
          onRemoveAllDoneTodos={this.onRemoveAllDoneTodos}
          onChangeAllTodos={this.onChangeAllTodos}
        />
      </div>
    );
  }
}
